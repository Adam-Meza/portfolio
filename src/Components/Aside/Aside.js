import React from 'react'
import './Aside.css'
import { IntroName } from './IntroName';

export const Aside = ({handleClick, handleContact}) => {

  return (
    <aside>
      <div
        className='name-wrapper'
        onClick={() => handleClick("")}
      >
        <IntroName name="ADAM" handleClick={handleClick}/>
        <IntroName name="MEZA" handleClick={handleClick}/>
        <span className="creative">creative</span>
      </div>
      <div className='link-container'>
        <span onClick={() => handleClick('programming')} className='link'>programming</span>
        <span className='link' onClick={() => handleClick('tattoos')}>tattoos</span>
        <span className='link' onClick={() => handleClick('art')}>art</span>
      </div>
      <div className='link-container'>
        <span className='link' onClick={() => handleClick('about')}>about</span>
        <span className='link' onClick={() => handleClick('contact')}>contact</span>
      </div>
    </aside>
  )
}
