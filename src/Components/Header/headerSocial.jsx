import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const headerSocial = () => {
  return (
    <div className="header__socials">
         <a href="https://www.linkedin.com/in/adebajo-a-004781ba/" target='blank'> <BsLinkedin/> </a>
         <a href="https://github.com/adeolammy" target='blank'><BsGithub/></a>
         <a href="https://twitter.com/pax_mentis_?t=MMepddZ5Nyvg3-52-sYHFQ&s=09" target='blank'><BsTwitter/></a>
    </div>
  )
}

export default headerSocial
