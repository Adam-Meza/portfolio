import React from 'react'
import './ArtCard.css'

export const ArtCard = ({item}) => {
  const {img, title, year} = item;
  
  return (
    <section className='art-card-wrapper'>
      <img src={img} className='art-item'/>
      <div className='art-details-container'>
        <span className='art-title'>{title}</span>
        {year && <span className='art-year'>( {year} )</span>}
      </div>
    
    </section>
  )
}
