import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "animate.css";
import video from "../assets/v1.mp4";

const services = [
  {
    title: "Web Development",
    description: "Design responsive, scalable, and innovative websites.",
    image: "https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/benefits-of-custom-web-development-and-web-design-12grids.webp",
  },
  {
    title: "App Development",
    description: "Build high-performance mobile apps for Android and iOS platforms.",
    image: "https://www.claritusconsulting.com/wp-content/uploads/2023/04/mobile-app-development.png",
  },
  {
    title: "UI/UX Design",
    description: "Create seamless, visually appealing user experiences and interfaces.",
    image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1692271343/catalog/1692130725220429824/ky7jepewxvj2fzgirpt9.jpg",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Optimize websites to rank highly on search engines.",
    image: "https://www.thegotoguy.co/blog/wp-content/uploads/2022/09/Business-Needs-SEO-Services-in-2024-TGTG.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Develop and execute impactful online marketing strategies.",
    image: "https://zerogravitymarketing.com/wp-content/uploads/2024/01/six-main-types-of-digital-marketing.jpg",
  },
];

const servicePage = () => {
const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/";
  useEffect(() => {
    const updateWebsiteVisitCount = async () => {
      try {
        const response = await fetch(`${backendURL}api/incrementVisit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          console.log("Website visit count updated successfully");
        } else {
          console.error("Failed to update website visit count");
        }
      } catch (error) {
        console.error("Error updating website visit count:", error);
      }
    }
    updateWebsiteVisitCount();
  }, []);

  return (
    <div className="h-screen">

      <div className="bg-gray-100 pb-20 pt-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="text-gray-600 mt-2">Innovative solutions for your business needs</p>
        </div>
      <div className="flex justify-center p-8 -mt-6">
        <video src={video} autoPlay loop muted className="h-96"></video>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform animate__animated animate__zoomInDown"
              style={{ animationDelay: `${index * 0.2}s`, animationDuration: "0.9s" }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default servicePage;
