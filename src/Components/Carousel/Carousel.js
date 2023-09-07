import React, {useRef, useState, useEffect} from 'react'
import './Carousel.css'
import { useScroll, motion, useTransform } from 'framer-motion';
import { art, tattoos, programming } from '../../assets/work/work';
import { ArtCard } from '../ItemCards/ArtCard/ArtCard';
import { ProgrammingCard } from '../ItemCards/ProgrammingCard/ProgrammingCard';

export const Carousel = ({content}) => {
  const targetRef = useRef(null),
        [display, setDisplay] = useState(null)
  const {scrollYProgress} = useScroll({
    target: targetRef
  }) 
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"])

  useEffect(()=> {
    let displayElement

    if(content === programming) {
      displayElement = content.map(item => <ProgrammingCard application={item}/>);
    } else if (content === tattoos || content === art) {
      displayElement = content.map(item => <ArtCard item={item}/> );
    }

    setDisplay(displayElement)
  })

  return (

    <div className="carousel-page-wrapper">
      <div className='scroll-loader'></div>
      <section ref={targetRef} className='carousel-wrapper'>
      <div className='carousel-container'>
        <motion.div style={{ x }} className='carousel-interior'>
          {display}
        </motion.div>
      </div>
      </section>
    </div>

  )
}
