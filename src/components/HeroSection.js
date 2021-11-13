import React, { Component, useState, } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [selected, setSelected] = useState('TR');
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15',
  };
  const settings = {
    dots: false,
    autoplay: true,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };
  return (
    <div className="h-[500px] overflow-hidden relative">
      <div className="absolute z-40 top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-transparent"></div>
      
      <div className="container relative">
        <div className="absolute z-50 flex justify-between w-full mt-24">
          <div className="flex flex-col gap-y-10">
            <img src="/images/logo.svg" alt="logo" className="w-44 h-44 ml-2" />
            <span className="text-white text-4xl font-medium w-72">Dakikalar içinde kapınızda</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mt-13 mb-auto text-center">
            <span className="text-primary text-base font-medium">Giriş yap veya kayıt ol</span>
            <div className="flex justify-between">
              <div className="mt-4">
                <div className="float-left">
                  <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    customLabels={phones}
                    onSelect={(code) => setSelected(code)}
                    selected={selected}
                    className="flag-select"
                  />
                </div>
                <input type="text" placeholder="Telefon numarası" className="w-52 h-13 bg-white border-2 border-gray-200 rounded p-3 outline-none float-left" />
              </div>
            </div>
            <button className="bg-secondary text-primary hover:bg-primary hover:text-secondary transition-all py-3 w-full mt-3 rounded-lg">Telefon numarası ile devam et</button>
          </div>
        </div>
      </div>

      <Slider {...settings}>
        <img src="/images/slide-1.jpg" className="slider-img" />
        <img src="/images/slide-2.jpg" className="slider-img" />
        <img src="/images/slide-3.jpg" className="slider-img" />
        <img src="/images/slide-4.jpg" className="slider-img" />
      </Slider>
    </div>
  )
}

export default HeroSection;
