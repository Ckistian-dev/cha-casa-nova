import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`bg-accent hover:bg-opacity-90 text-white font-montserrat font-medium py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
