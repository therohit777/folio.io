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
            <FaLinkedinIn className='socialicons'/>
            <FaInstagram className='socialicons'/>
            <FaGithub className='socialicons'/>
            <FaTwitter className='socialicons'/>
        </div>
       </div>
    </div>
  )
}

export default Footer;