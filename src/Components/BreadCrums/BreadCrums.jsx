import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const BreadCrums = (props) => {
    const { product } = props;
    return (
        <div className="breadcrum flex items-center text-gray-600 text-sm py-4">
            <span className="mr-1">Home</span>
            <img src={arrow_icon} alt="" className="w-4 h-4 mx-1" />
            <span className="mr-1">SHOP</span>
            <img src={arrow_icon} alt="" className="w-4 h-4 mx-1" />
            <span className="mr-1">{product.category}</span>
            <img src={arrow_icon} alt="" className="w-4 h-4 mx-1" />
            <span className="font-semibold">{product.name}</span>
        </div>
    );
}

export default BreadCrums;

