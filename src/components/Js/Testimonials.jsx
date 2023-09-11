import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Css/Testimonials.css";
import { Autoplay,Pagination,Navigation } from "swiper/modules";
import Testcard from './Testcard';
import logo1 from "../Images/test3.png";
import logo2 from "../Images/test2.png";
import logo3 from "../Images/test1.png";


const Testimonials = () => {
  const testimonials = [
    {
      id:'1',
      name:'Tarun Singh',
      designation:'Data scientist',
      testimonial:'Rohit possesses the ultimate "can do" attitude while taking on all tasks with a positive energy and a smile. His upbeat personality and engaging personal style enable him to interact effectively with other employees. He is very well organized and keeps track of the details. Highly recommend!'
    },
    {
      id:'2',
      name:'NiKil Kumar',
      designation:'DevOps Engineer',
      testimonial:'Rohit Pandey is a hardworker and has a Cheerful personality. He is able to work well by understanding all the details required by a particular project or task. I am certain he will prove to be a good developer for any organization.'
    },
    {
      id:'3',
      name:'Ansh Kapoor',
      designation:'Full-Stack Developer',
      testimonial:'Rohit, as a full-stack developer, excels in both front-end and back-end, consistently delivering efficient solutions. His skills, teamwork, and problem-solving are invaluable. Highly recommend!'
    },
  ]
  return (
    <div className='Testimonials'>
      <div className='testheader'>Testimonials</div>
      <div className="testsay">Here are some words from my clients and co-workers with whom I have worked</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide><Testcard test ={testimonials[0]} images={logo1}/> </SwiperSlide>
         <SwiperSlide><Testcard test ={testimonials[1]} images={logo3}/> </SwiperSlide>
         <SwiperSlide><Testcard test ={testimonials[2]} images={logo2}/> </SwiperSlide>
      </Swiper>
  </div>
  )
}

export default Testimonials