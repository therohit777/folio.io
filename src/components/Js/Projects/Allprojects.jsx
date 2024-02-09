// import React, { useState } from 'react';
import "../../Css/Allprojects.css";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Allprojects = () => {
  // const items = [
  //   {
  //     id:1,
  //     name:'Portfolio',
  //     githublink:'https://github.com/therohit777/folio.io',
  //     projectlink:'https://rohitpandey7.netlify.app/',
  //     Image:''
  //   },
  //   {
  //     id:2,
  //     name:'DevStop',
  //     githublink:'https://github.com/therohit777/DevStop_Client',
  //     projectlink:'https://devstop.netlify.app/',
  //     Image:''
  //   },
  //   {
  //     id:3,
  //     name:'Finwallet',
  //     githublink:'https://github.com/therohit777/FinWallet',
  //     projectlink:'https://finwallet.netlify.app/Frontlogo',
  //     Image:''
  //   },
  //   {
  //     id:4,
  //     name:'Halomeet',
  //     githublink:'https://github.com/therohit777/Hallomeet',
  //     projectlink:'https://awesome-elion-e0bc12.netlify.app/',
  //     Image:''
  //   },
  // ]
  // const [projectitems, setprojectitems] = useState([]);

  return (
    <div className='Allprojects'>
      <div className="journeyheader"><p className='headjourney resetsize1'>My <span className='headjtn'>Portfolio</span></p><span className='journeybgntxt resetsize2'>Portfolio</span></div>
      <Link to='/home' className='backhome resetprojectsbtn'>Back to home</Link>
       <div className="searchbox">
         <input type="text" placeholder='Search...'/>
         <div className='searchbtn'><FaSearch/></div>
       </div>
       {/* {
        projectitems.map((items,index)=>{
          return(
            <>
            
            </>
          )
        })
       } */}
    </div>
  )
}

export default Allprojects;