import React from 'react'
import './ContactCard.css'

export const ContactCard = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-container'>
        <div className='contact-text-container'>
         <span className='contact-text'>I am available for work</span>
         <span className='contact-text'>as a software developer or UX/UI designer</span>
        </div>
        <div className='contact-link-container'>
          <a href='mailto:adammeza95@gmail.com??subject=Let%27s%20create%20together' className='link contact'>Email</a>
          <a className='contact'>860.978.4885</a>
          <a  href='https://www.linkedin.com/in/adam-meza' className='link contact'>LinkedIn</a>
          <a href='https://github.com/Adam-Meza' className='link contact'>GitHub</a>
        </div>
      </div>
    </div>
  )
}
