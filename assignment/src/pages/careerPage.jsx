import React, { useState } from 'react'
import Footer from '../components/Footer';

const careerPage = () => {
  const backendURL = import.meta.env.VITE_BackendURL || 'http://localhost:3000/';
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobProfile: "",
    cv: null,
  });

  const jobOpenings = [
    {
      title: "Web Developer",
      description:
        "We are looking for a skilled Web Developer to create and maintain modern, responsive websites. Proficiency in HTML, CSS, JavaScript, and React.js is a must. Experience with Node.js and MongoDB is a plus.",
      requirements: [
        "Proven experience as a Web Developer",
        "Strong understanding of responsive design",
        "Experience with Git and version control",
      ],
    },
    {
      title: "Android Developer",
      description:
        "Join our team to build and maintain Android applications. Expertise in Kotlin/Java and familiarity with REST APIs are required. Experience with Firebase and third-party libraries is a bonus.",
      requirements: [
        "Experience in Android app development",
        "Knowledge of Android SDK and Android Studio",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "SEO Specialist",
      description:
        "We are hiring an SEO Specialist to improve our online presence. The ideal candidate has experience with keyword research, link building, and Google Analytics.",
      requirements: [
        "Proven SEO experience",
        "Understanding of search engine algorithms",
        "Experience with SEO tools like Ahrefs or SEMrush",
      ],
    },
    {
      title: "Video Editor",
      description:
        "Looking for a creative Video Editor to join our team. Must have expertise in Adobe Premiere Pro and After Effects. Experience in color grading and sound design is a plus.",
      requirements: [
        "Experience in video editing for social media or YouTube",
        "Strong portfolio of previous projects",
        "Knowledge of visual storytelling techniques",
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    alert("This function is currently not working!!")
  };

  return (
    <div>
      <div className="container mx-auto px-4 pt-20 pb-20">
        <h1 className="text-4xl font-bold text-center mb-6">Careers</h1>
        <p className="text-center text-gray-600 mb-12">
          Join our growing team and take your career to the next level!
        </p>

        {/* Job Openings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <ul className="list-disc list-inside mb-4">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="text-gray-600">
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <h2 className="text-3xl font-bold text-center mb-6">Apply Now</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='John Doe'
              className="mt-1 block w-full h-9 pl-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='john@gmail.com'
              className="mt-1 block w-full h-9 pl-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number (with country code)
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='+91 1234567890'
              className="mt-1 block w-full h-9 pl-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="jobProfile" className="block text-sm font-medium text-gray-700">
              Job Profile
            </label>
            <select
              id="jobProfile"
              name="jobProfile"
              value={formData.jobProfile}
              onChange={handleChange}
              required
              className="mt-1 block w-full h-9 pl-2 border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select a Job Profile</option>
              {jobOpenings.map((job, index) => (
                <option key={index} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
              Upload CV
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleFileChange}
              required
              className="mt-1 block w-full border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer />

    </div>
  );
};

export default careerPage
