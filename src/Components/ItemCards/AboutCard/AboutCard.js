import React, {useRef, useState, useEffect} from 'react'
import './AboutCard.css'
import { useScroll, motion, useTransform } from 'framer-motion';

export const AboutCard = ({handleClick}) => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef
  }) 
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"])
  
  return (
    <section className='about-wrapper'>
      <div className='about-carousel-wrapper' ref={targetRef}>
        <div className='about-carousel-container'>
          <motion.div style={{ x }}  className='about-carousel-interior'>
            
            <div className='about-card-wrapper'>
              <span className='art-quote'> "Arts' meaning is 'owned by no one,</span>
              <span className='art-quote'>but subsists between [artist and spectator],</span>
              <span className='art-quote'>excluding any unifrom transmission, any identity of cause and effect.'"</span>
              <span className='jacques'>(Jacques Ranciere, paraphrased)</span>
            </div>

            <div className='about-card-wrapper'>
              <div className='text-container'>
                <p className='about-text'>In my view, computer programming is a unique artistic medium, which generates levels of meaning through interconnectivity rarely found in other art forms. As a former tattoo artist and sous chef, I bring a depth of artistic experience to each application.</p>
                <span className='link' onClick={()=> handleClick('contact')}>Let's create together</span>
              </div>
            </div>

            <div className='about-card-wrapper'>
              <div className='cv-wrapper'>
                <h2 className='cv-title'>CV</h2>
              </div> 
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
