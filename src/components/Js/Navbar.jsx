import React, { useState } from "react";
import "../Css/Navbar.css";
import { FiAlignJustify, FiXSquare } from "react-icons/fi";

const Navbar = () => {
  const [hidmenu, sethidmenu] = useState(true);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [contactbox, setcontactbox] = useState(false);

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
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1CknZTU_k01x503cj1QQOIDL8oD82Z_D6/view?usp=sharing"
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
          <FiXSquare className="contactclosebtn" onClick={()=>setcontactbox(false)}/>
        </div>
        <div className="quotebox">
          <div className="headerquote">Don't be shy</div>
          <div className="subheaderquote">Drop Me a Line</div>
          <input type="text" className="contacttxt" placeholder="name"/>
          <input type="email" className="contacttxt" placeholder="email"/>
          <textarea  cols="30" rows="6" placeholder="message" className="contactmessage"></textarea>
          <button className="contactsendbtn">send</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
