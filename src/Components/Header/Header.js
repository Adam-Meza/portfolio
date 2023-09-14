import React from 'react'
import { IntroName } from '../Aside/IntroName'
import './Header.css'
import { DropDown } from './DropDown'

export const Header = ({handleNav}) => {
  return (
    <header className='header'>
      <IntroName name="ADAM MEZA" handleNav={handleNav}/>
      <DropDown handleNav={handleNav}/>
    </header>
  )
}
