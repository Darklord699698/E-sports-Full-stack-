import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="relative z-50 flex items-center justify-between p-5 text-white bg-gray-800">
      <div className="text-2xl font-bold">GameZone</div>
      <button onClick={toggleSidebar} className="text-white focus:outline-none md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <nav className="hidden space-x-4 md:flex">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/games" className="hover:text-gray-400">Games</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        <Link to="/privacypolicy" className="hover:text-gray-400">PrivacyPolicy</Link>
        <Link to="/settings" className="hover:text-gray-400">Settings</Link>
        <button className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
          <Link to="/login" className="hover:text-gray-400">Login/SignIn</Link>
        </button>
      </nav>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="flex justify-end p-5">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center mt-10 space-y-4">
          <Link to="/" className="text-lg text-white" onClick={toggleSidebar}>Home</Link>
          <Link to="/games" className="text-lg text-white" onClick={toggleSidebar}>Games</Link>
          <Link to="/about" className="text-lg text-white" onClick={toggleSidebar}>About</Link>
          <Link to="/contact" className="text-lg text-white" onClick={toggleSidebar}>Contact</Link>
          <Link to="/privacypolicy" className="text-lg text-white" onClick={toggleSidebar}>PrivacyPolicy</Link>
          <Link to="/settings" className="text-lg text-white" onClick={toggleSidebar}>Settings</Link>
          <button className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <Link to="/login" className="text-lg text-white" onClick={toggleSidebar}>Login/SignIn</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
