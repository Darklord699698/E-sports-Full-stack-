import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { assets } from "../assets/assets.js";

const Main = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="flex-grow p-5">
      <section className="text-center">
        <h1 className="mb-8 text-4xl">Featured Games</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image5} alt="VALORANT" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">VALORANT</h2>
            <p className='text-teal-400'>Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image6} alt="GOD OF WAR" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">GOD OF WAR</h2>
            <p className='text-teal-400'>Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image7} alt="GTA V" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">GTA V</h2>
            <p className='text-teal-400'>Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image8} alt="RED DEAD REDEMPTION 2" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">RED DEAD REDEMPTION 2</h2>
            <p className='text-teal-400'>Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image9} alt="CALL OF DUTY" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">CALL OF DUTY</h2>
            <p className='text-teal-400'>Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image10} alt="BGMI" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">BGMI</h2>
            <p className='text-teal-400'>Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image11} alt="FIFA" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">FIFA</h2>
            <p className='text-teal-400'>Exciting game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image12} alt="CS GO 2" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">CS GO 2</h2>
            <p className='text-teal-400'>Thrilling game description.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <img src={assets.image13} alt="FALL GUYS" className="mb-4 rounded-lg" />
            <h2 className="mb-2 text-2xl font-bold text-rose-600">FALL GUYS</h2>
            <p className='text-teal-400'>Thrilling game description.</p>
          </div>
          {/* Add more games as needed */}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-5 text-3xl">Game Highlights</h2>
        <Slider {...sliderSettings}>
          <div>
            <video controls className="w-full h-auto rounded-lg">
              <source src={assets.video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <video controls className="w-full h-auto rounded-lg">
              <source src={assets.video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <video controls className="w-full h-auto rounded-lg">
              <source src={assets.video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </section>
    </main>
  );
};

export default Main;

