import React from 'react';
import { motion } from 'framer-motion';

export const IntroName = ({name, handleNav, variants}) => {
  const container = {
    show: {
      transition: {
        staggerChildren: .3,
      },
    },
  };

  const letterVariant = {
    initial: {
      y: -40,
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 1,
      },
    },
  }

  const nameDisplay = name.split('')
                          .map((letter, index) => 
                            <motion.span
                              key={index}
                              className='name'
                              variants={letterVariant}
                            >
                              {letter}
                            </motion.span>)

  return (
    <motion.div
      variants={variants}
    >
      <motion.div
        className='name-container'
        onClick={() => handleNav("")}
        variants={container}
        initial='initial' 
        animate='show'
        exit='exit'
      >
        {nameDisplay}
      </motion.div>
    </motion.div>
  )
}
