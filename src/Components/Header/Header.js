import React from 'react';
import { IntroName } from '../Aside/IntroName';
import './Header.css';
import { DropDown } from './DropDown';
import { motion } from 'framer-motion';

export const Header = ({handleNav}) => {
  return (
    <motion.header
      className='header'
      initial={{scaleY: 0}}
      animate={{scaleY: 1}}
      transition={{duration: .8, ease: 'easeIn'}}
    >
      <div className='header-name-container' onClick={() => handleNav('')}>
        <IntroName name='ADAM' delay={.9} sizeClass="header-name small" handleNav={handleNav}/>
        <IntroName name="MEZA" delay={1.4} sizeClass='header-name small' handleNav={handleNav}/>
        <div className='hide-overflow' >
          <motion.div
            className='header-creative'
            initial={{y: 40}}
            animate={{y: 0 }}
            transition={{duration: 1, delay: 2}}
          >
            creative
          </motion.div>
        </div>

      </div>
      <DropDown handleNav={handleNav}/>
    </motion.header>
  )
};