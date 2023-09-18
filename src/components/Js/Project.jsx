import React from 'react';
import "../Css/Project.css";
import project1 from "../Images/portfolios.png";
import project2 from "../Images/finwallet.png";
import project3 from "../Images/netflix.png";
import project4 from "../Images/hallomeet.png";

const Project = () => {
  return (
    <div className='Projects' id="portfolio">
        <div className="projectheader">Portfolio</div>
        <div className="projectsubline">Browse Across My Recent Works</div>
       <div className='projectscont'>
          <a href="https://rohitpandey7.netlify.app/" target='_blank' rel="noreferrer" ><img src={project1} alt="none" className='projects'/> </a>
          <a href="https://shimmering-shortbread-24ae53.netlify.app/" target='_blank' rel="noreferrer" ><img src={project3} alt="none" className='projects'/> </a>
          <a href="https://awesome-elion-e0bc12.netlify.app/" target='_blank' rel="noreferrer" ><img src={project4} alt="none" className='projects'/> </a>
          <a href="https://finwallet.netlify.app/Frontlogo" target='_blank' rel="noreferrer" ><img src={project2} alt="none" className='projects'/> </a>
       </div>
       <a href="#portfolio" className='projectbtn'> View all</a>
        
    </div>
  )
}

export default Project