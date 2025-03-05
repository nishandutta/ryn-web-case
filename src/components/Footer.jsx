import React, { useEffect, useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className='footer' id='footer'>
      <h2 className='footer-title'>LET’S TALK!</h2>
      <a href='mailto:rehanurraihan@gmail.com' className='footer-email'>
        rehanurraihan@gmail.com ↗
      </a>
      <div className='footer-bottom'>
        <p className='footer-copyright'>© Rehan Raihan - {year}</p>
        <div className='footer-links'>
          <a href='#' className='footer-link'>
            Dribbble
          </a>
          <a href='#' className='footer-link'>
            Behance
          </a>
          <a href='#' className='footer-link'>
            Twitter
          </a>
          <a href='#' className='footer-link'>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
