import React from 'react'
import './header.css'
import CTA  from './CTA'  
import ME from '../../Assest/mee.png'
import HeaderSocial from './headerSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I am</h3>
        <h1>Adebajo Adewale</h1>
        <h3 className='text-light'>Data Analyst / Front-End Developer</h3>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
