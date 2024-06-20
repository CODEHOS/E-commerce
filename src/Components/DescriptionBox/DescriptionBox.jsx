import React, { useState } from 'react';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description'); // State to track active tab

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
      <div className="flex border-b-2 mb-6">
        <div
          className={`flex-1 text-center py-2 cursor-pointer ${
            activeTab === 'description'
              ? 'border-b-2 border-blue-600 text-blue-600 hover:bg-blue-100 transition duration-300'
              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition duration-300'
          }`}
          onClick={() => handleClick('description')}
        >
          Description
        </div>
        <div
          className={`flex-1 text-center py-2 cursor-pointer ${
            activeTab === 'reviews'
              ? 'border-b-2 border-blue-600 text-blue-600 hover:bg-blue-100 transition duration-300'
              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition duration-300'
          }`}
          onClick={() => handleClick('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      <div>
        {activeTab === 'description' && (
          <>
            <p className="mb-4 text-gray-700">
              An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet, enabling businesses and consumers to transact with ease and convenience.
            </p>
            <p className="text-gray-700">
              E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations. Each product usually has its own dedicated page with relevant information.
            </p>
          </>
        )}
        {activeTab === 'reviews' && (
          <>
            <p className="mb-4 text-gray-700">
              Reviews for this product will be displayed here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at magna eu massa commodo lacinia.
            </p>
            <p className="text-gray-700">
              Integer quis nisi nec augue condimentum rhoncus. In posuere tempus sem, sit amet scelerisque tortor luctus et. Nulla facilisi.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
