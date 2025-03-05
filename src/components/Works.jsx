import React from 'react'
import '../styles/Works.css'

const projects = [
  {
    title: 'Analysis Application',
    description:
      'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    image: '/images/analysis.png',
    tags: ['FIGMA', 'UX'],
  },
  {
    title: 'Fortknox Application',
    description:
      'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    image: '/images/fortknox.png',
    tags: ['MOBILE', 'WEB'],
  },
  {
    title: 'Zenocide Application',
    description:
      'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    image: '/images/zenocide.png',
    tags: ['APP', 'WEB'],
  },
]

const Works = () => {
  return (
    <section className='works-section'>
      <div className='works-container'>
        <div className='works-header'>
          <h2 className='works-title'>✺ Works</h2>
          <a href='#' className='view-all'>
            view all
          </a>
        </div>

        <div className='works-list'>
          {projects.map((project, index) => (
            <div key={index} className='work-card'>
              <img
                src={project.image}
                alt={project.title}
                className='work-image'
              />

              <div className='work-info'>
                <h3 className='work-title'>{project.title}</h3>
                <p className='work-description'>{project.description}</p>

                <div className='work-tags'>
                  {project.tags.map((tag, i) => (
                    <span key={i} className='tag'>
                      {tag}
                    </span>
                  ))}
                </div>

                <button className='case-study-btn'>View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
