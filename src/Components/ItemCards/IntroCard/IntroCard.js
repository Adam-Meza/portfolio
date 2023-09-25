import React from 'react';
import face from '../../../assets/images/possible3.webp';
import "./IntroCard.css";
import { motion } from 'framer-motion';

export const IntroCard = () => {
  const container = {
    show: {
      transition: {
        delay: 2,
        staggerChildren: 0.8, 
      },
    },
  };

  const introWords = ['hello,', 'my name is adam', '&', 'i make art'].map((phrase, index) => {
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
        animate='animate'
        exit='exit'
      >
        {introWords}
      </motion.p>
    </div>
  );
};


const IntroWord = ({ phrase, index }) => {
  const delay = (index * .3) + 3;

  return (
    <motion.span 
      className='intro-text'
      initial={{ 
        y: 30,
      }}
      animate={{
        y: 0,
        transition: {
          duration: .8,
          delay: delay,
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