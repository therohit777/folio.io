import React from 'react';
import "../../Css/Journey.css";
import { Link } from 'react-router-dom';

const Journey = () => {
  const companies = [
    {
      companyname:'Techchefz',
      role:'Software Engineer Intern',
      time:'September 2023 - Present ',
      description:'Implemented internal LMS, boosting company efficiency by 10% via training and learning platform. Enhanced clients product user experience with Semantic search feature. Utilized Next JS, MERN stack, Redux, Docker, and Elastic Search for tech infrastructure.',
      logoname:"techchefz"
    },
    {
      companyname:'Fintricity',
      role:'Software Development Engineer Intern',
      time:'November 2022 - May 2023 ',
      description:'Revamped APIs with FastAPI, crafted a draggable React feature, and designed a custom dashboard. Also, utilized React libraries for a graph and Storybook components. Created a Data-Marketplace MVP with TypeScript and used react-axios for data retrieval.',
      logoname:"company1"
    },
    {
      companyname:'CalciteX',
      role:'Software Development Engineer Intern',
      time:'September 2022 - October 2022',
      description:'Constructed a React-based financial and eCommerce site for marketing expansion. Enhanced the admin dashboard with React charts, ensured secure payments via Stripe, and developed an admin interface using TypeScript and Material UI.',
      logoname:"company2"
    },
    {
      companyname:'Healync',
      role:'Software Engineer Intern',
      time:'August 2022 - October 2022',
      description:'Designed a Service page UI with AJAX Datatables for customer information, resolved Calendar system bugs, and implemented patient appointment tracking using jQuery and Calendar js. Created Django backend APIs to showcase appointments.',
      logoname:"company3"
    },
    {
      companyname:'Akon',
      role:'Web Developer Intern',
      time:'June 2022 - July 2022',
      description:'Created a versatile eCommerce platform for product management, integrated DHL API for delivery tracking, and established backend APIs to facilitate platform functionality.',
      logoname:"company4"
    },
  ]

  return (
    <div className='Journey'>
      <div className="journeyheader"><p className='headjourney'>My <span className='headjtn'>Journey</span></p><span className='journeybgntxt'>Journey</span></div>
      <Link to='/home' className='backhome'>Back to home</Link>
      <div className="journeycont">
          {
           companies.map((item, index) => (
            <div className='jsubcont'>
              <div className='jimgcont'>
                  <img src={require("../../Images/"+item.logoname +".png")} alt="none" className='jimg'/>
                  <div className="jline"></div>
              </div>
              <div className="exps" key={index}>
                <div className="expheader">{item.companyname}</div>
                <div className="exprole">Role:  {item.role}</div>
                <div className="expyear">{item.time}</div>
                <div className="expbody">{item.description}</div>
              </div>
            </div>
           ))
          }
      </div>
        
        
        
    </div>
  )
}

export default Journey