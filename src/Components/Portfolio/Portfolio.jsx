import React from 'react'
import './portfolio.css'
import IMG0 from '../../Assest/mee.jpg'
import IMG1 from '../../Assest/mee.jpg'
import IMG2 from '../../Assest/mee.jpg'
import IMG3 from '../../Assest/mee.jpg'
import IMG4 from '../../Assest/mee.jpg'
import IMG5 from '../../Assest/mee.jpg'

// **********************
const data = [
  
  {
    id: 1,
    title: 'Crypto Currency Dashboard & Financial Visaualization',
    image: IMG0,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-crypo-currency-dashboards-and-financial-data-visualization',
  },

  {
    id: 2,
    title: 'Crypto Currency Dashboard & Financial Visaualization',
    image: IMG1,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-crypo-currency-dashboards-and-financial-data-visualization',
  },

  {
    id: 3,
    title: 'Crypto Currency Dashboard & Financial Visaualization',
    image: IMG2,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-crypo-currency-dashboards-and-financial-data-visualization',
  },

  {
    id: 4,
    title: 'Crypto Currency Dashboard & Financial Visaualization',
    image: IMG3,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-crypo-currency-dashboards-and-financial-data-visualization',
  },

  {
    id: 5,
    title: 'Crypto Currency Dashboard & Financial Visaualization',
    image: IMG4,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-crypo-currency-dashboards-and-financial-data-visualization',
  },

  {
    id: 6,
    title: 'Crypto Currency Dashboard & Financial Visaualization',
    image: IMG5,
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-crypo-currency-dashboards-and-financial-data-visualization',
  },


]

// **********************


// Portfolio Component
const portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My recent Work</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio_container">
       
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio_item">
                  <div className="portfolio_item-image">
                    <img src={image}alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

                  </div>
             </article>
            )
          })
        }
       

       </div>
    </section>
  )
}

export default portfolio
