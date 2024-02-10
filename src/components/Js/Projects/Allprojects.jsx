import "../../Css/Allprojects.css";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Allprojects = () => {
  const items = [
    {
      id:1,
      name:'Portfolio',
      githublink:'https://github.com/therohit777/folio.io',
      projectlink:'https://rohitpandey7.netlify.app/',
      Image:'./Images/portfolios.png'
    },
    {
      id:2,
      name:'DevStop',
      githublink:'https://github.com/therohit777/DevStop_Client',
      projectlink:'https://devstop.netlify.app/',
      Image:'./Images/devStop.png'
    },
    {
      id:3,
      name:'Finwallet',
      githublink:'https://github.com/therohit777/FinWallet',
      projectlink:'https://finwallet.netlify.app/Frontlogo',
      Image:'./Images/finwallet.png'
    },
    {
      id:4,
      name:'Halomeet',
      githublink:'https://github.com/therohit777/Hallomeet',
      projectlink:'https://awesome-elion-e0bc12.netlify.app/',
      Image:'./Images/hallomeet.png'
    },
    {
      id:5,
      name:'Weathify',
      githublink:'https://github.com/therohit777/Weathify.io',
      projectlink:'https://weathify7.netlify.app/',
      Image:'./Images/weather.png'
    },
    {
      id:6,
      name:'Netflix',
      githublink:'https://github.com/therohit777/Netflix_Clone',
      projectlink:'https://weathify7.netlify.app/',
      Image:'./Images/netflix.jpeg'
    },
  ];

  const [projectItems, setProjectItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProjectItems(filteredItems);
  };

  return (
    <div className='Allprojects'>
      <div className="journeyheader">
        <p className='headjourney resetsize1'>My <span className='headjtn'>Portfolio</span></p>
        <span className='journeybgntxt resetsize2'>Portfolio</span>
      </div>
      <Link to='/home' className='backhome resetprojectsbtn'>Back to home</Link>
      <div className="searchbox">
        <input type="text" placeholder='Search...' value={searchTerm} onChange={handleSearch} />
        <div className='searchbtn'><FaSearch/></div>
      </div>
      <div className="projectshowcont">
        {projectItems.map((item, index) => (
          <div key={index} className="portfoiliocard">
            <img src={item.Image} alt="none" className="cardimg"/>
            <p className="projectnames">{item.name}</p>
            <a href={item.githublink} target="_blank" rel="noreferrer" className="probtn">Github</a>
            <a href={item.projectlink} target="_blank" rel="noreferrer" className="probtn">Site</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allprojects;
