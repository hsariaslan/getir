import React, { Component, } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class HeroSection extends Component {
  render () {
    const settings = {
      dots: false,
      autoplay: true,
      pauseOnHover: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="h-128 overflow-hidden relative">
        <div className="absolute z-40 top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-transparent"></div>
        
        <div className="container relative">
          <div className="absolute z-50 flex justify-between w-full mt-24">
            <div className="flex flex-col gap-y-10">
              <img src="/images/logo.svg" alt="logo" className="w-44 h-44 ml-2" />
              <span className="text-white text-4xl font-medium w-72">Dakikalar içinde kapınızda</span>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-13 mb-auto text-center">
              <span className="text-primary font-medium">Giriş yap veya kayıt ol</span>
              <div className="mt-4">
                <div className="h-13 bg-white border-2 border-gray-200 rounded p-3 float-left mr-2"></div>
                <input type="text" placeholder="Telefon numarası" className="bg-white border-2 border-gray-200 rounded p-3 outline-none float-left" />
              </div>
              <button className="bg-secondary text-primary hover:bg-primary hover:text-secondary transition-all py-3 w-full mt-4 rounded-lg">Telefon numarası ile devam et</button>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          <img src="/images/slide-1.jpg" />
          <img src="/images/slide-2.jpg" />
          <img src="/images/slide-3.jpg" />
          <img src="/images/slide-4.jpg" />
        </Slider>
      </div>
    )
  }
}
