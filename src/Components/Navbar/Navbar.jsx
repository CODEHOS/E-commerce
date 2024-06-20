import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto">
            <img className="h-8 w-8" src={logo} alt="logo" />
            <span className="ml-3 text-lg font-semibold">SHOPPER</span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/mens"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/womens"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Kids
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to="/login">
              <button className="bg-gray-800 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium">
                Login
              </button>
            </Link>}
            

            <div className="relative">
              <Link to="/cart">
                <img
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  src={cart_icon}
                  alt="cart"
                />
              </Link>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 sm:px-2 sm:py-1 text-xxs sm:text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {getTotalCartItems()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <ul className="px-2 pt-2 pb-3 space-y-1">
          <li>
            <Link
              to="/"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/mens"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/womens"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/kids"
              className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Kids
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
