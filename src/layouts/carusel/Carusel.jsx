import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carusel.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Container, Linee } from '../../utils/Utils';
import {Link} from "react-router-dom"

import logo1 from "../../assets/logo/logo1.svg"
import logo2 from "../../assets/logo/logo2.svg"
import logo3 from "../../assets/logo/logo3.svg"
import logo4 from "../../assets/logo/logo4.svg"
import logo5 from "../../assets/logo/logo5.svg"

const Carusel = () => {
  return (
   <Container>
   <Linee/>
   <div className="swiper-title">
    <h2>Популярные бренды</h2>
    <Link to="/" className='link'>Все бренды</Link>
   </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        startedSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo5} alt="" /></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carusel