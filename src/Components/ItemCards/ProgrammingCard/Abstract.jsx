import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { dropdownVariants } from '../../../utilites'
import './Abstract.css'

export const Abstract = (props) => {
  const {abstract, thoughts, mobile} = props

  return (
      <div
        className='modal'
      >
          <h2 className="abstract">Abstract</h2>
        <>
          <p className="abstract-paragraph">{abstract}</p>
          <p className="abstract-paragraph">{thoughts}</p>
        </>
      </div>
  )
}
