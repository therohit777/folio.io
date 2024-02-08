import React, { useEffect, useState } from 'react';
import "../Css/Eyeball.css";
import { Link, useNavigate } from 'react-router-dom';


const texts = [
  "Hey, I am Rohit Pandey.",
  "I'm a Full-Stack Developer.",
  "Welcome to my Portfolio.",
  "Loading....."
];

const Eyeball = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 13000); 

    return () => clearTimeout(timer); 
  }, [navigate]);




  useEffect(() => {
    const text = texts[currentTextIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setCurrentText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (currentTextIndex < texts.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1);
          } else {
            setCurrentTextIndex(0);
          }
        }, 1000); 
      }
    }, 100); 

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentTextIndex]);
  return (
    <div className='Eyeballpage'>
        <div class="clip-circle aligner">
          <div id="lid" class="eye">
            <div class="iris"></div>
          </div>
        </div>
        <div className="typewriter">{currentText}</div>
        <Link to='/home' className='skipbtn'>skip</Link>
    </div>
  )
}

export default Eyeball