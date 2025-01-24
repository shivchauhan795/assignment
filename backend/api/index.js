import express from "express";
import dotenv from "dotenv";
import { MongoClient, UUID } from "mongodb"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import authMiddleware from './auth.js'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const MongoURL = process.env.MONGO_URL_LOCAL || process.env.MONGO_URL;
const client = new MongoClient(MongoURL)
const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL_LOCAL || process.env.FRONTEND_URL, // Specify your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Allow cookies or other credentials to be sent
}));
app.options('*', cors());

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1);
    }
};

connectToDatabase();

app.get("/", (req, res) => {
    res.send(`Hello world!!`);
})

app.post("/register", async (request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const collection = db.collection("admin");
        const user = {
            email: request.body.email,
            password: hashedPassword,
        }

        const alreadyExist = await collection.findOne({ email: request.body.email })

        if (alreadyExist) {
            return response.status(409).send({
                message: "User with this email already exists",
            });
        }

        const result = await collection.insertOne(user);
        response.status(201).send({
            message: "User Created Successfully",
            result,
        });

        await client.close();
    } catch (error) {
        response.status(500).send({
            message: "Error creating user",
            error,
        });
    }

});

//login
app.post("/login", async (request, response) => {
    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const collection = db.collection("admin");
        const user = await collection.findOne({ email: request.body.email });
        if (!user) {
            return response.status(404).send({
                message: "Email not found",
            });
        }
        const match = await bcrypt.compare(request.body.password, user.password);

        if (!match) {
            return response.status(401).send({
                message: "Invalid password",
            });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
        );
        response.status(200).send({
            message: "Login successful",
            user: {
                email: user.email,
                token,
            }
        });
        await client.close();
    } catch (error) {
        response.status(404).send({
            message: "Email not found",
            error,
        });
    }
})

// working
app.post('/api/addblog', async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required!" });
    }

    try {
        const blog = {
            id: uuidv4(),
            title,
            content,
            createdAt: new Date(),
            verified: false
        };
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const result = await db.collection("blogs").insertOne(blog);
        res.status(201).json({
            message: "Blog added successfully!",
            blogId: result.insertedId,
        });
    } catch (error) {
        console.error("Error adding blog:", error);
        res.status(500).json({ message: "Failed to add blog. Please try again later." });
    }
});

// working
app.get("/api/admin", authMiddleware, async (req, res) => {
    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");

        const [visitCount, blogs] = await Promise.all([
            db.collection("metrics").findOne({ key: "totalVisits" }),
            db.collection("blogs").find({}).toArray(),
        ]);

        const totalVisits = visitCount ? visitCount.count : 0;

        res.status(200).json({
            totalVisits,
            blogs,
        });

    } catch (error) {
        console.error("Error fetching admin data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// working
app.put("/api/admin/blog/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { action } = req.body; // "approve" or "reject"

    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const collection = db.collection("blogs");
        if (action === "approve") {
            await collection.updateOne(
                { id: id },
                { $set: { verified: true } }
            );
            res.status(200).json({ message: "Blog approved successfully" });
        } else if (action === "reject") {
            await collection.deleteOne({ id: id });
            res.status(200).json({ message: "Blog rejected and deleted successfully" });
        } else if (action === "remove") {
            await collection.updateOne(
                { id: id },
                { $set: { verified: false } }
            );
            res.status(200).json({ message: "Blog removed and added to ToBeVerified Blog successfully" });
        } else {
            res.status(400).json({ message: "Invalid action" });
        }
    } catch (error) {
        console.error("Error updating blog status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// working
app.get("/api/blogs", async (req, res) => {
    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const blogs = await db.collection("blogs").find({ verified: true }).toArray();
        res.status(200).json({ blogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// working
app.get('/api/blog/:id', async (req, res) => {
    console.log("hlo");
    const { id } = req.params;
    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const blog = await db.collection('blogs').findOne({ id: id });
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error fetching blog by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// working
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const collection = db.collection("subscribers");

        const existingSubscriber = await collection.findOne({ email });
        if (existingSubscriber) {
            return res.status(409).json({ message: 'Email is already subscribed' });
        }

        await collection.insertOne({ email });

        res.status(200).json({ message: 'Successfully subscribed!' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// working
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, budget, deadline, message } = req.body;

    const newContact = {
        name,
        email,
        phone,
        budget,
        deadline,
        message,
        createdAt: new Date(),
    };

    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const collection = db.collection("contact");


        await collection.insertOne(newContact);

        res.status(200).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ message: 'Error submitting form. Please try again later.' });
    }
});

// working
app.get('/api/admin/contacts', authMiddleware, async (req, res) => {
    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db('assignment');
        const collection = db.collection('contact');

        // Fetch all contacts from the collection
        const contacts = await collection.find().toArray();
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Error fetching contacts. Please try again later.' });
    }

});

// working
app.post('/api/incrementVisit', async (req, res) => {
    try {
        if (!client) {
            await client.connect();
        }
        const db = client.db("assignment");
        const collection = db.collection("metrics");

        const existingVisitCount = await collection.findOne({ key: "totalVisits" });

        if (existingVisitCount) {
            await collection.updateOne(
                { key: "totalVisits" },
                { $inc: { count: 1 } }
            );
        } else {
            await collection.insertOne({ key: "totalVisits", count: 1 });
        }

        res.status(200).json({ message: "Visit count incremented successfully" });
    } catch (error) {
        console.error("Error incrementing visit count:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})