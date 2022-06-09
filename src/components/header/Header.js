import React from 'react'
import "./header.css"
import CV from "../../assets/CV_Samrat.pdf"
import me from "../../assets/me.png"



const Header = () => {
  return (
    <header id='home'>

      <div className="container header__container">
        <h1>Samrat Subedi</h1>
        <h4 className="text-light">Learner || Enthusiast</h4>

        <div className="header__btn">
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <div className="header__img">
          <img src={me} alt="me" />
        </div>

      </div>

    </header>
  )
}

export default Header