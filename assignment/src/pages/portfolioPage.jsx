import React from 'react'
const portfolioItems = [
  {
    industry: "Education",
    description: "Comprehensive solutions for schools and institutions.",
    image: "https://www.predictiveanalyticstoday.com/wp-content/uploads/2016/05/What-is-Education-Industry.jpg",
  },
  {
    industry: "Healthcare",
    description: "Digital platforms tailored for hospitals and clinics.",
    image: "https://resources.freeagentcrm.com/wp-content/uploads/2021/01/healthcare-industry-trends-and-statistics.jpg",
  },
  {
    industry: "Hospitality",
    description: "Engaging platforms for hotels and resorts.",
    image: "https://qloapps.com/wp-content/uploads/2020/12/Different-Categories-Of-the-Hospitality-Industry.jpg",
  },
  {
    industry: "Beauty & Grooming",
    description: "Advanced solutions for salons and spas.",
    image: "https://designtemplate.io/free-images/beauty-and-grooming/91/beauty-and-grooming-1.jpg",
  },
  {
    industry: "E-commerce",
    description: "Intuitive and feature-rich online stores.",
    image: "https://www.shopify.com/enterprise/global-ecommerce-marketplace.jpg",
  },
  {
    industry: "Fitness",
    description: "Motivational, user-friendly platforms for gyms and fitness centers.",
    image: "https://www.glofox.com/wp-content/uploads/2019/05/evolution-of-fitness-industry.jpg",
  },
];

const portfolioPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Portfolio</h1>
        <p className="text-gray-600 mt-2">
          Explore our successful projects across various industries
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-20">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={item.image}
              alt={item.industry}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {item.industry}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default portfolioPage
