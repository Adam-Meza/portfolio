import React, { useEffect } from 'react';
import './ProgrammingCard.css';
import { motion } from 'framer-motion';

export const ProgrammingCard = ({application}) => {
  const {name, img, abstract, repo, deployment, details} = application
  
  useEffect(() => {
  })

  return (
    <div className='programming-card-wrapper'>
      <img className='carousel-item' src={img}/>
      <div className='app-text-wrapper'>
        <h2 className ={`app-name ${name}`}>{name}</h2>
        <div className='details-container'>
          <span className='detail'>{`${details.type} Project`}</span>
          <span className='detail'>{details.stack}</span>
          <span className='detail'>{`${details.hours} Hours`}</span>
        </div>

        <h3>Abstract</h3>
        <p className='app-text'>{abstract}</p>
        <div className='button-container'>
          {deployment && 
          <a className='app-link'href= {deployment}>
            Deployment
          </a>}
          <a className='app-link'href={repo}>
            GitHub
          </a>
        </div>

      </div>
    </div>
  )
}
