import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import Lottie from 'lottie-react'; // Import Lottie
import animationData4 from '../assets/animationData4.json'; // Replace with your Lottie animation file

const Contact = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen text-gray-200 bg-gray-900">
      <header className="relative flex items-center justify-between p-6 text-white bg-gray-800">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <button
          onClick={handleClose}
          className="absolute p-2 text-white bg-gray-700 rounded-full top-5 right-5 hover:bg-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main className="flex flex-col max-w-4xl gap-8 p-8 mx-auto mt-8 bg-gray-800 rounded-lg shadow-lg md:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold text-white">Get in Touch</h2>
          <p className="mb-6 text-gray-400">
            We would love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-300" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center min-h-[300px] bg-gray-800 p-5">
          <Lottie animationData={animationData4} loop={true} className="w-full max-w-md" />
        </div>
      </main>
      <div className="max-w-4xl p-8 mx-auto mt-8 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
        <p className="mb-2">
          <strong>Email:</strong> support@gamezone.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="mb-4">
          <strong>Address:</strong> 123 Gaming Ave, Suite 456, GameCity, GC 78910
        </p>
        <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://twitter.com/gamezone" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/gamezone" className="text-blue-600 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/gamezone" className="text-pink-500 hover:text-pink-400" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/company/gamezone" className="text-blue-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
