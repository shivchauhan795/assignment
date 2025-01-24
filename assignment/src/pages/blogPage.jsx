import React, { useEffect, useState } from 'react'
import BlogCard from "../components/BlogCard";
import Footer from '../components/Footer';

const blogPage = () => {
  const backendURL = import.meta.env.VITE_BackendURL;

  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetch(`${backendURL}api/blogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data.blogs);
          setLoading(false);
        } else {
          console.error("Failed to fetch blogs:", response.status);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div> {/* Loading spinner */}
      </div>
    );
  }
  return (
    <div className='h-screen'>

      <div className="min-h-screen bg-gray-50 pt-20 px-6 pb-20">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Tech Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.content}
              onClick={() => window.location.href = `/blog/${post.id}`}
              date={new Date(post.createdAt).toLocaleString()}
              className={`animate__animated animate__fadeInUp`}
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: "0.8s",
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default blogPage
