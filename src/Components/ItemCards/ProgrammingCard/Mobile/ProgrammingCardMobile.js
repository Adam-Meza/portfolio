import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { dropdownVariants } from '../../../../utilites';
import { FaTimes } from 'react-icons/fa';

export const ProgrammingCardMobile = ({ application }) => {
  const { name, img, abstract, repo, deployment, details, mobile, thoughts} = application;
  const [windowWidth, setWidth] = useState(window.innerWidth),
    [isLoaded, setIsLoaded] = useState(false),
    [isInView, setIsInView] = useState(false),
    [abstractOpen, setAbstract] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const toggleAbstract = () => {
    console.log('test')
    setAbstract(!abstractOpen)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const textVariants = {
    initial: {
      y: 60,
      rotate: -25,
    },
    animate: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.45,
        ease: 'easeIn',
      },
    },
  };

  const stacksCards = details.stack.map((tech, index) => (
    <StackCard tech={tech} variants={textVariants} key={index} />
  ));

  return (
    <div className='programming-card-wrapper'>
      {abstractOpen &&
        <motion.div
          className='mobile-abstract-modal'
          variants={dropdownVariants}
          animate={abstractOpen ? 'animate' : 'initial'}
          transition={{ duration: .4, ease: "easeIn" }}
        >
          <div className='abstract-top'>
            <h2 className='abstract'>Abstract</h2>
            <button className='abstract-button' onClick={toggleAbstract}><FaTimes onClick={toggleAbstract}/></button>
          </div>
          <p className='abstract-paragraph'>
            {abstract}
          </p>
          <p className='abstract-paragraph'>
            {thoughts}
          </p>
        </motion.div>
      }
      <img src={windowWidth > 500 ? img : mobile} className={windowWidth > 500 ? "programming-image" : 'mobile-mobile-img'} />
      <motion.div
        className='mobile-app-text-wrapper'
        variants={container}
        initial='initial'
        whileInView='animate'
      >
        <div className='app-name-wrapper'>
          <motion.h2 className={`app-name ${name}`} variants={textVariants}>
            {name}
          </motion.h2>
        </div>
        <div className='hide-overflow details-container'>{stacksCards}</div>
        <div className='button-container'>
          {deployment && (
            <a className='app-link' href={deployment}>
              Deployment
            </a>
          )}
          <a className='app-link' href={repo}>
            GitHub
          </a>
          <motion.div className='app-link' onClick={toggleAbstract}>
            Abstract
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const StackCard = ({ tech, variants }) => {
  return (
    <motion.div className='stack' variants={variants}>
      {tech}
    </motion.div>
  );
};
