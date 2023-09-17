import React from 'react'
import { IntroName } from '../Aside/IntroName'
import './Header.css'
import { DropDown } from './DropDown'

export const Header = ({handleNav}) => {
  return (
    <header className='header'>
      <div className='header-name-container'>
        <IntroName name="ADAM" handleNav={handleNav}/>
        <IntroName name="MEZA" handleNav={handleNav}/>
      </div>
      <DropDown handleNav={handleNav}/>
    </header>
  )
}
