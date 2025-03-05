import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>M.</div>
      <ul className='nav-links'>
        <a className='link-header' href='#'>
          <li className='active'>Home</li>
        </a>
        <a className='link-header' href='#experience'>
          <li>About</li>
        </a>
        <a className='link-header' href='#works'>
          <li>Projects</li>
        </a>
        <a className='link-header' href='#footer'>
          <li>Contact</li>
        </a>
      </ul>
      <button className='hire-btn'>HIRE ME</button>
    </nav>
  )
}

export default Navbar
