import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import Lottie from 'lottie-react'; // Import Lottie
import animationData3 from '../assets/animationData3.json'; // Replace with your first Lottie animation file
import animationData2 from '../assets/animationData2.json'; // Replace with your second Lottie animation file

const About = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="relative flex items-center justify-between p-6 text-white bg-gradient-to-r from-teal-500 to-cyan-500">
        <h1 className="text-4xl font-bold">About Us</h1>
        <button
          onClick={handleClose}
          className="absolute p-2 text-white bg-gray-800 rounded-full top-5 right-5 hover:bg-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main className="max-w-3xl p-8 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to GameZone</h2>
          <p className="mt-2 text-gray-600">Your ultimate gaming hub where every player finds their perfect match!</p>
        </div>
        <section className="p-6 space-y-6 text-gray-700 rounded-lg shadow-md bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200">
          <p>
            At GameZone, we bring you closer to the games you love. Explore a vast collection of titles across different genres, each curated to provide you with an unforgettable gaming experience. Whether you are a casual gamer or a competitive player, our platform has something exciting just for you.
          </p>
          <p>
            Our goal is to make your gaming journey seamless and enjoyable. From discovering the newest game releases to connecting with other gamers, we strive to deliver top-notch content and keep you informed with the latest industry trends and updates.
          </p>
          <p>
            Dive into our featured games, read insightful reviews, and stay updated on upcoming releases. Thank you for being part of the GameZone community. Here’s to countless hours of fun and adventure!
          </p>
          <p>
            For any inquiries or feedback, don’t hesitate to <a href="mailto:support@gamezone.com" className="text-teal-500 hover:underline">contact us</a>. We’d love to hear from you!
          </p>
        </section>
      </main>
      <div className="flex flex-wrap items-center justify-center gap-6 p-5">
        <div className="w-full max-w-md p-4 bg-gray-900 rounded-lg shadow-lg">
          <Lottie animationData={animationData2} loop={true} className="w-full" />
        </div>
        <div className="w-full max-w-md p-4 bg-gray-900 rounded-lg shadow-lg">
          <Lottie animationData={animationData3} loop={true} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
