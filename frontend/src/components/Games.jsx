import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const Games = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative flex items-center justify-between p-5 text-white bg-gray-800">
        <h1 className="text-3xl font-bold">Games</h1>
        <button
          onClick={handleClose}
          className="absolute p-2 text-white bg-gray-800 rounded-full top-5 right-5 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main className="p-5">
        <h2 className="mb-4 text-2xl font-bold">Featured Games</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Game Cards */}
          <div className="p-5 text-white bg-gray-800 rounded-lg">
            <h3 className="mb-2 text-xl">Game Title 1</h3>
            <p>Description of the game.</p>
          </div>
          <div className="p-5 text-white bg-gray-800 rounded-lg">
            <h3 className="mb-2 text-xl">Game Title 2</h3>
            <p>Description of the game.</p>
          </div>
          <div className="p-5 text-white bg-gray-800 rounded-lg">
            <h3 className="mb-2 text-xl">Game Title 3</h3>
            <p>Description of the game.</p>
          </div>
          {/* Add more game cards as needed */}
        </div>
      </main>
    </div>
  );
};

export default Games;
