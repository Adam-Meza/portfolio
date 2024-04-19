import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { dropdownVariants, itemVariants } from "../../utilites";

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
    closed: { rotate: 0 },
    open: { rotate: -180 },
  };

  const dropDownContainer = {
    animate: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const link = {
    initial: {
      y: 30,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div className="dropdown-wrapper">
      <motion.button
        className="dropdown-button"
        onClick={() => handleClick()}
        animate={open ? "open" : "closed"}
        variants={buttonVariants}
      >
        <FaChevronDown className="chevron" />
      </motion.button>
      <motion.div
        className="dropdown"
        initial="initial"
        animate={open ? "animate" : "initial"}
        variants={dropdownVariants}
      >
        <motion.ul
          variants={dropDownContainer}
          initial="initial"
          animate="animate"
          className="header-link-container"
        >
          <div className="hide-overflow">
            <motion.li
              variants={link}
              className="header-link"
              onClick={() => handleLinkClick("programming")}
            >
              programming
            </motion.li>
          </div>
          <div className="hide-overflow">
            <motion.li
              variants={link}
              className="header-link"
              onClick={() => handleLinkClick("tattoos")}
            >
              tattoos
            </motion.li>
          </div>
          <div className="hide-overflow">
            <motion.li
              variants={link}
              className="header-link"
              onClick={() => handleLinkClick("art")}
            >
              art
            </motion.li>
          </div>
        </motion.ul>
        <motion.ul
          variants={dropDownContainer}
          initial="initial"
          animate="animate"
          className="header-link-container"
        >
          <div className="hide-overflow">
            <motion.li
              variants={link}
              className="header-link"
              onClick={() => handleLinkClick("about")}
            >
              about
            </motion.li>
          </div>
          <div className="hide-overflow">
            <motion.li
              variants={link}
              className="header-link"
              onClick={() => handleLinkClick("contact")}
            >
              contact
            </motion.li>
          </div>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

const Link = ({ handleLinkClick, location, variants }) => {
  <div className="hide-overflow">
    <motion.li
      variants={variants}
      className="header-link"
      onClick={() => handleLinkClick(`${location}`)}
    >
      {location}
    </motion.li>
  </div>;
};
