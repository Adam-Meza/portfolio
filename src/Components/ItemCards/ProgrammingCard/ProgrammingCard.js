import React, { useEffect, useState } from 'react';
import './ProgrammingCard.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgrammingCardMobile } from './Mobile/ProgrammingCardMobile'
import { hiddenMask, staggerContainerVariants, visibleMask } from '../../../utilites';
import { dropdownVariants } from '../../../utilites';
import { FaTimes } from 'react-icons/fa';

export const ProgrammingCard = ({ application }) => {
  const { name, img, abstract, repo, deployment, details, mobile, thoughts } = application,
    [windowWidth, setWidth] = useState(window.innerWidth),
    [isLoaded, setIsLoaded] = useState(false),
    [isInView, setIsInView] = useState(false),
    [abstractOpen, setAbstract] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const toggleAbstract = () => {
    setAbstract(!abstractOpen)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            className='image-wrapper'
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1.5, delay: .5 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img className='programming-image' src={img} onLoad={() => setIsLoaded(true)} />
          </motion.div>


          <motion.div
            className='app-text-wrapper'
            variants={staggerContainerVariants}
            initial='initial'
            whileInView='animate'
          >
            {abstractOpen &&
              <AnimatePresence >
                <motion.div
                  className='abstract-modal'
                  initial='initial'
                  animate={abstractOpen ? 'animate' : 'initial'}
                  variants={dropdownVariants}
                >
                  <div className='abstract-top'>
                    <h2 className='abstract'>Abstract</h2>
                    <button className='abstract-button' onClick={toggleAbstract}><FaTimes /></button>
                  </div>
                  <div> 
                    <p className='abstract-paragraph'>
                      {abstract}
                    </p>
                    <p className='abstract-paragraph'>
                        {thoughts}
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>

            }

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
              <div className='app-link' onClick={toggleAbstract}>
                Abstract
              </div>
            </div>
            <motion.div
              className='mobile-img-wrapper'
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1.5, delay: .5 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}

            >
              <img src={mobile} className='mobile-img' />
            </motion.div>
          </motion.div>
        </>
      ) : <ProgrammingCardMobile application={application} />}
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
