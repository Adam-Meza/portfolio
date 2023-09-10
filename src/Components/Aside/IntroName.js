import React from 'react'
import { motion } from 'framer-motion'

export const IntroName = ({name, handleClick}) => {
  const slideInVariant = {
    initial: {
      translateY: -400,
    },
    animate: {
      translateY: 0
    },
  }

  const nameDisplay = name.split()
                          .map((letter, index) => 
                            <motion.span
                            key={index}
                              className='name'
                              variants={slideInVariant}
                              initial='initial'
                              animate='animate'
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
