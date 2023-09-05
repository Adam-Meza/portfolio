import React from 'react'
import { programming, tattoos, art } from '../../assets/work/work';
import './Aside.css'

export const Aside = ({handleClick, handleContact}) => {

  return (
    <aside>
      <div
        className='name-container'
        onClick={() => handleClick("home")}
      >
        <h1>Adam</h1>
        <h1>Meza</h1>
        <span className="creative">creative</span>
      </div>
      <div className='link-container'>
        <span onClick={() => handleClick(programming)} className='link'>programming</span>
        <span className='link' onClick={() => handleClick(tattoos)}>tattoos</span>
        <span className='link' onClick={() => handleClick(art)}>art</span>
      </div>
      <span className='contact link' onClick={() => handleContact('about')}>about</span>
      <span className='contact link' onClick={() => handleContact('contact')}>contact</span>
    </aside>
  )
}
