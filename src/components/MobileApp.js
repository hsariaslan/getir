import React from 'react';

export default function MobileApp() {
  return (
    <div className="relative container mt-6 h-78 bg-app bg-primary rounded-lg flex justify-between">
      <div className="mt-16 ml-12">
        <div className="text-white text-3xl font-medium">Getir'i indirin!</div>
        <div className="mt-5 text-white text-lg w-100">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</div>
        <div className="flex gap-x-2 mt-10">
          <a href="https://itunes.apple.com/app/id995280265" target="_blank">
            <img src="/images/app-apple.svg" alt="getir-appstore" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.getir" target="_blank">
            <img src="/images/app-google.svg" alt="getir-google-play" />
          </a>
          <a href="https://appgallery7.huawei.com/#/app/C100954039" target="_blank">
            <img src="/images/app-huawei.svg" alt="getir-app-gallery" />
          </a>
        </div>
      </div>
      <img src="/images/app.png" alt="getir-app" className="absolute bottom-0 right-0 h-72" style={{width: 605 + 'px'}}/>
    </div>
  )
}
