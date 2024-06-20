import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Calculate the subtotal
    const subtotal = all_product.reduce((total, product) => {
        return total + (cartItems[product.id] * product.new_price);
    }, 0);

    return (
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto py-6 px-4 bg-white shadow-md rounded-lg">
            <div className="hidden sm:grid grid-cols-6 gap-4 text-center mb-4">
                <p className="font-semibold">Products</p>
                <p className="font-semibold">Title</p>
                <p className="font-semibold">Price</p>
                <p className="font-semibold">Quantity</p>
                <p className="font-semibold">Total</p>
                <p className="font-semibold">Remove</p>
            </div>
            <hr className="hidden sm:block mb-4 border-gray-300" />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center mb-4">
                            <div className="col-span-1">
                                <img src={e.image} alt={e.name} className="w-16 h-16 object-cover rounded mx-auto" />
                            </div>
                            <div className="col-span-1 text-center sm:text-left">
                                <p>{e.name}</p>
                            </div>
                            <div className="hidden sm:block col-span-1 text-center">
                                ${e.new_price.toFixed(2)}
                            </div>
                            <div className="col-span-1 text-center">
                                <button className="bg-gray-100 border border-gray-300 rounded px-2 py-1">{cartItems[e.id]}</button>
                            </div>
                            <div className="hidden sm:block col-span-1 text-center">
                                ${(e.new_price * cartItems[e.id]).toFixed(2)}
                            </div>
                            <div className="col-span-1 text-center">
                                <img
                                    src={remove_icon}
                                    alt="Remove"
                                    className="w-6 h-6 cursor-pointer hover:opacity-75 mx-auto"
                                    onClick={() => {
                                        removeFromCart(e.id);
                                    }}
                                />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <div className="bg-gray-50 p-6 rounded-lg mt-6 border border-gray-200">
                <h1 className="text-2xl font-bold mb-4">Cart Totals</h1>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <p className="text-lg">Subtotal</p>
                        <p className="text-lg">${subtotal.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <p className="text-lg">Shipping Fee</p>
                        <p className="text-lg">Free</p>
                    </div>
                    <hr />
                    <div className="flex justify-between text-xl font-bold">
                        <h3>Total</h3>
                        <h3>${subtotal.toFixed(2)}</h3>
                    </div>
                    <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300">PROCEED TO CHECKOUT</button>
                </div>
                <div className="mt-6">
                    <p className="mb-2">If you have a promo code, enter it here</p>
                    <div className="flex space-x-2">
                        <input type="text" placeholder="Promo code" className="flex-1 px-4 py-2 border rounded-md" />
                        <button className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
