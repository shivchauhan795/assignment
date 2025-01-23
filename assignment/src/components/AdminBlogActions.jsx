import React from "react";

const AdminBlogActions = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-bold text-gray-800">Admin Actions</h3>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Add New Blog
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 ml-4">
          Edit Blogs
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 ml-4">
          Delete Blogs
        </button>
      </div>
    </div>
  );
};

export default AdminBlogActions;
