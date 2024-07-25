import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

const rewardsData = [
  {
    id: 1,
    title: 'Gold Medal',
    description: 'Awarded for achieving 100 wins.',
    image: 'https://thumbs.dreamstime.com/b/medal-ribbon-icon-set-gold-silver-bronze-medals-st-nd-rd-place-stock-vector-156317099.jpg',
    progress: 100, // Complete
  },
  {
    id: 2,
    title: 'Silver Medal',
    description: 'Awarded for achieving 50 wins.',
    image: 'https://thumbs.dreamstime.com/b/medal-ribbon-icon-set-gold-silver-bronze-medals-st-nd-rd-place-stock-vector-156317099.jpg',
    progress: 75, // 75% complete
  },
  {
    id: 3,
    title: 'Bronze Medal',
    description: 'Awarded for achieving 10 wins.',
    image: 'https://thumbs.dreamstime.com/b/medal-ribbon-icon-set-gold-silver-bronze-medals-st-nd-rd-place-stock-vector-156317099.jpg',
    progress: 50, // 50% complete
  },
  // Additional rewards
  {
    id: 4,
    title: 'Platinum Medal',
    description: 'Awarded for achieving 200 wins.',
    image: 'https://thumbs.dreamstime.com/b/medal-ribbon-icon-set-gold-silver-bronze-medals-st-nd-rd-place-stock-vector-156317099.jpg',
    progress: 25, // 25% complete
  },
];

const missionsData = [
  {
    id: 1,
    title: 'Kill 100 Enemies',
    description: 'Complete 100 enemy kills.',
    progress: 40, // 40% complete
  },
  {
    id: 2,
    title: 'Gain 5000 XP',
    description: 'Earn 5000 experience points.',
    progress: 60, // 60% complete
  },
  {
    id: 3,
    title: 'Win 50 Matches',
    description: 'Achieve 50 match victories.',
    progress: 35, // 35% complete
  },
  {
    id: 4,
    title: 'Complete 10 Challenges',
    description: 'Finish 10 in-game challenges.',
    progress: 50, // 50% complete
  },
  // Add more missions as needed
];

const Rewards = () => {
  return (
    <div className="min-h-screen p-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-white">Rewards & Missions</h1>
        <Link to="/">
          <FaTimes className="w-8 h-8 text-white transition-colors duration-300 cursor-pointer hover:text-gray-300" />
        </Link>
      </div>
      <p className="mb-6 text-lg text-white">
        Here you can see all your rewards and missions. Each reward signifies a major achievement in your gaming journey.
      </p>
      
      <h2 className="mb-4 text-2xl font-bold text-white">Rewards</h2>
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {rewardsData.map((reward) => (
          <motion.div
            key={reward.id}
            className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={reward.image} alt={reward.title} className="object-cover w-full h-40 mb-4 rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800">{reward.title}</h2>
            <p className="mt-2 text-gray-600">{reward.description}</p>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2 py-1 mr-1 text-xs font-semibold text-teal-600 uppercase bg-teal-200 rounded last:mr-0">
                    Progress
                  </span>
                  <span className="inline-block text-xs font-semibold text-teal-600">
                    {reward.progress}%
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="flex flex-col h-2 mb-2 overflow-hidden text-xs bg-teal-200 rounded">
                    <div
                      style={{ width: `${reward.progress}%` }}
                      className="flex flex-col justify-center text-center text-white transition-all duration-500 bg-teal-500 whitespace-nowrap"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white">Missions</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {missionsData.map((mission) => (
          <motion.div
            key={mission.id}
            className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-gradient-to-r from-teal-400 to-teal-600 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-white">{mission.title}</h2>
            <p className="mt-2 text-white">{mission.description}</p>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2 py-1 mr-1 text-xs font-semibold text-teal-200 uppercase bg-teal-800 rounded last:mr-0">
                    Progress
                  </span>
                  <span className="inline-block text-xs font-semibold text-teal-200">
                    {mission.progress}%
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="flex flex-col h-2 mb-2 overflow-hidden text-xs bg-teal-800 rounded">
                    <div
                      style={{ width: `${mission.progress}%` }}
                      className="flex flex-col justify-center text-center text-white transition-all duration-500 bg-teal-400 whitespace-nowrap"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
