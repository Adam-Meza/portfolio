import React, { useState } from 'react'

export const DropDown = ({handleNav}) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleLinkClick = (type) => {
    setOpen(false)
    handleNav(type)
  }

  return (
    <div className='dropdown-wrapper'>
      <button className="dropdown-button" onClick={() => handleClick() }>
        {/* <div class="arrow-line"></div>
        <div class="arrow-line"></div> */}
      </button>
      {open &&
        <div className='dropdown'>
          <ul className='link-container'>
            <li onClick={() => handleLinkClick('programming')} className='link'>programming</li>
            <li className='link' onClick={() => handleLinkClick('tattoos')}>tattoos</li>
            <li className='link' onClick={() => handleLinkClick('art')}>art</li>
          </ul>
          <ul className='link-container'>
            <li className='link' onClick={() => handleLinkClick('about')}>about</li>
            <li className='link' onClick={() => handleLinkClick('contact')}>contact</li>
          </ul>

        </div>}
    </div>
  )
}
