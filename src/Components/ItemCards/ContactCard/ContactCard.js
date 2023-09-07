import React from 'react'
import './ContactCard.css'

export const ContactCard = () => {
  return (
    <div className='contact-wrapper'>
      <span className='contact-text'>I am available for work as </span>
      <span className='contact-text'>a software developer or UX/UI designer</span>
      <div className='contact-container'>
        <span className='link'>Email</span>
        <span className='link'>8609784885</span>
        <span className='link'>LinkedIn</span>
        <span className='link'>GitHub</span>
      </div>
    </div>
  )
}
