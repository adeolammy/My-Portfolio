// import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => { 
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_43ehvti', 'template_zg3jtfq', form.current, 'ZQnLsL_Wz7lWLDS2x')
    e.target.reset()
  };
  
  return (
    <section id='contact'> 
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <FiMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>adeolammy2020@gmail.com</h5>
          <a href="mailto:adeolammy2020@gmail.com" target="_blank">Send a message</a> 
        </article>

        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2348056446232</h5>
          <a href="https://api.whatsapp.com/send?=+2348056446232" target="_blank">Send a message</a> 
        </article>
      </div>
      {/* END OF CONTACT OPTION */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="text" name='email' placeholder='Your Email' required/>
        <textarea name="message" id=""  rows="10" placeholder='Your message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
