import React, { useState } from 'react'
import '../styles/Testimonial.css'

const testimonials = [
  {
    name: 'Floyd Miles',
    position: 'eBay',
    image: '/images/profile.jpg',
    quote:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    name: 'Jane Doe',
    position: 'Google',
    image: '/images/profile2.jpg',
    quote:
      'I absolutely love the Synergy resume builder. It makes crafting the perfect resume effortless and professional.',
  },
]

const Testimonial = () => {
  const [index, setIndex] = useState(0)

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className='testimonial-section'>
      <h2 className='testimonial-title'>
        <span className='icon'>✷</span> What they say
      </h2>

      <div className='testimonial-container'>
        {/* Left Column - Image & Info */}
        <div className='testimonial-image'>
          <div className='testimonial-asset'>
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className='testimonial-avatar'
            />
            <div className='testimonial-info'>
              <h3 className='testimonial-name'>{testimonials[index].name}</h3>
              <p className='testimonial-position'>
                {testimonials[index].position}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Quote & Navigation */}
        <div className='testimonial-content'>
          <div className='testimonial'>
            <span className='quote-icon'>❝</span>
            <p className='testimonial-text'>{testimonials[index].quote}</p>
          </div>

          <div className='testimonial-controls'>
            <button className='nav-button' onClick={prevTestimonial}>
              ←
            </button>
            <button className='nav-button' onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
