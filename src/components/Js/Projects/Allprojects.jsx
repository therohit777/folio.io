import React from 'react';
import "../../Css/Allprojects.css";
import { Link } from 'react-router-dom';

const Allprojects = () => {
  return (
    <div className='Allprojects'>
      <div className="journeyheader"><p className='headjourney resetsize1'>My <span className='headjtn'>Portfolio</span></p><span className='journeybgntxt resetsize2'>Portfolio</span></div>
      <Link to='/home' className='backhome resetprojectsbtn'>Back to home</Link>
    </div>
  )
}

export default Allprojects;