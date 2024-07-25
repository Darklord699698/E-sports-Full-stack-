import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const Contact = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative flex items-center justify-between p-5 text-white bg-gray-800">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <button
          onClick={handleClose}
          className="absolute p-2 text-white bg-gray-800 rounded-full top-5 right-5 hover:bg-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main className="p-5">
        <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
        <p className="mb-4">
          We would love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.
        </p>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Contact Information</h3>
          <p className="mb-2">
            <strong>Email:</strong> support@gamezone.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 123 Gaming Ave, Suite 456, GameCity, GC 78910
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
          <p className="mb-2">
            <strong>Twitter:</strong> <a href="https://twitter.com/gamezone" className="text-blue-500" target="_blank" rel="noopener noreferrer">@gamezone</a>
          </p>
          <p className="mb-2">
            <strong>Facebook:</strong> <a href="https://facebook.com/gamezone" className="text-blue-500" target="_blank" rel="noopener noreferrer">facebook.com/gamezone</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
