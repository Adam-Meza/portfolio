import React, { useRef, useState, useEffect } from 'react'
import './AboutCard.css'
import { useScroll, motion, useTransform } from 'framer-motion'
import { experience } from '../../../assets/work/work'

export const AboutCard = ({ handleNav }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: {
      y: 60,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      y: 40,
    },
  }

  const CVVariants = {
    initial: {
      width: "1%",
    },
    animate: {
      width: '100%',
      transition: {
        duration: 4,
      },
    },
  };

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-90%'])

  const cvCards = experience.map((item) => <CVItemCard variants={itemVariants} key={item.title} item={item} />)

  return (
    <motion.section
      className='about-wrapper'
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='about-carousel-wrapper' ref={targetRef}>
        <div className='about-carousel-container'>
          <motion.div style={{ x }} className='about-carousel-interior'>
            <div className='about-card-wrapper'>
              <div className='cv-wrapper'>
                <motion.h2 variants={CVVariants} initial='initial' animate='animate' className='cv-title'>CV</motion.h2>
                <div className='cv-item-wrapper'>
                  <div className='hide-overflow'>
                    <motion.h3 variants={itemVariants} className='cv-year'>STACK</motion.h3>
                  </div>
                  <div className='hide-overflow'>
                    <motion.div variants={itemVariants} className='cv-skill-container'>
                      React JS | React Native | CSS | Sass/SCSS | JavaScript ES6 |
                    </motion.div>
                  </div>
                  <div className='hide-overflow'>
                    <motion.div variants={itemVariants} className='cv-skill-container'>
                      TypeScript | HTML5 | Node.JS | Express
                    </motion.div>
                  </div>

                </div>
                <div className='hide-overflow'>
                  <motion.h3 variants={itemVariants} className='cv-year'>Experience</motion.h3>
                </div>
                {cvCards}
              </div>
            </div>

            <motion.div className='about-card-wrapper'>
              <div className='quote-wrapper'>
                <div className='hide-overflow'>
                  <motion.span
                    className='art-quote'
                    initial={{opacity:0}}
                    whileInView={{opacity:1, delay: 1}}
                  > 
                  "Arts' meaning is 'owned by no one,
                  </motion.span>
                </div>
                <motion.span className='art-quote'>but subsists between [artist and spectator],</motion.span>
                <motion.span className='art-quote'>excluding any uniform transmission, any identity of cause and effect.'"</motion.span>
                <motion.span className='jacques'>(Jacques Ranciere, paraphrased)</motion.span>
              </div>
              <motion.span className='link create' onClick={() => handleNav('contact')}>Let's create</motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export const CVItemCard = ({ item, variants }) => {
  return (
    <div className='cv-item-wrapper'>
      <div className='cv-item-container'>
        <motion.span variants={variants} className='cv-item-title'>{item.title}</motion.span>
        <motion.span variants={variants} className='cv-item-details'>{item.description}</motion.span>
      </div>
    </div>
  )
}


