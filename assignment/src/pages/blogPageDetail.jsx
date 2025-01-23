import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const BlogPageDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log(`Fetching blog with ID: ${id}`);

    const fetchBlogData = async () => {
      try {
        const response = await fetch(`/api/blog/${id}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [id]);
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-24">
      <div className="pb-20 h-screen">
        <div className="text-center text-2xl uppercase font-bold">
          {blog.topic}
        </div>
        <div className='font-mono text-gray-500 text-center text-sm'>
          {blog.date}
        </div>
        <div className="p-20">
          {blog.detail}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPageDetail;
