import React from 'react'
import "./footer.css"
import Social from './social'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <Social/>

      <div className="footer__copyright">
        <small>&copy; Copyright 2022 Samrat Subedi. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer