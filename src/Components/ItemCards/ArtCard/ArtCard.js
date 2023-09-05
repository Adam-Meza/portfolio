import React from 'react'
import './ArtCard.css'

export const ArtCard = ({item}) => {
  const {img, title} = item;
  
  return (
    <div className='art-card-wrapper'>
      <img src={img} className='art-item'/>
      <span  className='art-title'>{title}</span>
    </div>
  )
}
