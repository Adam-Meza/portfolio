import React from 'react'
import './Aside.css'
import { IntroName } from './IntroName';

export const Aside = ({handleNav}) => {

  return (
    <aside>
      <div
        className='name-wrapper'
        onClick={() => handleNav("")}
      >
        <IntroName name="ADAM" handleNav={handleNav}/>
        <IntroName name="MEZA" handleNav={handleNav}/>
        <span className="creative">creative</span>
      </div>
      <ul className='link-container'>
        <li onClick={() => handleNav('programming')} className='link'>programming</li>
        <li className='link' onClick={() => handleNav('tattoos')}>tattoos</li>
        <li className='link' onClick={() => handleNav('art')}>art</li>
      </ul>
      <ul className='link-container'>
        <li className='link' onClick={() => handleNav('about')}>about</li>
        <li className='link' onClick={() => handleNav('contact')}>contact</li>
      </ul>
    </aside>
  )
}
