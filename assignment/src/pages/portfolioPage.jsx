import React from 'react';
import Footer from '../components/Footer';
import 'animate.css';

const portfolioItems = [
  {
    industry: "Education",
    description: "Comprehensive solutions for schools and institutions.",
    image: "https://concernusa.org/uploads/concern-rs83270-somalia-education-banner.jpg",
  },
  {
    industry: "Healthcare",
    description: "Digital platforms tailored for hospitals and clinics.",
    image: "https://www.cato.org/sites/cato.org/files/styles/optimized/public/2021-01/GettyImages-1139851278.jpg?itok=VtCs0qNw",
  },
  {
    industry: "Hospitality",
    description: "Engaging platforms for hotels and resorts.",
    image: "https://image-tc.galaxy.tf/wijpeg-4j6wpshpa1whiltwgrunj9xix/piscine-1.jpg?width=1920",
  },
  {
    industry: "Beauty & Grooming",
    description: "Advanced solutions for salons and spas.",
    image: "https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=",
  },
  {
    industry: "E-commerce",
    description: "Intuitive and feature-rich online stores.",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/10/YL/KC/NY/12354778/ecommerce-online-shopping-website.png",
  },
  {
    industry: "Fitness",
    description: "Motivational, user-friendly platforms for gyms and fitness centers.",
    image: "https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=612x612&w=0&k=20&c=CIdh6LPGwU6U6lbvKCdd7LcppidaYwcDawXJI-b0yGE=",
  },
];

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 pt-20">
      {/* Content Area */}
      <div className="flex-grow pb-20">
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
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform animate__animated animate__fadeInDown"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "0.9s",
              }}
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
      <Footer />
    </div>
  );
};

export default PortfolioPage;
