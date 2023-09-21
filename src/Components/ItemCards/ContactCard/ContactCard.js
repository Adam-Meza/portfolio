import React from 'react'
import './ContactCard.css'
import { motion } from 'framer-motion';

export const ContactCard = () => {
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.4
      },
    },
  };

  const content = {
    initial: {
      y: 40
    },
    animate: {
      y: 0,
      transition: { 
        duration: .5
      }
    },
    exit: {
      y: 40
    }
  };

  return (
    <motion.div
      className='contact-wrapper'
      variants={container}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='contact-container'>
        <motion.div className='contact-text-container'>
         <motion.span variants={content} className='contact-text'>I am available for work</motion.span>
         <motion.span variants={content} className='contact-text'>as a software developer or UX/UI designer</motion.span>
        </motion.div>
        <div className='contact-link-container'>
          <motion.a variants={content} href='https://calendly.com/adammeza95/15-minute-chat' className='link contact github'>Calendly</motion.a>
          <motion.a variants={content} href='mailto:adammeza95@gmail.com??subject=Let%27s%20create%20together' className='link contact email'>Email</motion.a>
          <motion.a variants={content} href='https://www.linkedin.com/in/adam-meza' className='link contact linkedin'>LinkedIn</motion.a>
        </div>
      </div>
    </motion.div>
  )
};
