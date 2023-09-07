import React from 'react'
import './ContactCard.css'

export const ContactCard = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-contianer'>
        <span className='contact-text'>I am available for work as </span>
        <span className='contact-text'>a software developer or UX/UI designer</span>
        <div className='contact-link-container'>
          <span className='link contact'>Email</span>
          <span className='link contact'>860.978.4885</span>
          <span className='link contact'>LinkedIn</span>
          <span className='link contact'>GitHub</span>
        </div>
      </div>
    </div>
  )
}
