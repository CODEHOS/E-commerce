import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6">
      <div className="md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">New Arrivals only</h2>
        <div className="flex justify-center md:justify-start items-center mb-2">
          <div className="flex items-center space-x-2">
            <p className="text-2xl md:text-3xl font-medium">New</p>
            <img src={hand_icon} alt="hand icon" className="h-8 w-8 md:h-10 md:w-10" />
          </div>
          <p className="text-2xl md:text-3xl font-medium ml-2">collection</p>
        </div>
        <p className="text-2xl md:text-3xl font-medium mb-4">for everyone</p>
        <div className="flex justify-center md:justify-start items-center space-x-2 bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800">
          <div className="text-lg font-semibold">Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" className="h-4 w-4" />
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <img src={hero_image} alt="hero" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}

export default Hero;
