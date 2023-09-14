import React from 'react';
import "../Css/About.css";
import about from "../Images/laptest.jpeg";
import about2 from "../Images/about1.jpeg";

const About = () => {
  return (
    <div className='About' id="about">
     <div className='aboutimgbox'>
       <img src={about} alt="none" className='aboutimg'/>
       <img src={about2} alt=""  className='aboutimg1'/>
     </div>

     <div className='abouttxt'>
      <div className="aboutheader">I'm a Developer</div>
      <div className="subaboutheader">I Develop Application that Simplify Life</div>
      <div className="aboutbodytxt">I'm Rohit,a CSE undergrad & Full-Stack Developer, boosts startups with UI, APIs, and payment gateway expertise, optimizing their products.</div>
      <div className="aboutbodytxt">Looking Foward to work with you guys on some amazing projects and  enhance my development skills.</div>
      <a className='aboutbtn' href='#portfolio'>View Portfolio</a>

     </div>

    </div>
  )
}

export default About