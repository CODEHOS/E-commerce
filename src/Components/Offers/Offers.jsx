import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers flex justify-center items-center bg-gradient-to-b from-purple-100 via-purple-200 to-white'>
      <div className="offers-left max-w-2xl px-8">
        <h1 className="text-3xl md:text-4xl font-bold">Exclusive</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">Offers for you</h2>
        <p className="text-lg md:text-xl">Get the best offers on our products</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Offers;
