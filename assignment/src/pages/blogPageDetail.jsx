import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const BlogPageDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const backendURL = import.meta.env.VITE_BackendURL || 'http://localhost:3000/';
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${backendURL}api/blog/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [id]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div> {/* Loading spinner */}
      </div>
    );
  }
  return (
    <div className="mt-24 flex flex-col min-h-screen">
      <div className="flex-grow pb-20">
        <div className="text-center text-2xl uppercase font-bold mt-8">
          {blog.title}
        </div>
        <div className='font-mono text-gray-500 text-center text-sm'>
          {new Date(blog.createdAt).toLocaleString()}
        </div>
        <div className="p-20">
          {blog.content}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPageDetail;
