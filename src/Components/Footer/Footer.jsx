import React from 'react'
import './footer.css'
import {IoLogoFacebook} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">ADEBAJO ADEWALE</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimainials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href=" https://facebook.com" target='blank'><IoLogoFacebook/></a>
        <a href=" https://instagram.com" target='blank'><FiInstagram/></a>
        <a href=" https://twitter.com" target='blank'><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Adebajo All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
