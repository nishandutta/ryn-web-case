import React from 'react'
import '../styles/FAQ.css'

const faqs = [
  {
    question: 'What is your design process?',
    answer:
      'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.',
  },
  { question: 'What tools and software do you use for UX design?' },
  { question: 'How do you measure the success of your UX designs?' },
]

const FAQ = () => {
  return (
    <section className='faq-section'>
      <h2 className='faq-title'>
        <span className='faq-icon'>✷</span> Frequently asked questions
      </h2>

      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <h3 className='faq-question'>{faq.question}</h3>
            {faq.answer && <p className='faq-answer'>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
