import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData1 from "../assets/animationData1.json";

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    Name: '',
    Number: '',
    Email: '',
    Message: ''
  });

  // State to manage form submission status
  const [status, setStatus] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...'); // Set status while submitting

    try {
      const response = await axios.post('http://localhost:4000/api/contact', formData);
      console.log('Response from server:', response.data); // Log server response
      alert(response.data.message); // Show success message
      setFormData({ Name: '', Number: '', Email: '', Message: '' }); // Clear form
      setStatus(''); // Reset status
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message); // Log detailed error
      alert('Failed to send message. Please try again.'); // Show error message
      setStatus(''); // Reset status
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-red-400">
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg bg-cyan-300">
        <h2 className="mb-6 text-2xl font-bold text-center">Contact Us</h2>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Number</label>
            <input
              type="text"
              name="Number"
              value={formData.Number}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {status || 'Send Message'}
            </button>
          </div>
        </form>
      </div>
      <div className="w-full mt-10 md:w-1/3 md:mt-0">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default ContactForm;
