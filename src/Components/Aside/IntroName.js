import React from 'react';
import { motion } from 'framer-motion';

export const IntroName = ({ name, handleNav, variants, delay }) => {
  const container = {
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: .2,
      },
    },
  };

  const letterVariant = {
    initial: {
      y: -60,
    },
    show: {
      y: 0,
      transition: {
        duration: .5,
      },
    },
    exit: {
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
      </motion.span>

    )


  return (
    <motion.div
      variants={variants}
    >
      <div className='hide-overflow'>

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
      </div>
    </motion.div>
  )
}
