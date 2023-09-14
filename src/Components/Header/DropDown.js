import React, { useState } from 'react'

export const DropDown = ({handleNav}) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className='dropdown-wrapper'>
      <button className='dropdown-button' onClick={handleClick}>⌄</button>
      {open &&
        <div className='dropdown'>
          <ul className='link-container'>
            <li onClick={() => handleNav('programming')} className='link'>programming</li>
            <li className='link' onClick={() => handleNav('tattoos')}>tattoos</li>
            <li className='link' onClick={() => handleNav('art')}>art</li>
          </ul>
          <ul className='link-container'>
            <li className='link' onClick={() => handleNav('about')}>about</li>
            <li className='link' onClick={() => handleNav('contact')}>contact</li>
          </ul>

        </div>}
    </div>
  )
}
