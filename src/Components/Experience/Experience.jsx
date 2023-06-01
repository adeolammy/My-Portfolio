import React from 'react'
import './experience.css'
import {TbDiscountCheckFilled} from 'react-icons/tb'

function Experience() {
  return (
    <section id='experience'> 
      <h3>My Skills</h3>
      <h2>My Experience</h2>
  <div className='container experience_container'>
    <div className="experience_frontend">
      <h3>FrontEnd Development Skills</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
            <div>
                <h3>HTML</h3>
                <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
            <div>
                <h3>Boostrap</h3>
                <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
              <div>
                  <h3>CSS</h3>
                  <small className='text-light'>Experienced</small>
              </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
              <div>
                <h3>JavaScript</h3>
                <small className='text-light'>Experienced</small>
              </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
              <div>
                <h3>React</h3>
                <small className='text-light'>Experienced</small>
              </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
            <div>
                <h3>Redux</h3>
                <small className='text-light'>Experienced</small>
            </div>
        </article>
      </div>
    </div>
    
    <div className="experience_other">
        <h3>Other Development Skills</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
            <dir>
                <h3>Python</h3>
                <small className='text-light'>Experienced</small>
            </dir>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
          <div>
            <h3>MongoDB</h3>
            <small className='text-light'>Experienced</small> 
          </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
            <div>
                <h3>Pandas</h3>
                <small className='text-light'>Intermidiate</small>
            </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
            <div>
                <h3>MYSQL</h3>
                <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
          <div>
             <h3>Flask</h3>
             <small className='text-light'>Intermidiate</small>
          </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
          <div>
            <h3>Figma</h3>
            <small className='text-light'>Intermidiate</small>
          </div>
        </article>
      </div>
    </div>
  </div>
    </section>
  )
}

export default Experience
