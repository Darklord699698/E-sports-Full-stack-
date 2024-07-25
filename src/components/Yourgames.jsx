import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

// Custom styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2d3748',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const YourGames = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      name: 'Valorant',
      description: 'Description of Valorant.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOoeoXm1WWGuTzJWRLfZEObsw_LJ7tOQhbw&s',
      trailer: 'e_E9W2vsRbQ', // Example trailer ID
      rating: '4.5/5',
      website: 'https://playvalorant.com/',
    },
    {
      id: 2,
      name: 'Gta 5',
      description: 'Description of Gta 5.',
      image: 'https://www.hindustantimes.com/ht-img/img/2023/02/21/1600x900/gta_5_1676975769202_1676975777036_1676975777036.jpg',
      trailer: 'QkkoHAzjnUs', // Example trailer ID
      rating: '4.8/5',
      website: 'https://www.rockstargames.com/V/',
    },
    {
      id: 3,
      name: 'God Of War',
      description: 'Description of God Of War.',
      image: 'https://media.wired.com/photos/639bf35a24c352e627eccc43/master/pass/Ragnaro%CC%88k-culture-ar1qdh.jpg',
      trailer: 'K0u_kAWLJOA', // Example trailer ID
      rating: '4.9/5',
      website: 'https://www.playstation.com/en-us/games/god-of-war-ragnarok/',
    },
    // Add more games as needed
  ];

  const openModal = (game) => {
    setSelectedGame(game);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedGame(null);
  };

  const opts = {
    height: '315',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <header className="mb-4 text-2xl font-bold">
        <Link to="/" className="text-blue-500 hover:underline">
          &larr; Back to Home
        </Link>
      </header>
      <main>
        <h1 className="mb-6 text-4xl font-extrabold text-center text-blue-400">Your Games</h1>
        <p className="mb-8 text-lg text-center text-gray-300">
          Here you can view and manage all your games.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.id}
              className="relative p-6 transition-all duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 hover:-translate-y-1"
              style={{ backgroundImage: `url(${game.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black rounded-lg opacity-50"></div>
              <div className="relative z-10">
                <h2 className="mb-2 text-xl font-semibold">{game.name}</h2>
                <p className="text-gray-400">{game.description}</p>
                <button onClick={() => openModal(game)} className="px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedGame && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Game Details"
            ariaHideApp={false}
          >
            <h2 className="text-2xl font-bold">{selectedGame.name}</h2>
            <p className="mt-2 mb-4">{selectedGame.description}</p>
            <p className="mb-2"><strong>Rating:</strong> {selectedGame.rating}</p>
            <div className="mb-4">
              <YouTube videoId={selectedGame.trailer} opts={opts} />
            </div>
            <a href={selectedGame.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Official Website
            </a>
            <button onClick={closeModal} className="block px-4 py-2 mt-4 font-semibold text-white bg-red-600 rounded hover:bg-red-700">
              Close
            </button>
          </Modal>
        )}
      </main>
    </div>
  );
};

export default YourGames;
