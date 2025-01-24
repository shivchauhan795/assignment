import React, { useState } from 'react'
import Footer from '../components/Footer';

const contactUs = () => {
  const backendURL = import.meta.env.VITE_BackendURL || 'http://localhost:3000/';
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    deadline: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendURL}api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your inquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          deadline: "",
          message: "",
        });
      } else {
        alert("There was an error submitting your inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className='flex flex-col gap-28 justify-between pt-20'>

      <div className="flex flex-col items-center pt-6 px-6 h-screen">
        <h1 className="text-4xl font-extrabold text-center mb-6 uppercase">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 font-medium">
          Have a question or want to start a project? Fill out the form below, and we’ll get back to you promptly.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md space-y-9"
        >
          <div className='flex justify-center items-center gap-3'>

            <div className='w-full'>
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
                placeholder='John'
                className="mt-1 block w-full h-10 p-2 border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div className='w-full'>
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
                className="mt-1 block w-full h-10 p-2 border-gray-300 rounded-md shadow-sm"
              />
            </div>

          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number (with country code)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='+91 1234567890'
              className="mt-1 block w-full h-10 p-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="mt-1 block w-full h-10 p-2 border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select your budget</option>
              <option value="<$1,000">Less than $1,000</option>
              <option value="$1,000-$5,000">$1,000 - $5,000</option>
              <option value="$5,000-$10,000">$5,000 - $10,000</option>
              <option value=">$10,000">More than $10,000</option>
            </select>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
              Project Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="mt-1 block w-full h-10 p-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Message (up to 1000 characters)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength="1000"
              required
              placeholder='I would like to learn more about your services.'
              className="mt-1 block w-full h-16 p-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 uppercase"
          >
            Submit
          </button>
        </form>
      </div>
      <div className='mt-32 align-bottom'><Footer /></div>
    </div>
  );
};

export default contactUs
