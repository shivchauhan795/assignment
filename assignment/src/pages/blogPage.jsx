import React from 'react'
import BlogCard from "../components/BlogCard";
import Footer from '../components/Footer';

const blogPage = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      description: "Explore the latest trends and technologies shaping web development.",
      date: "January 20, 2025",
    },
    {
      title: "Understanding React 18 Features",
      description: "A deep dive into the new features and improvements in React 18.",
      date: "January 15, 2025",
    },
    {
      title: "Mastering Tailwind CSS",
      description: "How to build stunning, responsive UIs with Tailwind CSS.",
      date: "January 10, 2025",
    },
  ];

  return (
    <div className='h-screen'>

      <div className="min-h-screen bg-gray-50 pt-20 px-6 pb-20">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Tech Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
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
