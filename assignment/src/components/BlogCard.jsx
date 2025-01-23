import React from "react";

const BlogCard = ({ title, description, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-sm text-gray-500 mt-4">Published: {date}</p>
    </div>
  );
};

export default BlogCard;
