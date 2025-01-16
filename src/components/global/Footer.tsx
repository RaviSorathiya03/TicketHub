'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-8 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Company Info */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-white text-xl font-bold">TicketHub</h3>
            <p className="text-gray-400 text-sm mt-1">Your one-stop booking destination</p>
          </motion.div>

          {/* Quick Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {['Home', 'Bus', 'Theater', 'Events', 'About'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.1, color: '#ffffff' }}
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-auto mt-4 md:mt-0"
          >
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 w-full md:w-auto"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Media Links and Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2025 TicketHub. All rights reserved.</p>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

