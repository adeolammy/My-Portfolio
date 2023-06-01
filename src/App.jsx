import './index.css';

import Header from './Components/Header/header';
import Nav from './Components/Nav/nav';
import About from './Components/About/about';
import Experience from './Components/Experience/experience';
import Services from './Components/Services/services';
import Portfolio from './Components/Portfolio/portfolio';
import Testimonies from './Components/Testimonies/testimonies';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

import React from 'react'

const App = () => {
  return (
    <>
       <Header/>
      <Nav/>
      <About/>
      <Experience/> 
      <Services/>
      <Portfolio/>
      <Testimonies/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

