import React from 'react';
import face from '../../../assets/images/face.jpg';
import "./IntroCard.css";
import { motion } from 'framer-motion';

export const IntroCard = () => {
  const container = {
    initial: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delay: 2,
        staggerChildren: 0.8, 
      },
    },
  };

  const introWords = ['hello world,', 'my name is adam', '& i make art'].map((phrase, index) => {
    return (
      <IntroWord
        key={index}
        phrase={phrase}
        index={index}
      />
    );
  });

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
            delay: 3.5
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
        {introWords}
      </motion.p>
    </div>
  );
};


const IntroWord = ({ phrase, index }) => {
  const customDelay = index + 2.5;

  return (
    <motion.span 
      className='intro-text'
      initial={{ 
        y: 30,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: customDelay,
        },
      }}
      exit={{
        opacity: 0,
        y: -10,
        transition: {
          duration: 1,
        },
      }}
    >
      {phrase}
    </motion.span>
  );
};