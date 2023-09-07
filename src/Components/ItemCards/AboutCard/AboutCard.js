import React from 'react'
import './AboutCard.css'

export const AboutCard = ({handleClick}) => {
  return (
    <div className='about-wrapper'>
      <div className='about-container'>
        <span className='art-quote'> "Arts' meaning 'is owned by no one,</span>
        <span className='art-quote'>but subsists between [artist and spectator],</span>
        <span className='art-quote'>excluding any unifrom transmission, any identity of cause and effect.'"</span>
        <span className='jacques'>(Jacques Ranciere, paraphrased)</span>
        <div className='text-wrapper'>
          <div className='text-container'>
            <p className='about-text'>In my view, computer programming is a unique artistic medium, which generates levels of meaning through interconnectivity rarely found in other art forms. As a former tattoo artist and sous chef, I bring a depth of artistic experience to each application.</p>
            <span className='link' onClick={()=> handleClick('contact')}>Let's create together</span>
          </div>
          <div className='cv-wrapper'>
            <h2 className='cv-title'>CV</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
