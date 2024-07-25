import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <p className="mb-2">For inquiries, please email us at:</p>
            <a href="mailto:info@example.com" className="text-orange-400 hover:underline">
              info@example.com
            </a>
          </div>
          
          {/* Country Mobile Numbers */}
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h3 className="mb-4 text-xl font-bold">Mobile Numbers</h3>
            <ul className="space-y-2 list-none">
              <li>USA: +1 123-456-7890</li>
              <li>UK: +44 20 7946 0958</li>
              <li>Canada: +1 416-123-4567</li>
              <li>Australia: +61 2 1234 5678</li>
              <li>Germany: +49 30 12345678</li>
              {/* Add more countries and numbers as needed */}
            </ul>
          </div>
          
          {/* Branch Locations */}
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h3 className="mb-4 text-xl font-bold">Branch Locations</h3>
            <ul className="space-y-2 list-none">
              <li>New York, USA: 123 Main St, NY 10001</li>
              <li>London, UK: 456 Oxford St, W1D 1AB</li>
              <li>Toronto, Canada: 789 King St W, ON M5V 1N8</li>
              <li>Sydney, Australia: 101 George St, NSW 2000</li>
              <li>Berlin, Germany: 202 Friedrichstrasse, 10117</li>
              {/* Add more branch locations as needed */}
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
