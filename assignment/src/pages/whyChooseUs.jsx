import React from 'react';
import Footer from '../components/Footer';

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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 pt-20">
      {/* Main content */}
      <div className="flex-grow px-4 pb-20">
        <h1 className="text-4xl font-bold text-center mb-6">Why Choose Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Discover what sets us apart and why we’re the ideal partner for your digital transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4"
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
