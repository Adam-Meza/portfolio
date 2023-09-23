import React, {useState} from 'react';
import './ArtCard.css';
import { motion } from 'framer-motion';
import { hiddenMask, visibleMask } from '../../../utilites';

export const ArtCard = ({ item }) => {
  const { img, title, year } = item;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const container = {
    show: {
      transition: {
        staggerChildren: .4
      },
    },
  };

  const itemVariants = {
    initial: {
      scale: .9,
    },
    show: {
      scale: 1,
      transition: {
        duration: .5,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className='art-card-wrapper'>
      <div className='hide-overflow'>

        <motion.div
          initial={false}
          whileInView={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1.5, delay: .3 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <motion.img
            src={img}
            className='art-item'
            onLoad={()=> setIsLoaded(true)}
          />
        </motion.div>
      </div>
      <motion.div
        variants={container}
        viewport={{ once: true }}
        initial='initial'
        whileInView="show"
        className='art-details-container'
      >
        <motion.span variants={itemVariants} viewport={{ once: true }} className='art-title'>{title}</motion.span>
        {year && <motion.span variants={itemVariants} viewport={{ once: true }} className='art-year'>( {year} )</motion.span>}
      </motion.div>
    </section>
  )
};
