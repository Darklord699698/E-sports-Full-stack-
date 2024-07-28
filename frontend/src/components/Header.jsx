import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';

const Header = ({ isLoggedIn, userName, handleLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setSidebarOpen(false);
  };

  return (
    <header className="relative z-50 flex items-center justify-between p-5 text-white bg-gray-800">
      <div className="flex items-center space-x-4">
        <button className="text-white focus:outline-none">
          <FaUser className="w-6 h-6" />
        </button>
        <div className="text-2xl font-bold">GameZone</div>
        <div className="relative flex-grow md:flex md:items-center md:justify-center">
          <div className="relative flex items-center w-full md:w-3/4 lg:w-2/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 text-white placeholder-gray-400 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button onClick={toggleSidebar} className="text-white focus:outline-none md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden space-x-4 md:flex">
        <Link
          to="/"
          className={`relative ${activeLink === '/' ? 'text-blue-400' : 'hover:text-gray-400'}`}
          onClick={() => handleLinkClick('/')}
        >
          Home
          {activeLink === '/' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
        </Link>
        <Link
          to="/yourgames"
          className={`relative ${activeLink === '/yourgames' ? 'text-blue-400' : 'hover:text-gray-400'}`}
          onClick={() => handleLinkClick('/yourgames')}
        >
          Your Games
          {activeLink === '/yourgames' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
        </Link>
        <Link
          to="/rewards"
          className={`relative ${activeLink === '/rewards' ? 'text-blue-400' : 'hover:text-gray-400'}`}
          onClick={() => handleLinkClick('/rewards')}
        >
          Rewards
          {activeLink === '/rewards' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
        </Link>
        <Link
          to="/achievements"
          className={`relative ${activeLink === '/achievements' ? 'text-blue-400' : 'hover:text-gray-400'}`}
          onClick={() => handleLinkClick('/achievements')}
        >
          Achievements
          {activeLink === '/achievements' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
        </Link>
        <Link
          to="/about"
          className={`relative ${activeLink === '/about' ? 'text-blue-400' : 'hover:text-gray-400'}`}
          onClick={() => handleLinkClick('/about')}
        >
          About
          {activeLink === '/about' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
        </Link>
        <Link
          to="/contact"
          className={`relative ${activeLink === '/contact' ? 'text-blue-400' : 'hover:text-gray-400'}`}
          onClick={() => handleLinkClick('/contact')}
        >
          Contact
          {activeLink === '/contact' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
        </Link>
        <Link
          to="/privacypolicy"
          className={`relative ${activeLink === '/privacypolicy' ? 'text-blue-400' : 'hover:text-gray-400'}`}
          onClick={() => handleLinkClick('/privacypolicy')}
        >
          Privacy Policy
          {activeLink === '/privacypolicy' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Login/Signup
          </Link>
        )}
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-end p-4">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 text-center">
          <Link
            to="/"
            className={`relative ${activeLink === '/' ? 'text-blue-400' : 'hover:text-gray-400'}`}
            onClick={() => handleLinkClick('/')}
          >
            Home
            {activeLink === '/' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
          </Link>
          <Link
            to="/yourgames"
            className={`relative ${activeLink === '/yourgames' ? 'text-blue-400' : 'hover:text-gray-400'}`}
            onClick={() => handleLinkClick('/yourgames')}
          >
            Your Games
            {activeLink === '/yourgames' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
          </Link>
          <Link
            to="/rewards"
            className={`relative ${activeLink === '/rewards' ? 'text-blue-400' : 'hover:text-gray-400'}`}
            onClick={() => handleLinkClick('/rewards')}
          >
            Rewards
            {activeLink === '/rewards' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
          </Link>
          <Link
            to="/achievements"
            className={`relative ${activeLink === '/achievements' ? 'text-blue-400' : 'hover:text-gray-400'}`}
            onClick={() => handleLinkClick('/achievements')}
          >
            Achievements
            {activeLink === '/achievements' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
          </Link>
          <Link
            to="/about"
            className={`relative ${activeLink === '/about' ? 'text-blue-400' : 'hover:text-gray-400'}`}
            onClick={() => handleLinkClick('/about')}
          >
            About
            {activeLink === '/about' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
          </Link>
          <Link
            to="/contact"
            className={`relative ${activeLink === '/contact' ? 'text-blue-400' : 'hover:text-gray-400'}`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
            {activeLink === '/contact' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
          </Link>
          <Link
            to="/privacypolicy"
            className={`relative ${activeLink === '/privacypolicy' ? 'text-blue-400' : 'hover:text-gray-400'}`}
            onClick={() => handleLinkClick('/privacypolicy')}
          >
            Privacy Policy
            {activeLink === '/privacypolicy' && <span className="absolute inset-x-0 bottom-0 block border-b-2 border-blue-400"></span>}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Login/Signup
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
