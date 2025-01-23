import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import 'animate.css';

const WhyChooseUs = () => {
  const strengths = [
    {
      title: "Cutting-Edge Technologies",
      description:
        "We specialize in leveraging the latest and most advanced technologies to deliver innovative and scalable solutions tailored to your needs.",
      icon: "⚙️",
    },
    {
      title: "Future-Ready Solutions",
      description:
        "Our commitment to innovation ensures your business stays ahead of the competition with solutions designed for longevity.",
      icon: "🚀",
    },
    {
      title: "No Outdated Platforms",
      description:
        "We deliberately avoid platforms like WordPress and Shopify to ensure we provide highly customized, secure, and efficient solutions.",
      icon: "❌",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Our dedicated team collaborates closely with you to understand your vision and bring it to life with precision and creativity.",
      icon: "🤝",
    },
    {
      title: "Scalable Solutions",
      description:
        "We design solutions that grow with your business, ensuring flexibility and scalability as your needs evolve.",
      icon: "📈",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Our solutions are built on data, allowing you to make informed decisions backed by real-time analytics and performance metrics.",
      icon: "📊",
    },
    {
      title: "24/7 Support",
      description:
        "We offer round-the-clock support to ensure your systems are always running smoothly and any issues are promptly addressed.",
      icon: "💬",
    },
    {
      title: "Security-First Approach",
      description:
        "We prioritize security at every level of our solutions, safeguarding your data and infrastructure with best-in-class security protocols.",
      icon: "🔒",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 pt-20">
      <div className="flex-grow px-4 pb-20">
        <h1 className="text-4xl font-bold text-center mb-6">Why Choose Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Discover what sets us apart and why we’re the ideal partner for your digital transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {strengths.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4 animate__animated animate__backInDown`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "0.9s",
              }}
            >
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
