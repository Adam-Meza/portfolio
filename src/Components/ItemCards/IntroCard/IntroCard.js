import React from 'react'
import face from '../../../assets/images/face.jpg'
import "./IntroCard.css"
import { motion, useAnimate, stagger } from 'framer-motion'

export const IntroCard = () => {
  return (
    <div className='intro-wrapper'>
      <div className='overlay'></div>
      <motion.img
        src ={face}
        className='intro-img'
        // initial ={{x: "200%"}}
        // animate={{x: 0}}
        // transition={{type:'tween'}}
      />
      <p className='intro-text-wrapper'>
        <span className='intro-text'>hello world,</span>
        <span className='intro-text'>my name is adam.</span>
        <span className='intro-text'>i make art.</span>
        </p>
    </div>
  )
}
