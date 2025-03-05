import React from 'react'
import '../styles/Blog.css'

const blogPosts = [
  {
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX'],
    image: '/images/analysis.png',
  },
  {
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT'],
    image: '/images/fortknox.png',
  },
  {
    date: 'Feb 16, 2023',
    title: '3 ways to develop your skill',
    tags: ['FIGMA', 'WEB'],
    image: '/images/zenocide.png',
  },
]

const Blog = () => {
  return (
    <section className='blog-section'>
      <div className='blog-header'>
        <h2 className='blog-title'>
          <span className='icon'>✷</span> Blog
        </h2>
        <a href='#' className='view-all'>
          view all
        </a>
      </div>

      <div className='blog-list'>
        {blogPosts.map((post, index) => (
          <div key={index} className='blog-item'>
            <img src={post.image} alt={post.title} className='blog-image' />
            <div className='blog-content'>
              <p className='blog-date'>{post.date}</p>
              <h3 className='blog-title-text'>{post.title}</h3>
              <div className='blog-tags'>
                {post.tags.map((tag, i) => (
                  <span key={i} className='blog-tag'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className='read-button'>Read</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
