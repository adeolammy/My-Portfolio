import React from 'react'
import './about.css'
import ME from '../../Assest/meee.png'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'> 
      <h3>Get To Know</h3>
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
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FaUserFriends className='about_icon'/>
              <h3>Clients</h3>
              <small>20+ Worldwide</small>
            </article>

            <article className='about_card'>
              <FaFolderOpen className='about_icon'/>
              <h3>Projects</h3>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam, labore magnam magni cumque rerum officiis hic! Optio debitis veritatis amet, ab consequuntur excepturi, voluptatum, fuga qui cumque in natus?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div> 

    </section>
  )
}

export default About
