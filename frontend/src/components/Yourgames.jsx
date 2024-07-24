import React from 'react';
import { Link } from 'react-router-dom';

const YourGames = () => {
  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <header className="mb-4 text-2xl font-bold">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </header>
      <main>
        <h1 className="mb-4 text-3xl font-semibold">Your Games</h1>
        <p className="mb-4 text-lg">Here you can view and manage all your games.</p>
        {/* Add your content here */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Example game items */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Game 1</h2>
            <p className="text-gray-400">Description of Game 1.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Game 2</h2>
            <p className="text-gray-400">Description of Game 2.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Game 3</h2>
            <p className="text-gray-400">Description of Game 3.</p>
          </div>
          {/* Add more game items as needed */}
        </div>
      </main>
    </div>
  );
};

export default YourGames;
