import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdisplay flex flex-col md:flex-row'>
            {/* Left side: Product images */}
            <div className="productdisplay-left md:w-1/2 pr-4 flex flex-col md:flex-row md:items-start md:justify-start">
                <div className="productdisplay-img-list flex flex-wrap justify-center md:justify-start mb-4">
                    <img src={product.image} alt="" className="mb-4 w-24 h-24 object-cover cursor-pointer hover:opacity-75" />
                    <img src={product.image} alt="" className="mb-4 w-24 h-24 object-cover cursor-pointer hover:opacity-75" />
                    <img src={product.image} alt="" className="mb-4 w-24 h-24 object-cover cursor-pointer hover:opacity-75" />
                    <img src={product.image} alt="" className="w-24 h-24 object-cover cursor-pointer hover:opacity-75" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img w-full h-auto object-cover' src={product.image} alt="" />
                </div>
            </div>
            
            {/* Right side: Product details */}
            <div className="productdisplay-right md:w-1/2 px-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h1>
                <div className="productdisplay-right-star flex items-center mb-2">
                    <img src={star_icon} alt="" className="w-4 h-4 mr-1" />
                    <img src={star_icon} alt="" className="w-4 h-4 mr-1" />
                    <img src={star_icon} alt="" className="w-4 h-4 mr-1" />
                    <img src={star_icon} alt="" className="w-4 h-4 mr-1" />
                    <img src={star_dull_icon} alt="" className="w-4 h-4 mr-1" />
                    <p className="text-gray-600 text-sm">(122)</p>
                </div>
                <div className="productdisplay-right-prices mb-4">
                    <div className="productdisplay-right-price-old text-gray-500 line-through">${product.old_price}</div>
                    <div className="productdisplay-right-price-new text-xl font-semibold text-gray-800">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description text-gray-700 mb-4">
                    A lightweight, usually knitted sweater, typically with long sleeves, worn over the upper body.
                </div>
                <div className="productdisplay-right-size mb-4">
                    <h1 className="text-lg font-semibold mb-2">Select size</h1>
                    <div className="flex space-x-4">
                        <div className="productdisplay-right-size-box w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-800">S</div>
                        <div className="productdisplay-right-size-box w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-800">M</div>
                        <div className="productdisplay-right-size-box w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-800">L</div>
                        <div className="productdisplay-right-size-box w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-800">XL</div>
                    </div>
                </div>
                <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200" onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category text-gray-600 mt-2"><span className="font-semibold">Category :</span> Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category text-gray-600"><span className="font-semibold">Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
