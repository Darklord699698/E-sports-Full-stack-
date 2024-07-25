import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Rewards = () => {
  return (
    <div className="min-h-screen p-5 bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Rewards</h1>
        <Link to="/">
          <FaTimes className="w-6 h-6 text-gray-800 cursor-pointer" />
        </Link>
      </div>
      <p className="mt-4 text-gray-600">Here you can see all your rewards.</p>
      {/* Add your rewards content here */}
    </div>
  );
};

export default Rewards;
