// Banner
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import './Banner.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export default function Banner() {
  return (
    <div
      id='home'
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div
      className="banner"
      id="banner"
      style={{
        background: 'url("/static/images/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
      <h1>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          vitae perspiciatis neque soluta.
        </p>
        <button type="button" className="btn">
          shop now
        </button>
      </div>
    </div></SwiperSlide>
        <SwiperSlide><div
      className="banner"
      id="banner"
      style={{
        background: 'url("/static/images/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
      <h1>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          vitae perspiciatis neque soluta.
        </p>
        <button type="button" className="btn">
          shop now
        </button>
      </div>
    </div></SwiperSlide>
        <SwiperSlide><div
      className="banner"
      id="banner"
      style={{
        background: 'url("/static/images/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h1>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          vitae perspiciatis neque soluta.
        </p>
        <button type="button" className="btn">
          shop now
        </button>
      </div>
      </div></SwiperSlide>
    </Swiper>
    </div>
  );
}
