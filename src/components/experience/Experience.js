import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <h4 className='text-light'>Skills that I have</h4>

      <div className="container experience__container">
        <div className="experience__card">
          <h3>Skill Highlights</h3>
          <div className="experience__content">

            <article className='experience__details' >
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>JS</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            {/* <article className='experience__details'>
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> */}

          </div>
        </div>

        <div className="experience__card">
          <h3>Certifications</h3>
            <div className="certificate__details">
              <ul className="experience__list">
                <li>
                  <BsPatchCheckFill className="experience__icon" />
                  <text className='experience__text'>Web Programming with Python and JS</text>
                </li>
                <li>
                  <BsPatchCheckFill className="experience__icon" />
                  <text className='experience__text'>Currently enrolled in ReactJS Training</text>
                </li>
                <li>
                  <BsPatchCheckFill className="experience__icon" />
                  <text className='experience__text'>Python and Django Web Development</text>
                </li>
                <li>
                  <BsPatchCheckFill className="experience__icon" />
                  <text className='experience__text'>Web Designing with Photoshop</text>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience