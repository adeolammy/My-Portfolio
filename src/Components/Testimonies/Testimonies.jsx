import React from 'react'
import './testimonies.css'
import AVA from '../../Assest/ava1.jpg'
import AVA1 from '../../Assest/ava2.jpg'
import AVA2 from '../../Assest/ava3.webp'
import AVA3 from '../../Assest/ava4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVA,
    name: 'Tiana Sean',
    review: 'I am thoroughly impressed with the app. It has exceeded my expectations in terms of functionality, user interface, and overall performance. It has truly enhanced my workflow and made my life easier.',          
  },

  
  {
    avatar: AVA1,
    name: 'Sharon Davis',
    review: 'The app is an absolute game-changer! It has simplified my tasks, increased efficiency, and the attention to detail in its design is remarkable. I can not imagine my work without it now.',          
  },

  {
    avatar: AVA2,
    name: 'Makeen Habeeb',
    review: 'I can not praise the app enough! It has revolutionized the way I work, with its seamless functionality, beautiful design, and intuitive user experience. Highly recommended for anyone in need of a productivity boost.',          
  },

  {
    avatar: AVA3,
    name: 'Olaosebikan Makinde Joseph',
    review: 'I am extremely satisfied with the app developed for me. It has greatly improved my productivity and has an excellent user interface.',          
  },


]


const Testimonies = () => {
  return (
    <section id='Testimonials'>
      <h1>Review from Clients</h1>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}     
      >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
                <SwiperSlide key={index} className="testimonial">
                    <div className="client_avatar">
                      <img src={avatar} alt="Avatar two" />
                    </div>
                      <h5 className='client_name '>{name}</h5>
                      <small className="client_review">{review} </small>
                  </SwiperSlide>

            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonies
