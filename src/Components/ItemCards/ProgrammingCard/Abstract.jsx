import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { dropdownVariants } from '../../../utilites'

export const Abstract = (props) => {
  const {abstract, thoughts, mobile} = props
  const [open, setOpen] = React.useState(true)

  const toggleOpen = () => setOpen(!open)

  return (
    <AnimatePresence>
      <motion.div
      >
        <div className="abstract-top">
          <h2 className="abstract">Abstract</h2>
          <button className="abstract-button" onClick={toggleOpen}>
            <FaTimes />
          </button>
        </div>
        <div>
          <p className="abstract-paragraph">{abstract}</p>
          <p className="abstract-paragraph">{thoughts}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
