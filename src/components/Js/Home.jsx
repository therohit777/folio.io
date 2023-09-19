import React from 'react';
import "../Css/Navbar.css";
import Navbar from './Navbar';
import Herosection from './Herosection';
import About from './About';
import Project from './Project';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Journeyroute from './Journey/Journeyroute';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Herosection/>
        <About/>
        <Project/>
        <Testimonials/>
        <Journeyroute/>
        <Footer/>
    </div>
  )
}

export default Home