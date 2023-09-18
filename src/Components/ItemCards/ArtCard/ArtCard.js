import React from 'react'
import './ArtCard.css'
import { motion } from 'framer-motion';

export const ArtCard = ({item}) => {
  const {img, title, year} = item;
  
  const container = {
    show: {
      transition: {
        staggerChildren: .4
      }
    }
  }

  const itemVariants = {
    initial: {
      y: 30
    },
    show: {
      y: 0,
      transition: {
        duration: .5,
        ease: "easeIn"
      }
    }
  }

  return (
    <section className='art-card-wrapper'>
      <div className='hide-overflow'>
      <motion.img
        src={img}
        className='art-item'
        initial={{x: -30}}
        whileInView={{x: 0}}
        transition={{duration: .5, once: true}}
      />
      </div>
      <motion.div
        variants={container} 
        initial='initial'
        whileInView="show"
        className='art-details-container'
      >
        <motion.span variants={itemVariants}className='art-title'>{title}</motion.span>
        {year && <motion.span variants={itemVariants}className='art-year'>( {year} )</motion.span>}
      </motion.div>
    </section>
  )
}
