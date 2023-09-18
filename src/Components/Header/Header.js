import React from 'react'
import { IntroName } from '../Aside/IntroName'
import './Header.css'
import { DropDown } from './DropDown'
import { motion } from 'framer-motion'

export const Header = ({handleNav}) => {
  return (
    <motion.header
      className='header'
      initial={{y: -50}}
      animate={{y: 0}}
    >
      <div className='header-name-container' onClick={() => handleNav('')}>
        <h1 className='header-name'>ADAM MEZA</h1>
        <span className='header-creative'>creative</span>
      </div>
      <DropDown handleNav={handleNav}/>
    </motion.header>
  )
}
