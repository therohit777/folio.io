import React, { useEffect, useState } from 'react';
import "../Css/Eyeball.css";
import { useNavigate } from 'react-router-dom';


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
      navigate('/welcome'); // Navigate to the '/next' page
    }, 13000); // 10 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
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
        }, 1000); // Delay before switching to the next text
      }
    }, 100); // Typing speed (adjust as needed)

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
    </div>
  )
}

export default Eyeball