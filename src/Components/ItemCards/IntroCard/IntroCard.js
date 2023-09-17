import React from 'react';
import face from '../../../assets/images/face.jpg';
import "./IntroCard.css";
import { motion } from 'framer-motion';

export const IntroCard = () => {
  const container = {
    intial: {
      opacity: 0
    },
    show: {
      transition: {
        delay: 2,
        staggerChildren: .8, 
      },
    },
  };

  const word = {
    initial: { 
      y: 30,
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className='intro-wrapper'>
      <div className='overlay'></div>
      <motion.img
        src={face}
        className='intro-img'
        initial= {{
          opacity: 0
        }}
        animate= {{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 1.5,
          }
        }}
      />
      <motion.p 
        className='intro-text-wrapper'
        variants={container}
        initial='initial' 
        animate='show'
        exit='exit'
      >
        <IntroWord variants={word} phrase ="hello world" />
        <IntroWord variants={word} phrase ="my name is adam." />
        <IntroWord variants={word} phrase ="i make art." />
      </motion.p>
    </div>
  );
};

const IntroWord = ({phrase, variants}) => {
  return (
    <motion.span 
      className='intro-text'
      variants={variants}
    >
      {phrase}
    </motion.span>
  );
};
