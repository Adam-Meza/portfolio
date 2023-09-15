import React from 'react';
import face from '../../../assets/images/face.jpg';
import "./IntroCard.css";
import { motion } from 'framer-motion';

export const IntroCard = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.5, // Use staggerChildren instead of stagger
      },
    },
  };

  const word = {
    initial: { // Correct the spelling here
      y: 50,
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
      y: -50,
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
      />
      <motion.p 
        className='intro-text-wrapper'
        variants={container}
        initial='initial' // Use initial instead of intial
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
