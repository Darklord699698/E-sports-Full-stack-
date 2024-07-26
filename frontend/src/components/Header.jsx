import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaSearch, FaUser } from 'react-icons/fa'; // Import the search and user icons from react-icons

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // State to track the active link

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfileSidebar = () => {
    setProfileSidebarOpen(!profileSidebarOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path); // Set the active link
    setSidebarOpen(false); // Close the sidebar on link click
    setProfileSidebarOpen(false); // Close the profile sidebar on link click
  };

  return (
    <header className="relative z-50 flex items-center justify-between p-5 text-white bg-gray-800">
      <div className="flex items-center space-x-4">
        <button onClick={toggleProfileSidebar} className="text-white focus:outline-none">
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
        <button className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
          <Link to="/login" className="hover:text-gray-400">Login/SignIn</Link>
        </button>
      </nav>

      {/* Mobile Sidebar */}
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
          <Link to="/" className={`text-lg text-white ${activeLink === '/' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/')}>Home</Link>
          <Link to="/yourgames" className={`text-lg text-white ${activeLink === '/yourgames' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/yourgames')}>Your Games</Link>
          <Link to="/rewards" className={`text-lg text-white ${activeLink === '/rewards' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/rewards')}>Rewards</Link>
          <Link to="/achievements" className={`text-lg text-white ${activeLink === '/achievements' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/achievements')}>Achievements</Link>
          <Link to="/about" className={`text-lg text-white ${activeLink === '/about' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/about')}>About</Link>
          <Link to="/contact" className={`text-lg text-white ${activeLink === '/contact' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact</Link>
          <Link to="/privacypolicy" className={`text-lg text-white ${activeLink === '/privacypolicy' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/privacypolicy')}>Privacy Policy</Link>
          <button className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <Link to="/login" className="text-lg text-white">Login/SignIn</Link>
          </button>
        </nav>
      </div>

      {/* Profile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 transform ${profileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="flex justify-end p-5">
          <button onClick={toggleProfileSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center mt-10 space-y-4">
          <Link to="/" className={`text-lg text-white ${activeLink === '/' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/')}>Home</Link>
          <Link to="/yourgames" className={`text-lg text-white ${activeLink === '/yourgames' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/yourgames')}>Your Games</Link>
          <Link to="/rewards" className={`text-lg text-white ${activeLink === '/rewards' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/rewards')}>Rewards</Link>
          <Link to="/achievements" className={`text-lg text-white ${activeLink === '/achievements' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/achievements')}>Achievements</Link>
          <Link to="/about" className={`text-lg text-white ${activeLink === '/about' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/about')}>About</Link>
          <Link to="/contact" className={`text-lg text-white ${activeLink === '/contact' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact</Link>
          <Link to="/privacypolicy" className={`text-lg text-white ${activeLink === '/privacypolicy' ? 'text-blue-400' : ''}`} onClick={() => handleLinkClick('/privacypolicy')}>Privacy Policy</Link>
          <button className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <Link to="/logout" className="text-lg text-white" onClick={() => { /* Add logout logic */ toggleProfileSidebar(); }}>LogOut</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;