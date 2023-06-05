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
              <p>Conducting interviews, surveys, and usability tests to understand user needs and preferences</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Creating visually appealing and intuitive interfaces that enhance user experience.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Developing low-fidelity sketches or digital prototypes to visualize the structure and layout of the interface.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Building interactive prototypes to test and validate design concepts and functionalities.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Designing intuitive and seamless interactions between users and the interface.</p>
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
              <p>Creating visually appealing and user-friendly website layouts.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Ensuring websites are optimized for various devices and screen sizes.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Monitoring and resolving issues, updating content, and ensuring smooth functioning.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Creating online stores, shopping carts, and payment integration.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Building custom CMS solutions for easy content management.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Enhancing website performance, speed, and search engine optimization (SEO).</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>  Implementing measures to protect websites from cyber threats and data breaches.</p>
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
              <p>Removing errors, inconsistencies, and duplicates from datasets.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Creating visually appealing and informative charts, graphs, and dashboards.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Applying statistical techniques to uncover patterns, trends, and correlations in data.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Extracting valuable insights and patterns from large and complex datasets.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Developing models to forecast future trends and make data-driven predictions.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Analyzing and interpreting data findings to provide actionable recommendations.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p>Creating comprehensive reports summarizing data analysis and insights.</p>
            </li>
            <li>
              <BsCheck2All className="service_list-icon"/>
              <p> Organizing and maintaining databases to ensure data integrity and accessibility.</p>
            </li>

          </ul>
          
        </article>
        {/* ************************UI/UX**********************/}

       
      </div>

    </section>
  )
}

export default Services
