import React, { useEffect, useState } from 'react';
import './ProgrammingCard.css';
import { motion } from 'framer-motion';
import ProgrammingCardMobile from './ProgrammingCardMobile'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export const ProgrammingCard = ({ application }) => {
  const { name, img, abstract, repo, deployment, details, mobile } = application;
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const openAbstract = () => {
    // You can implement functionality here to open the abstract.
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
        staggerChildren: 0.2,
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
      {windowWidth > 1100 ? (
        <>

          <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <motion.img
              className='programming-image'
              src={img}
              initial={{ opacity: 0.5, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
          </motion.div>


          <motion.div
            className='app-text-wrapper'
            variants={container}
            initial='initial'
            whileInView='animate'
          >
            <div className='programming-top-wrapper' />
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
              <a className='app-link' onClick={openAbstract}>
                Abstract
              </a>
            </div>
            <img src={mobile} className='mobile-img' />
          </motion.div>
        </>
      ) : <ProgrammingCard application={application} />}
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
