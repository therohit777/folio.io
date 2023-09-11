import React from 'react';
import "../Css/Testcard.css";

const Testcard = (props) => {
  console.log(props.test.name);
  return (
    <div className='TestCard'>
        <img src={props.images} alt="none" className='Testimg'/>
        <div className="testname">{props.test.name}</div>
        <div className="testprof">{props.test.designation}</div>
        <div className="testimonial">{props.test.testimonial}</div>
    </div>
  )
}

export default Testcard;