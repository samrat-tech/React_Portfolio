import React from 'react'
import "./education.css"
import { FaUserGraduate, FaSchool, FaCheck, FaCalendar  } from 'react-icons/fa'


const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>
      <h4 className='text-light'>Learner</h4>
      <div className="container education__container">

        <article className="education">
          <div className="education__head">
            <h3>Bachelors</h3>
          </div>

          <ul className="education__list">
            <li>
              <FaSchool className="education__icon" />
              <h4>National College Of Engineering</h4>
            </li>
            <li>
              <FaUserGraduate className="education__icon" />
              <h4>Computer Engineering</h4>
            </li>
            <li>
              <FaCheck className="education__icon" />
              <p className='text-light'>Percentage: 80%</p>
            </li>
            <li>
              <FaCalendar className="education__icon" />
              <p className='text-light'>Passed Year: 2022</p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>High School</h3>
          </div>

          <ul className="education__list">
            <li>
              <FaSchool className="education__icon" />
              <h4>Omega Int'l H.S.S. & College</h4>
            </li>
            <li>
              <FaUserGraduate className="education__icon" />
              <h4>Science</h4>
            </li>
            <li>
              <FaCheck className="education__icon" />
              <p className='text-light'>Percentage: 79%</p>
            </li>
            <li>
              <FaCalendar className="education__icon" />
              <p className='text-light'>Passed Year: 2017</p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>School</h3>
          </div>

          <ul className="education__list">
            <li>
              <FaSchool className="education__icon" />
              <h4>Godawari Vidya Mandir</h4>
            </li>
            <li>
              <FaUserGraduate className="education__icon" />
              <h4>SLC</h4>
            </li>
            <li>
              <FaCheck className="education__icon" />
              <p className='text-light'>Percentage: 77%</p>
            </li>
            <li>
              <FaCalendar className="education__icon" />
              <p className='text-light'>Passed Year: 2015</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education