import React from 'react'
import './about.css'
import ME from '../../Assest/meee.png'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'> 
      <h1>Get To Know Me</h1>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me_image">
              <img src={ME} alt="Me" />
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h3>Experiences</h3>
              <small>6+ Years Working</small>
            </article>

            <article className='about_card'>
              <FaUserFriends className='about_icon'/>
              <h3>Clients</h3>
              <small>10+ Worldwide</small>
            </article>

            <article className='about_card'>
              <FaFolderOpen className='about_icon'/>
              <h3>Projects</h3>
              <small>40+ Completed</small>
            </article>
          </div>

          <p>As an accomplished front-end developer and data analyst with over 6 years of experience in the 
            information technology industry, I have a proven track record of designing and maintaining responsive 
            websites while generating actionable insights from complex datasets for informed decision-making. 
            My expertise spans HTML, CSS, JavaScript, Python, SQL, Power BI, and modern libraries and frameworks. 
            I am dedicated to delivering user-friendly websites that enhance user experience and drive data-driven strategies.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div> 

    </section>
  )
}

export default About
