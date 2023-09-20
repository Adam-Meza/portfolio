import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export const DropDown = ({ handleNav }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = (type) => {
    setOpen(false);
    handleNav(type);
  };

  const buttonVariants = {
    open: { rotate: -180 },
    closed: { rotate: 0 },
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -50 },
  };

  const container = {
    aniamte: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const link = {
    initial: {
      y: 30
    },
    whileInView: {
      y:0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  }

  return (
    <div className='dropdown-wrapper'>
      <motion.button
        className="dropdown-button"
        onClick={() => handleClick()}
        animate={open ? 'open' : 'closed'}
        variants={buttonVariants}
      >
        <FaChevronDown className='chevron' />
      </motion.button>
      <motion.div
        className='dropdown'
        initial='closed'
        animate={open ? 'open' : 'closed'}
        variants={dropdownVariants}
      >
        <motion.ul
          variants={container}
          initial="initial"
          whileInView="animate"
          className='header-link-container'
        >
          <div className='hide-overflow'>
            <motion.li variants={link}onClick={() => handleLinkClick('programming')} className='header-link'>
              programming
            </motion.li>
          </div>
          <div className='hide-overflow'>
            <motion.li variants={link}className='header-link' onClick={() => handleLinkClick('tattoos')}>
              tattoos
            </motion.li>
          </div>
          <div className='hide-overflow'>
            <motion.li variants={link}className='header-link' onClick={() => handleLinkClick('art')}>
              art
            </motion.li>
          </div>
        </motion.ul>
        <motion.ul variants={container} initial="initial" animate="animate" className='header-link-container'>
          <div className='hide-overflow'>
            <motion.li variants={link}className='header-link' onClick={() => handleLinkClick('about')}>
              about
            </motion.li>
          </div>
          <div className='hide-overflow'>
            <motion.li variants={link}className='header-link' onClick={() => handleLinkClick('contact')}>
              contact
            </motion.li>
          </div>
        </motion.ul>
      </motion.div>
    </div>
  );
};
