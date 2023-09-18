import React from 'react'
import { IntroName } from '../Aside/IntroName'
import './Header.css'
import { DropDown } from './DropDown'

export const Header = ({handleNav}) => {
  return (
    <header className='header'>
      <div className='header-name-container'>
        <h1 className='name'>ADAM MEZA</h1>
        <span className='creative'>creative</span>
      </div>
      <DropDown handleNav={handleNav}/>
    </header>
  )
}
