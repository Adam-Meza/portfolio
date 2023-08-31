import React from 'react'
import './ArtCard.css'

export const ArtCard = ({item}) => {
  const {img, title} = item;
  
  return (
    <div className='art-card-wrapper'>
      <img src={img} className='carousel-item'/>
      <h3  className='art-title'>{title}</h3>
    </div>
  )
}
