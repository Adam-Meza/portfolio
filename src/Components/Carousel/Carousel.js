import React, {useRef, useState} from 'react'
import './Carousel.css'
import { useScroll, motion, useTransform } from 'framer-motion';
import { ProgrammingCard } from '../ItemCards/ProgrammingCard/ProgrammingCard'

export const Carousel = ({content}) => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef
  }) 
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"])

  return (

    <div className="carousel-page-wrapper">
      <div className='scroll-loader'></div>
      <section ref={targetRef} className='carousel-wrapper'>
      <div className='carousel-container'>
        <motion.div style={{ x }} className='carousel-interior'>
          {content}
        </motion.div>
      </div>
      </section>
    </div>

  )
}
