import React, { useEffect } from 'react'
import './ProgrammingCard.css'

export const ProgrammingCard = ({application}) => {
  useEffect(() => {
    console.log('test')
  })


  return (
    <div>
      <img className='carousel-item' src={application.img}/>
    </div>
  )
}
