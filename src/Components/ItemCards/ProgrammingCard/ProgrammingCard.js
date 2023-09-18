import React, { useEffect, useState } from 'react';
import './ProgrammingCard.css';
import { motion } from 'framer-motion';

export const ProgrammingCard = ({ application }) => {
  const { name, img, abstract, repo, deployment, details } = application
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
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
        staggerChildren: 0.5
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      y: 0,
      transition: {
        duration: .5
      },
    },
  };

  return (
    <div className='programming-card-wrapper'>
      <motion.img
        className='programming-image'
        src={img}
        initial={{ opacity: .5, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
      />
      <div className='app-text-wrapper'>
        <div>
          <h2 className={`app-name ${name}`}>{name}</h2>
          <motion.div className='details-container'
            variants={container}
            initial='initial'
            animate='animate'>

            <div className='hide-overflow'>
              <motion.span className='detail' initial={{ x: 40 }} whileInView={{ x: 0 }}>{`${details.type} Project`}</motion.span>
            </div>
            <div className='hide-overflow'>
              <motion.span className='detail' initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} variants={textVariants} >{details.stack}</motion.span>
            </div>
            <div className='hide-overflow'>
              <motion.span className='detail' initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} variants={textVariants}>{`${details.hours} Hours`}</motion.span>
            </div>
          </motion.div>

          {windowWidth < 1100 &&
            <div className='button-container'>
              {deployment &&
                <a className='app-link' href={deployment}>
                  Deployment
                </a>}
              <a className='app-link' href={repo}>
                GitHub
              </a>
            </div>
          }
          
        </div>

        <div className='side-text-wrapper'>

          <h3>Abstract</h3>
          <p className='app-text'>{abstract}</p>
          {windowWidth > 1100 &&
            <div className='button-container'>
              {deployment &&
                <a className='app-link' href={deployment}>
                  Deployment
                </a>}
              <a className='app-link' href={repo}>
                GitHub
              </a>
            </div>
          }

        </div>
      </div>
    </div>
  )
}
