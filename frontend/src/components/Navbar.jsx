import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home'); // State to track the active navigation item

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
      <div className="relative min-h-screen">
        {/* Sidebar Backdrop */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 bg-gray-700 bg-opacity-50 z-40`} onClick={() => setSidebarOpen(false)}></div>
  
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-64 bg-gray-700 text-white transform transition-transform z-50 p-4`}>
          <h2 className="text-2xl mb-4">Sidebar Content</h2>
          <p>This is the content inside the sidebar.</p>
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="mt-4 bg-gray-600 px-3 py-2 rounded hover:bg-gray-500"
          >
            Close Sidebar
          </button>
        </div>

        {/* Main Navigation Bar */}
        <nav className="bg-cyan-400 p-4 flex items-center">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="text-white px-3 py-2 rounded hover:bg-gray-600 focus:outline-none absolute top-4 left-4"
          >
            <img src={assets.menu} alt="Menu" className="h-6 w-6" />
          </button>
          <div className="flex-1 flex justify-center md:justify-end space-x-4">
            <a 
              href="#home" 
              onClick={() => handleClick('home')} 
              className={`text-white px-3 py-2 rounded relative text-lg ${activeItem === 'home' ? 'underline' : 'hover:bg-gray-700'}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => handleClick('about')} 
              className={`text-white px-3 py-2 rounded relative text-lg ${activeItem === 'about' ? 'underline' : 'hover:bg-gray-700'}`}
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={() => handleClick('contact')} 
              className={`text-white px-3 py-2 rounded relative text-lg ${activeItem === 'contact' ? 'underline' : 'hover:bg-gray-700'}`}
            >
              Contact
            </a>
            <a 
              href="#buynow" 
              onClick={() => handleClick('buynow')} 
              className={`text-white px-3 py-2 rounded relative text-lg ${activeItem === 'buynow' ? 'underline' : 'hover:bg-gray-700'}`}
            >
              Buy Now
            </a>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;
