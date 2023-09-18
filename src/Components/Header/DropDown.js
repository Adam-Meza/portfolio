import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DropDown = ({ handleNav }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = (type) => {
    setOpen(false);
    handleNav(type);
  };

  // Variants for animations
  const buttonVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <div className='dropdown-wrapper'>
      <motion.button
        className="dropdown-button"
        onClick={() => handleClick()}
        animate={open ? 'open' : 'closed'} // Use variants for button animation
        variants={buttonVariants}
      >
        <motion.div className="arrow-line" />
        <motion.div className="arrow-line" />
      </motion.button>
      <motion.div
        className='dropdown'
        initial='closed' // Set initial state for dropdown
        animate={open ? 'open' : 'closed'} // Use variants for dropdown animation
        variants={dropdownVariants}
      >
        <ul className='link-container test'>
          <li onClick={() => handleLinkClick('programming')} className='link'>
            programming
          </li>
          <li className='link' onClick={() => handleLinkClick('tattoos')}>
            tattoos
          </li>
          <li className='link' onClick={() => handleLinkClick('art')}>
            art
          </li>
        </ul>
        <ul className='link-container test'>
          <li className='link' onClick={() => handleLinkClick('about')}>
            about
          </li>
          <li className='link' onClick={() => handleLinkClick('contact')}>
            contact
          </li>
        </ul>
      </motion.div>
    </div>
  );
};
