import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaSearch, FaUser } from 'react-icons/fa'; // Import the search and user icons from react-icons

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfileSidebar = () => {
    setProfileSidebarOpen(!profileSidebarOpen);
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
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/games" className="hover:text-gray-400">Games</Link>
        <Link to="/yourgames" className="hover:text-gray-400">YourGames</Link>
        <Link to="/your-participation" className="hover:text-gray-400">YourParticipation</Link>
        <Link to="/rewards" className="hover:text-gray-400">Rewards</Link>
        <Link to="/achievements"className="hover:text-gray-400">Achievements</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        <Link to="/privacypolicy" className="hover:text-gray-400">PrivacyPolicy</Link>
        <Link to="/settings" className="hover:text-gray-400">Settings</Link>
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
          <Link to="/yourgames" className="text-lg text-white" onClick={toggleProfileSidebar}>Your Games</Link>
          <Link to="/your-participation" className="text-lg text-white" onClick={toggleProfileSidebar}>Your Participation</Link>
          <Link to="/rewards" className="text-lg text-white" onClick={toggleProfileSidebar}>Rewards</Link>
          <Link to="/achievements" className="text-lg text-white" onClick={toggleProfileSidebar}>Achievements</Link>
          <button className="px-4 py-2 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <Link to="/logout" className="text-lg text-white" onClick={() => { /* Add logout logic */ toggleProfileSidebar(); }}>LogOut</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
