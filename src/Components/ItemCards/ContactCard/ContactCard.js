import React from 'react'
import './ContactCard.css'

export const ContactCard = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-container'>
        <span className='contact-text'>I am available for work as a software developer or UX/UI designer</span>
        <div className='contact-link-container'>
          <span className='link contact'>Email</span>
          <span className='contact'>8609784885</span>
          <span className='link contact'>LinkedIn</span>
          <span className='link contact'>GitHub</span>
        </div>
      </div>
    </div>
  )
}
