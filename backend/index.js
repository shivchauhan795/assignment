import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb"
dotenv.config();
const MongoURL = process.env.MONGO_URL_LOCAL || process.env.MONGO_URL;
const client = new MongoClient(MongoURL)
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send(`Hello world!!`);
})

app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;
    await client.connect();
    const db = client.db("assignment");
    const collection = db.collection("contact");
    await collection.insertOne({ name, email, phone, message });
    await client.close();
    res.send("Your inquiry has been submitted successfully!");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})