import React, { useEffect } from 'react'
import './ProgrammingCard.css'

export const ProgrammingCard = ({application}) => {
  const {name, context, img, abstract, repo, deployment} = application
  useEffect(() => {
    console.log('test')
  })

  return (
    <div className='programming-card-wrapper'>
      <img className='carousel-item' src={img}/>
      <div className='app-text-wrapper'>
        <h2 className ={`app-name ${name}`}>{name}</h2>
        {/* <div className='button-container'>
          <button className='app-link'>Deployment</button>
          <button className='app-link'>GitHub</button>
        </div> */}
        <h3>Abstract</h3>
        <p className='app-text'>{abstract}</p>
        <h3>Context</h3>
        <p className='app-text'>{context}</p>
      </div>
    </div>
  )
}
