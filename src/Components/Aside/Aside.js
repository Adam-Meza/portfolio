import React from 'react';
import './Aside.css';
import { IntroName } from './IntroName';
import { motion } from 'framer-motion';

export const Aside = ({ handleNav }) => {
  const wrapper = {
    show: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const word = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const link = {
    initial: {
      x: -200,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
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
        variants={wrapper}
        initial='initial'
        animate='show'
        exit='exit'
      >
        <IntroName name='ADAM' handleNav={handleNav} variants={word} />
        <IntroName name='MEZA' handleNav={handleNav} variants={word} />
        <span className='creative'>
          creative
        </span>
      </motion.div>
      <motion.div className='link-wrapper' variants={container} initial='initial' animate='show' exit='exit'>
        <ul className='link-container'>
          <Link medium='programming' variants={link} handleNav={handleNav} />
          <Link medium='tattoos' variants={link} handleNav={handleNav} />
          <Link medium='art' variants={link} handleNav={handleNav} />
        </ul>
        <ul className='link-container'>
          <Link medium='about' variants={link} handleNav={handleNav} />
          <Link medium='contact' variants={link} handleNav={handleNav} />
        </ul>
      </motion.div>
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
