import React, { useRef, useState } from "react";
import "../Css/Navbar.css";
import { FiAlignJustify, FiXSquare } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const Navbar = () => {
  const [hidmenu, sethidmenu] = useState(true);
  const [colorChange, setColorchange] = useState(false);
  const [contactbox, setcontactbox] = useState(false);
  const [messagesent, setmessagesent] = useState(false);
  const form = useRef();
  
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs.sendForm('service_iavosec', 'template_d73jrma', form.current, 'Y7eBLaNMubCjShgCh')
      .then((result) => {
        console.log(result);
      }, (error) => {
          console.log(error);
    });
    form.current.name.value='';
    form.current.message.value='';
    form.current.gmails.value=''; 
    setmessagesent(true);
  };


  return (
    <div className={hidmenu ? "Navbar" : "Navbar navheight"}>
      <div className={colorChange ? "navbar colorChange" : "navbar"}>
        <a href="#home" className="header">
          Rohit Pandey
        </a>
        <ul className={hidmenu ? "" : "showup"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={()=>setcontactbox(true)}>Contact</a>
          </li>
          {/* <li>
            <a href="#blog">Blog</a>
          </li> */}
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1q8qdPu7AcTR9Z4LSDXHQq8Gw__kpDZL7/view"
          target="_blank"
          rel="noreferrer"
          className={hidmenu ? "cvbutton" : "cvbutton showup"}
        >
          Download CV
        </a>
        <FiAlignJustify
          className={hidmenu ? "menu" : "menu hide"}
          onClick={() => sethidmenu(false)}
        />
        <FiXSquare
          className={hidmenu ? "close" : "close showup"}
          onClick={() => sethidmenu(true)}
        />
      </div>
      
      
      <div className={(contactbox)?"contactbox":"contactbox contacthide"}>
        <div className="closecontact">
          <FiXSquare className="contactclosebtn" onClick={()=>{setcontactbox(false); setmessagesent(false)}}/>
        </div>
        <form className="quotebox" ref={form} onSubmit={sendEmail}>
          <div className="headerquote">Don't be shy</div>
          <div className="subheaderquote">Drop Me a Line</div>
          <input type="text" className="contacttxt" placeholder="name" name="name"/>
          <input type="email" className="contacttxt" placeholder="email" name="gmails"/>
          <textarea  cols="30" rows="6" placeholder="message" className="contactmessage" name="message"></textarea>
          <button type="submit" className="contactsendbtn">send</button>
          <div className={(messagesent)?"messagesentinfo":"messagesentinfohid"}>Message Sent!</div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
