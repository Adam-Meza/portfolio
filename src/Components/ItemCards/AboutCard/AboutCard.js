import React, { useRef, useState, useEffect } from 'react'
import './AboutCard.css'
import { useScroll, motion, useTransform } from 'framer-motion';
import { experience } from '../../../assets/work/work';

export const AboutCard = ({ handleNav }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"])

  const cvCards = experience.map(item => <CVItemCard item={item} />)

  return (
    <section className='about-wrapper'>
      <div className='about-carousel-wrapper' ref={targetRef}>
        <div className='about-carousel-container'>
          <motion.div style={{ x }} className='about-carousel-interior'>
            <div className='about-card-wrapper'>
              <div className='cv-wrapper'>
                <h2 className='cv-title'>CV</h2>
                <div className='cv-item-wrapper'>
                  <h3 className='cv-year'>STACK</h3>
                  <div className='cv-skill-container'>
                    React JS | React Native | CSS | Sass/SCSS | JavaScript ES6 | TypeScript | HTML5 | Node.JS | Express
                  </div>
                </div>
                <h3 className='cv-year'>Experience</h3>
                {cvCards}
              </div>
            </div>

            <div className='about-card-wrapper'>
              <span className='art-quote'> "Arts' meaning is 'owned by no one,</span>
              <span className='art-quote'>but subsists between [artist and spectator],</span>
              <span className='art-quote'>excluding any unifrom transmission, any identity of cause and effect.'"</span>
              <span className='jacques'>(Jacques Ranciere, paraphrased)</span>
            </div>

            <div className='about-card-wrapper'>
              <div className='about-text-container'>
                <p className='about-text'>In my view, computer programming is a unique artistic medium, which generates levels of meaning through interconnectivity rarely found in other art forms. As a former tattoo artist and sous chef, I bring a depth of artistic experience to each application.</p>
                <span className='link create' onClick={() => handleNav('contact')}>Let's create together</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const CVItemCard = ({ item }) => {
  return (
    <div className='cv-item-wrapper'>
      <div className='cv-item-container'>
        <span className='cv-item-title'>{item.title}</span>
        <span className='cv-item-details'>{item.description}</span>
      </div>
    </div>
  )
}

