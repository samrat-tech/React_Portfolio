import React from 'react'
import "./nav.css"
import {FaUser,FaHome,FaBrain, FaUserGraduate,FaFileCode, FaPhone} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {

  let [activeNav, setActiveNav] = useState('/')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('/')} className={activeNav === "/" ? "active":""}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active":""} ><FaUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? "active":""} ><FaBrain/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === "#education" ? "active":""} ><FaUserGraduate/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? "active":""} ><FaFileCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active":""} ><FaPhone/></a>
    </nav>
  )
}

export default Nav