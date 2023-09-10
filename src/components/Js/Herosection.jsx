import React from "react";
import "../Css/Hero.css";
import herobg from "../Images/photo.jpg";
import chess from "../Images/chess.png";

const Herosection = () => {
  return (
    <div className="HeroSection">
      <div className="innercont">
        <div className="herotext">
          
            <div className="intro1">Hello I'm</div>
            <div className="intro2">Rohit Pandey</div>
            <div className="intro3">Web Developer from India</div>
            <div className="subintro">Experienced Full-Stack developer, elevating startups with UI design and backend API expertise.</div>
            <div className="herobtn">
              <a href="#contact" className="Quote">Get a Quote</a>
              <a href="#about" className="aboutme">About me</a>
            </div>
          
        </div>


        <div className="heroimg">
          <div className="info1"> <span className="subimg1">2</span> <span className="subimg2">Years of Experience</span></div>
           <div className="info2">
               <img src={chess} alt="none" className="check"/>
           </div>
           <div className="info3"><span className="subimg1 subimgcol">8+</span> <span className="subimg2">Projects Completed</span></div>
          <img src={herobg} alt="none" className="hero" />
          </div>
      </div>
    </div>
  );
};

export default Herosection;
