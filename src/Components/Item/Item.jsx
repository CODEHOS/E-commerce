import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden m-4">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
        />
      </Link>
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">{props.name}</p>
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-green-600">
            ${props.new_price.toFixed(2)}
          </div>
          <div className="text-lg line-through text-gray-500">
            ${props.old_price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
