import React from 'react'
import "./portfolio.css"


const Portfolio = ({ props }) => {
  return (
    <section id='projects'> 
      <h2>Projects</h2>
      <h4 className='text-light'>Recent Works</h4>

      <div className="container portfolio__container">

        {props.map((item) => (
          <article className="portfolio__item">
            <div className="portfolio__image">
              <img src={item.img} alt="project1" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio_btn">
              <a href={item.github} className="btn" target='_blank' rel="noreferrer" >Github</a>
              <a href={item.demo} className="btn btn-primary" target='_blank' rel="noreferrer">Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio