import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const About = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative flex items-center justify-between p-5 text-white bg-gray-800">
        <h1 className="text-3xl font-bold">About Us</h1>
        <button
          onClick={handleClose}
          className="absolute p-2 text-white bg-gray-800 rounded-full top-5 right-5 hover:bg-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main className="p-5">
        <h2 className="mb-4 text-2xl font-bold">Welcome to GameZone</h2>
        <p className="mb-4">
          GameZone is your ultimate destination for discovering the latest and greatest games. Our platform offers a wide range of games across various genres, ensuring that there’s something for every type of gamer.
        </p>
        <p className="mb-4">
          Our mission is to provide gamers with a seamless experience, from finding their next favorite game to connecting with fellow gamers. We are committed to offering high-quality content and keeping you updated with the latest game releases and news.
        </p>
        <p className="mb-4">
          Feel free to explore our featured games, read reviews, and stay tuned for upcoming releases. Thank you for choosing GameZone, and happy gaming!
        </p>
        <p>
          For any inquiries or feedback, please <a href="mailto:support@gamezone.com" className="text-blue-500">contact us</a>.
        </p>
      </main>
    </div>
  );
};

export default About;
