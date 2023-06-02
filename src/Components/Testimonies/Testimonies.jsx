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
    name: 'Tina Show',
    review: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut',          
  },

  
  {
    avatar: AVA1,
    name: 'Orlando Owo',
    review: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut',          
  },

  {
    avatar: AVA2,
    name: 'Majek Fasheck',
    review: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut',          
  },

  {
    avatar: AVA3,
    name: 'Orbat Ogunde',
    review: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut',          
  },


]


const Testimonies = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from Clients</h5>
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
