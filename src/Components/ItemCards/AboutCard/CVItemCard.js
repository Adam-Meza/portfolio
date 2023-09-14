import React from 'react'
import './AboutCard.css'

export const CVItemCard = ({ item }) => {
  return (
    <div className='cv-item-wrapper'>
      <div className='cv-item-container'>
        <span className='cv-item-title'>{item.title}</span>
        <span className='cv-item-details'>{item.description}</span>
      </div>
    </div>
  )
}
