import React from 'react';
import './Aside.css';
import { IntroName } from './IntroName';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainerVariants } from '../../utilites';

export const Aside = ({ handleNav }) => {
  const container = {
    show: {
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.35,
      },
    },
  };

  const link = {
    initial: {
      x: -130,
    },
    show: {
      x: 0,
      transition: {
        duration: .9,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <aside>
      <motion.div
        className='name-wrapper'
        onClick={() => handleNav('')}
        variants={staggerContainerVariants}
        initial='initial'
        animate='show'
        exit='exit'
      >
        <IntroName name='ADAM' delay={.3} handleNav={handleNav} sizeClass="large"/>
        <IntroName name='MEZA' delay={1} handleNav={handleNav} sizeClass="large"/>
        <span className='creative'>
          creative
        </span>
      </motion.div>
      <motion.nav className='link-wrapper' variants={container} initial='initial' animate='show' exit='exit'>
        <ul className='link-container'>
          <Link medium='programming' variants={link} handleNav={handleNav} />
          <Link medium='tattoos' variants={link} handleNav={handleNav} />
          <Link medium='art' variants={link} handleNav={handleNav} />
        </ul>
        <ul className='link-container'>
          <Link medium='about' variants={link} handleNav={handleNav} />
          <Link medium='contact' variants={link} handleNav={handleNav} />
        </ul>
      </motion.nav>
    </aside>
  );
};

const Link = ({ medium, handleNav, variants }) => {
  return (
    <motion.li
      variants={variants}
      className='link'
      onClick={() => handleNav(medium)}
    >
      {medium}
    </motion.li>
  );
};
