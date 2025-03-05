import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>M.</div>
      <ul className='nav-links'>
        <li className='active'>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <button className='hire-btn'>HIRE ME</button>
    </nav>
  )
}

export default Navbar
