import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaTrophy, FaStar, FaMedal, FaShieldAlt, FaRocket, FaCrown } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion'; // For animations

const achievementsData = [
  {
    id: 1,
    title: 'Top Performer',
    description: 'Awarded for achieving the highest score in the leaderboard.',
    icon: <FaTrophy className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 2,
    title: 'Star Player',
    description: 'Awarded for consistently being one of the top players.',
    icon: <FaStar className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 3,
    title: 'Master of the Game',
    description: 'Awarded for completing all the game levels and challenges.',
    icon: <FaMedal className="w-10 h-10 text-red-500" />,
  },
  {
    id: 4,
    title: 'Defender of the Realm',
    description: 'Awarded for successfully defending your base from attacks.',
    icon: <FaShieldAlt className="w-10 h-10 text-green-500" />,
  },
  {
    id: 5,
    title: 'Rocket Scientist',
    description: 'Awarded for achieving the fastest speed in the game.',
    icon: <FaRocket className="w-10 h-10 text-orange-500" />,
  },
  {
    id: 6,
    title: 'King of the Hill',
    description: 'Awarded for holding the highest position in the rankings for a week.',
    icon: <FaCrown className="w-10 h-10 text-purple-500" />,
  },
  {
    id: 7,
    title: 'Ultimate Strategist',
    description: 'Awarded for winning with the most complex strategy.',
    icon: <FaStar className="w-10 h-10 text-blue-600" />,
  },
  {
    id: 8,
    title: 'Champion Builder',
    description: 'Awarded for creating the most impressive custom levels.',
    icon: <FaRocket className="w-10 h-10 text-red-600" />,
  },
  // Add more achievements as needed
];

const Achievements = () => {
  return (
    <div className="min-h-screen p-5 bg-gray-900">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-white">Achievements</h1>
        <Link to="/">
          <FaTimes className="w-8 h-8 text-white transition-colors duration-300 cursor-pointer hover:text-gray-300" />
        </Link>
      </div>
      <p className="mb-6 text-lg text-gray-300">
        Here you can see all your achievements. Each achievement represents a significant milestone in your journey.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievementsData.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="p-6 transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            style={{
              background: 'linear-gradient(145deg, #2d2d2d, #1a1a1a)',
              boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.4), -8px -8px 15px rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center justify-center mb-4">
              {achievement.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-100">{achievement.title}</h2>
            <p className="mt-2 text-gray-400">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
