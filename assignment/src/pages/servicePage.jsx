import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Design responsive, scalable, and innovative websites.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "Build high-performance mobile apps for Android and iOS platforms.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Create seamless, visually appealing user experiences and interfaces.",
    icon: "🎨",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Optimize websites to rank highly on search engines.",
    icon: "🔍",
  },
  {
    title: "Digital Marketing",
    description: "Develop and execute impactful online marketing strategies.",
    icon: "📈",
  },
];

const servicePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-2">Innovative solutions for your business needs</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default servicePage;
