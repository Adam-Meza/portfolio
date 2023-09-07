import React from 'react'
import { motion } from 'framer-motion'

export const IntroName = ({name, handleClick}) => {
  const nameDisplay = name.split()
                          .map(letter => 
                            <motion.span
                              className='name'
                              initial={{opacity: 0}}
                              whileInView ={{opacity: 1}}
                            
                            >
                              {letter}
                            </motion.span>)

  return (
    <div>
      <div
        className='name-container'
        onClick={() => handleClick("home")}
      >
        {nameDisplay}
      </div>
    </div>
  )
}
