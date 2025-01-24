import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const AdminPanel = () => {
    const [metrics, setMetrics] = useState({
        totalVisits: 0,
        formSubmissions: 0,
        blogEngagement: 0,
        blogs: [],
    });
    const [contacts, setContacts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null); // To store the selected blog's content
    const [selectedContact, setSelectedContact] = useState(null);


    const backendURL = import.meta.env.VITE_BackendURL;

    const fetchAdminData = async () => {
        try {
            const token = cookies.get("TOKEN");
            const response = await fetch(`${backendURL}api/admin`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setMetrics(data);
                console.log(data);
            } else {
                console.error("Failed to fetch admin data");
            }
        } catch (error) {
            console.error("Error fetching admin data:", error);
        }
    };
    const fetchContacts = async () => {
        try {
            const token = cookies.get("TOKEN");
            const response = await fetch(`${backendURL}api/admin/contacts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const contactsData = await response.json();
                setContacts(contactsData);
            } else {
                console.error("Failed to fetch contacts");
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    const handleAction = async (blogId, action) => {
        try {
            const token = cookies.get("TOKEN");
            const response = await fetch(`${backendURL}api/admin/blog/${blogId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ action }),
            });

            if (response.ok) {
                const result = await response.json();
                fetchAdminData();
            } else {
                console.error("Failed to update blog status");
            }
        } catch (error) {
            console.error("Error updating blog status:", error);
        }
    };

    const handleViewFullContent = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true); // Show the modal when clicked
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedBlog(null);
    };

    const handleViewFullContentOfContact = (contact) => {
        setSelectedContact(contact);
    };

    const closeModalOfContact = () => {
        setSelectedContact(null);
    };

    useEffect(() => {
        fetchAdminData();
        fetchContacts();
    }, []);

    return (
        <div>


            <div className="pt-20 px-6 pb-32">
                <div className="text-center text-2xl font-bold mb-8">
                    Welcome Admin!!
                </div>
                <div className="text-center mb-10">
                    <div>Total Website Visits: {metrics.totalVisits}</div>
                    <div>Form Submissions: {contacts.length}</div>
                    <div>Blog Added: {metrics.blogs.filter((blog) => blog.verified === true).length}</div>
                    <div>Blogs To Be Verified: {metrics.blogs.filter((blog) => blog.verified === false).length}</div>
                </div>

                <div className="overflow-x-auto mb-10">
                    <h2 className="text-xl font-bold mb-4">Contact Submissions</h2>
                    <div className="overflow-y-auto max-h-64 border border-black">
                        <table className="min-w-full border-collapse border border-black">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-black px-4 py-2">Name</th>
                                    <th className="border border-black px-4 py-2">Email</th>
                                    <th className="border border-black px-4 py-2">Phone</th>
                                    <th className="border border-black px-4 py-2">Budget</th>
                                    <th className="border border-black px-4 py-2">Deadline</th>
                                    <th className="border border-black px-4 py-2">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <tr key={contact._id} className="text-center">
                                        <td className="border border-black px-4 py-2">{contact.name}</td>
                                        <td className="border border-black px-4 py-2">{contact.email}</td>
                                        <td className="border border-black px-4 py-2">{contact.phone}</td>
                                        <td className="border border-black px-4 py-2">{contact.budget}</td>
                                        <td className="border border-black px-4 py-2">{contact.deadline}</td>
                                        <td className="border border-black px-4 py-2">
                                            <button
                                                className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-600"
                                                onClick={() => handleViewFullContentOfContact(contact)}
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Blogs To Be Verified</h2>
                </div>
                <div className="overflow-x-auto max-h-60 border border-black">
                    <table className="min-w-full border-collapse border border-black table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-black px-4 py-2 w-1/3">Title</th>
                                <th className="border border-black px-4 py-2 w-1/3">Content</th>
                                <th className="border border-black px-4 py-2 w-1/3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {metrics.blogs
                                .filter((blog) => blog.verified === false)
                                .map((blog) => (
                                    <tr key={blog.id} className="text-center">
                                        <td className="border border-black px-4 py-2 truncate">{blog.title}</td>
                                        <td className="border border-black px-4 py-2 truncate">
                                            {blog.content.substring(0, 50)}...
                                        </td>
                                        <td className="border border-black px-4 py-2 whitespace-nowrap">
                                            <button
                                                onClick={() => handleViewFullContent(blog)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => handleAction(blog.id, "approve")}
                                                className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleAction(blog.id, "reject")}
                                                className="bg-red-500 text-white px-3 py-1 rounded-md"
                                            >
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4 pt-12">Added Blogs</h2>
                </div>
                <div className="overflow-x-auto max-h-60 border border-black">
                    <table className="min-w-full border-collapse border border-black table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-black px-4 py-2 w-1/3">Title</th>
                                <th className="border border-black px-4 py-2 w-1/3">Content</th>
                                <th className="border border-black px-4 py-2 w-1/3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {metrics.blogs
                                .filter((blog) => blog.verified === true)
                                .map((blog) => (
                                    <tr key={blog.id} className="text-center">
                                        <td className="border border-black px-4 py-2 truncate">{blog.title}</td>
                                        <td className="border border-black px-4 py-2 truncate">
                                            {blog.content.substring(0, 50)}...
                                        </td>
                                        <td className="border border-black px-4 py-2 whitespace-nowrap">
                                            <button
                                                onClick={() => handleViewFullContent(blog)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => handleAction(blog.id, "remove")}
                                                className="bg-red-500 text-white px-3 py-1 rounded-md"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>



                {selectedContact && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg w-1/2">
                            <h3 className="text-2xl font-bold mb-4">Full Message</h3>
                            <p className="mb-4">
                                <strong>Name:</strong> {selectedContact.name}
                            </p>
                            <p className="mb-4">
                                <strong>Email:</strong> {selectedContact.email}
                            </p>
                            <p className="mb-4">
                                <strong>Phone:</strong> {selectedContact.phone}
                            </p>
                            <p className="mb-4">
                                <strong>Budget:</strong> {selectedContact.budget}
                            </p>
                            <p className="mb-4">
                                <strong>Deadline:</strong> {selectedContact.deadline}
                            </p>
                            <p className="mb-4">
                                <strong>Message:</strong> {selectedContact.message}
                            </p>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                onClick={closeModalOfContact}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}



                {/* Modal to show full content */}
                {showModal && selectedBlog && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center z-50 p-10">
                        <div className="bg-white p-6 rounded-lg h-auto overflow-auto">
                            <h2 className="text-2xl font-bold">{selectedBlog.title}</h2>
                            <p className="mt-4">{selectedBlog.content}</p>
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={closeModal}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default AdminPanel;
