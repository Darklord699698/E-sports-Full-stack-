import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { assets } from "../assets/assets.js";
import Lottie from 'lottie-react';
import animationData from '../assets/animationData.json'; // Replace with your Lottie animation file
import './styles.css'; // Import the CSS file with the fade-in animation
import ContactForm from './ContactForm.jsx'; // Contact form jsx file imported

const Main = () => {
  const videoRefs = useRef([]);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // Pause all videos before changing slides
      videoRefs.current.forEach((video) => {
        if (video && !video.paused) {
          video.pause();
        }
      });
    },
  };

  return (
    <main className="flex-grow p-0">
      <section className="relative flex flex-col items-center justify-center h-screen mb-10 bg-center bg-no-repeat bg-cover md:flex-row md:justify-between" style={{ backgroundImage: "url('https://api.duniagames.co.id/api/content/upload/file/6280776751589773903.jpg')" }}>
        <div className="flex items-center justify-center w-full p-5 md:w-1/2 md:p-10">
          <div className="relative z-10 max-w-md p-10 mx-auto text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-indigo-950 via-purple-900 to-violet-950">
            <h1 className="mb-4 text-4xl font-bold fade-in-text">Welcome to the Gaming World</h1>
            <p>Dive into a universe where every pixel comes to life and adventures await at every turn. Immerse yourself in our handpicked selection of games, each offering an exhilarating experience with breathtaking graphics and heart-pounding action.</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-5 md:w-1/2 md:p-10">
          <Lottie animationData={animationData} loop={true} className="w-full max-w-md" />
        </div>
      </section>

      <section className="text-center">
        <h1 className="mb-8 text-4xl">Featured Games</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image5} alt="VALORANT" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://playvalorant.com/" target="_blank" rel="noopener noreferrer">VALORANT</a>
            </h2>
            <p className="text-teal-400">Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image6} alt="GOD OF WAR" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://www.playstation.com/en-us/games/god-of-war/" target="_blank" rel="noopener noreferrer">GOD OF WAR</a>
            </h2>
            <p className="text-teal-400">Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image7} alt="GTA V" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://www.rockstargames.com/gta-v" target="_blank" rel="noopener noreferrer">GTA V</a>
            </h2>
            <p className="text-teal-400">Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image8} alt="RED DEAD REDEMPTION 2" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://www.rockstargames.com/reddeadredemption2" target="_blank" rel="noopener noreferrer">RED DEAD REDEMPTION 2</a>
            </h2>
            <p className="text-teal-400">Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image9} alt="CALL OF DUTY" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://www.callofduty.com/" target="_blank" rel="noopener noreferrer">CALL OF DUTY</a>
            </h2>
            <p className="text-teal-400">Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image10} alt="BGMI" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://www.battlegroundsmobileindia.com/" target="_blank" rel="noopener noreferrer">BGMI</a>
            </h2>
            <p className="text-teal-400">Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image11} alt="FIFA" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://www.ea.com/games/fifa" target="_blank" rel="noopener noreferrer">FIFA</a>
            </h2>
            <p className="text-teal-400">Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image12} alt="CS GO 2" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://blog.counter-strike.net/" target="_blank" rel="noopener noreferrer">CS GO 2</a>
            </h2>
            <p className="text-teal-400">Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image13} alt="FALL GUYS" className="w-full mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">
              <a href="https://fallguys.com/" target="_blank" rel="noopener noreferrer">FALL GUYS</a>
            </h2>
            <p className="text-teal-400">Thrilling game description.</p>
          </div>
          {/* Add more games as needed */}
        </div>
      </section>

      <section className="flex justify-center mt-10">
        <div className="w-full max-w-5xl">
          <h2 className="mb-5 text-3xl text-center">Game Highlights</h2>
          <Slider {...sliderSettings} className="w-full">
            <div>
              <video ref={el => videoRefs.current[0] = el} controls className="w-full h-auto rounded-lg" autoPlay loop>
                <source src={assets.video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video ref={el => videoRefs.current[1] = el} controls className="w-full h-auto rounded-lg" autoPlay loop>
                <source src={assets.video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video ref={el => videoRefs.current[2] = el} controls className="w-full h-auto rounded-lg" autoPlay loop>
                <source src={assets.video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
        </section>

{/* Contact Form */}
<section className="flex justify-center mt-10 bg-indigo-950">
  <ContactForm />
</section>
</main>
);
};

export default Main;

     
