import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 GameZone. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
