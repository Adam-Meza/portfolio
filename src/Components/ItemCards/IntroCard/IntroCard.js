import React from 'react';
import face from '../../../assets/images/face.jpg';
import "./IntroCard.css";
import { motion } from 'framer-motion';

export const IntroCard = () => {
  const container = {
    show: {
      transition: {
        delayChildren: 3,
        staggerChildren: 3, 
      },
    },
  };

  const item = {
    initial: {
      y: 30,
    },
    animate: {
      y: 0,
      transition: {
        duration: .4
      }
    }
  }

  const introWords = ['hello,', 'my name is adam', '&', 'i make art'].map((phrase, index) => {
    return (
      <motion.span
        className='intro-text'
        key={index}
        phrase={phrase}
        variants={item}
      > 
        {phrase}
      </motion.span>
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
        animate='animate'
        exit='exit'
      >
        {/* {introWords} */}
      </motion.p>
    </div>
  );
};