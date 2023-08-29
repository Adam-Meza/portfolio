import React, {useRef, useState} from 'react'
import './Carousel.css'
import face from '../../assets/face.jpg'
import shoe from '../../assets/2D-newBalance.jpg'
import body from '../../assets/graphite-body1.jpg'
import corona from '../../assets/graphite-corona.jpg'
import { useScroll, motion, useTransform } from 'framer-motion';

export const Carousel = () => {
  const items = useState([face, body,corona, shoe])
  const content = [face, body,corona, shoe].map(src => 
                    <img className='carousel-item'
                          src={src}/>
                    )
  
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef
  }) 
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"])
  return (
    <section ref={targetRef} className='carousel-wrapper'>
     <div className='carousel-container'>
      <motion.div style={{ x }} className='test'>
        {content}
      </motion.div>
     </div>
    </section>
  )
}
