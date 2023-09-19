import React from 'react';
import "../../Css/Journeyroute.css";
import {Link} from "react-router-dom";

const Journeyroute = () => {
  return (
    <div className='Jorneyroute'>
        <div className='jtext'>Wanna know my Journey ?</div>
        <Link to="/Journey" className='navigate'><div className="journeyrouebox">Learn More</div></Link>
    </div>
  )
}

export default Journeyroute