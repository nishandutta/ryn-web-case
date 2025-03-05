import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <h1 className='hero-title'>
        I AM A{' '}
        <span className='highlight'>
          <img src='/images/profile.jpg' alt='profile' />
        </span>{' '}
        FREELANCE
        <br /> DESIGNER{' '}
        <span className='highlight'>
          <img src='/images/portfolio.jpg' alt='portfolio' />
        </span>{' '}
        FROM
        <br /> SAN FRANCISCO
      </h1>

      <div className='hero-bottom'>
        <div className='partners'>
          <img src='/images/doradesign.png' alt='doradesign' />
          <img src='/images/wave.png' alt='wave' />
          <img src='/images/silvia.png' alt='silvia' />
        </div>

        <p className='hero-description'>
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>
    </section>
  )
}

export default Hero
