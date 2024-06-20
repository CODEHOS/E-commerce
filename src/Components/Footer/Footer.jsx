import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer w-full bg-gray-800 text-white py-8'>
        <div className="footer-logo flex items-center mb-6 justify-center">
            <img src={footer_logo} alt="Footer Logo" className='w-16 h-16 mr-2' />
            <p className='text-2xl font-bold'>SHOPPER</p>
        </div>
        <ul className="footer-links flex justify-center space-x-6 mb-6">
            <li className='hover:text-gray-400 cursor-pointer'>Company</li>
            <li className='hover:text-gray-400 cursor-pointer'>Products</li>
            <li className='hover:text-gray-400 cursor-pointer'>Offices</li>
            <li className='hover:text-gray-400 cursor-pointer'>About</li>
            <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
        </ul>
        <div className="footer-social-icons flex justify-center space-x-4 mb-6">
            <div className="footer-icons-container bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                <img src={instagram_icon} alt="Instagram Icon" className='w-8 h-8' />
            </div>
            <div className="footer-icons-container bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                <img src={pintester_icon} alt="Pintester Icon" className='w-8 h-8' />
            </div>
            <div className="footer-icons-container bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                <img src={whatsapp_icon} alt="Whatsapp Icon" className='w-8 h-8' />
            </div>
        </div>
        <div className="footer-copyright text-center">
            <hr className='border-gray-600 mb-4'/>
            <p>Copyright© 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
