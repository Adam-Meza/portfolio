import React from 'react'
import face from '../../../assets/images/face.jpg'
import "./IntroCard.css"

export const IntroCard = () => {
  return (
    <div className='intro-wrapper'>
      <div className='overlay'></div>
      <img src ={face} className='intro-img'/>
      <p className='intro-text-wrapper'>
        <span className='intro-text'>hello world,</span>
        <span className='intro-text'>my name is adam.</span>
        <span className='intro-text'>i make art.</span>
        </p>

    </div>
  )
}
