import React, { useState } from "react";
import "../Css/Navbar.css";
import { FiAlignJustify, FiXSquare } from "react-icons/fi";

const Navbar = () => {
  const [hidmenu, sethidmenu] = useState(true);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

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
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
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
    </div>
  );
};

export default Navbar;
