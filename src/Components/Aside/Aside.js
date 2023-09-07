import React from 'react'
import { programming, tattoos, art } from '../../assets/work/work';
import './Aside.css'
import { IntroName } from './IntroName';

export const Aside = ({handleClick, handleContact}) => {

  return (
    <aside>
      <div
        className='name-wrapper'
        onClick={() => handleClick("home")}
      >
        <IntroName name="ADAM" handleClick={handleClick}/>
        <IntroName name="MEZA" handleClick={handleClick}/>
        <span className="creative">creative</span>
      </div>
      <div className='link-container'>
        <span onClick={() => handleClick(programming)} className='link'>programming</span>
        <span className='link' onClick={() => handleClick(tattoos)}>tattoos</span>
        <span className='link' onClick={() => handleClick(art)}>art</span>
      </div>
      <span className='contact link' onClick={() => handleClick('about')}>about</span>
      <span className='contact link' onClick={() => handleClick('contact')}>contact</span>
    </aside>
  )
}
