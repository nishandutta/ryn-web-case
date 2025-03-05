import React from 'react'
import '../styles/Experience.css'

const experiences = [
  {
    role: 'Lead Product Designer',
    company: 'Fortknox',
    duration: 'Mar 2022 - Oct 2023',
  },
  {
    role: 'Intern Designer',
    company: 'OmniSafe',
    duration: 'Mar 2022 - Oct 2023',
  },
  {
    role: 'UI Designer',
    company: 'Doradesign',
    duration: 'Mar 2022 - Oct 2023',
  },
  {
    role: 'Frontend Developer',
    company: 'OpacityAuthor',
    duration: 'Mar 2022 - Oct 2023',
  },
]

const Experience = () => {
  return (
    <section className='experience-section'>
      <h2 className='experience-title'>
        <span className='icon'>✷</span> Experience
      </h2>

      <div className='experience-list'>
        {experiences.map((exp, index) => (
          <div key={index} className='experience-item'>
            <div className='experience-role'>{exp.role}</div>
            <div className='experience-details'>
              <div className='experience-company'>{exp.company}</div>
              <div className='experience-duration'>{exp.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
