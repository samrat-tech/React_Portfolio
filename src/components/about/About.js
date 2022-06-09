import React from 'react'
import "./about.css"
import { FaAward, FaBookOpen } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"
import me from "../../assets/about_me.png"

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <h4 className='text-light'>Engineer</h4>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={me} alt="About Me" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">

            <a href='#experience'>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Click to see</small>
              </article>
            </a>

            <a href='#education'>
              <article className="about__card">
                <FaBookOpen className="about__icon" />
                <h5>Education</h5>
                <small>Click to see</small>
              </article>
            </a>

            <a href='#portfolio'>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>Click to see</small>
              </article>
            </a>

          </div>
          <h2>Have an interesting project?</h2>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About