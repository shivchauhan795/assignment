import React, { useState } from "react";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const backendURL = import.meta.env.VITE_BackendURL
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !content) {
            toast.error('Both title and content are required!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        try {
            const response = await fetch(`${backendURL}api/addblog`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            });

            if (response.ok) {
                const data = await response.json();
                toast.success('Blog added successfully!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setTitle("");
                setContent("");
            } else {
                const errorData = await response.json();
                toast.error(errorData.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again later.', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div>
                <div className="min-h-screen bg-gray-100 pt-20 px-6 pb-20 flex justify-center items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                            Add a New Blog
                        </h2>
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog title"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="content"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog content"
                                rows="6"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Add Blog
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default AddBlog;
