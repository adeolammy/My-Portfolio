import React from 'react'
import './experience.css'
import {TbDiscountCheckFilled} from 'react-icons/tb'

function Experience() {
  return (
    <section id='experience'> 
      <h1>My Skills</h1>
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
        <h3>Data Analysis Skills</h3>
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
                <h3>Power BI</h3>
                <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
            <div>
                <h3>SQL</h3>
                <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
          <div>
             <h3>Tableau</h3>
             <small className='text-light'>Experienced</small>
          </div>
        </article>
        
        <article className='experience_details'>
          <TbDiscountCheckFilled className='experience_details-icon'/>
          <div>
            <h3>Excel</h3>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
      </div>
    </div>
  </div>
    </section>
  )
}

export default Experience
