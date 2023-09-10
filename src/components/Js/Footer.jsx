import React from 'react';
import "../Css/Footer.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer'>
       <div className='copy'>© 2023 <span className='bolds'>codewithrohit</span>. All Rights Reseverd</div>
       <div className='socialbox'>
        <span className="socialheader">Connect with me:</span>
        <div className="socials">
            <a href="https://www.linkedin.com/in/rohitpandey777/" target='_blank' rel="noreferrer"><FaLinkedinIn className='socialicons'/></a>
            <a href="https://www.instagram.com/rohitpande77/" target='_blank' rel="noreferrer"><FaInstagram className='socialicons'/></a>
            <a href="https://github.com/therohit777" target='_blank' rel="noreferrer"><FaGithub className='socialicons'/></a>
            <a href="https://twitter.com/rohit_dev7" target='_blank' rel="noreferrer"><FaTwitter className='socialicons'/></a>
        </div>
       </div>
    </div>
  )
}

export default Footer;