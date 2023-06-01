import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'> 
      <h3>What I Offer</h3>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>

          </ul>
          
        </article>
        {/* ************************ END OF UI/UX**********************/}
        
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>

          </ul>
          
        </article>
        {/* ************************End of Web Dev**********************/}
        <article className="service">
          <div className="service_head">
            <h3>Data Analysis</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>I design and develop beautiful responsive websites and mobile apps.</p>
            </li>

          </ul>
          
        </article>
        {/* ************************UI/UX**********************/}

       
      </div>

    </section>
  )
}

export default Services
