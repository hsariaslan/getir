import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, } from 'react-icons/fa';
import { FiGlobe, } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="mt-16 bg-white">
      <div className="container">
        <div className="flex justify-start pt-10">
          <div className="w-64 mr-6">
            <p className="text-lg text-primary">Getir'i indirin!</p>
            <div className="flex flex-col gap-y-4 mt-4">
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

          <div className="w-64 mr-6">
            <p className="text-lg text-primary">Getir'i keşfedin</p>
            <div className="flex flex-col gap-y-4 mt-4">
              <a href="#" className="footer-links">Hakkımızda</a>
              <a href="#" className="footer-links">Kariyer</a>
              <a href="#" className="footer-links">Teknoloji Kariyerleri</a>
              <a href="#" className="footer-links">İletişim</a>
              <a href="#" className="footer-links">COVID-19 Duyuru</a>
              <a href="#" className="footer-links">Sosyal Sorumluluk Projeleri</a>
            </div>
          </div>

          <div className="w-64 mr-6">
            <p className="text-lg text-primary">Yardıma mı ihtiyacınız var?</p>
            <div className="flex flex-col gap-y-4 mt-4">
              <a href="#" className="footer-links">Sıkça Sorulan Sorular</a>
              <a href="#" className="footer-links">Kişisel Verilerin Korunması</a>
              <a href="#" className="footer-links">Gizlilik Politikası</a>
              <a href="#" className="footer-links">Kullanım Koşulları</a>
              <a href="#" className="footer-links">Çerez Politikası</a>
            </div>
          </div>

          <div className="w-64 mr-6">
            <p className="text-lg text-primary">İş Ortağımız Olun</p>
            <div className="flex flex-col gap-y-4 mt-4">
              <a href="#" className="footer-links">Bayimiz Olun</a>
              <a href="#" className="footer-links">Deponuzu Kiralayın</a>
              <a href="#" className="footer-links">GetirYemek Restoranı Olun</a>
              <a href="#" className="footer-links">GetirÇarşı İşletmesi Olun</a>
            </div>
          </div>

          <div>
            <a href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1" target="_blank" className="shadow-lg p-4 block rounded-lg border-1 border-gray-100">
              <img src="/images/qr.png" alt="etbis" width="72" height="84" />
            </a>
          </div>
        </div>

        <div className="border-t-1 border-gray-100 mt-10 py-6 flex justify-between">
          <div className="flex gap-x-3 items-center">
            <div className="text-gray-500 text-sm">© 2021 Getir</div>
            <div className="w-1 h-1 rounded-full bg-primary"></div>
            <div>
              <a href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806" target="_blank" className="text-sm text-primary text-opacity-90">
                Bilgi Toplumu Hizmetleri
              </a>
            </div>
            <div className="w-1 h-1 rounded-full bg-primary"></div>
            <div>
              <span className="text-gray-500 text-sm">Developed with 💖 by </span>
              <a href="https://github.com/hsariaslan" target="_blank" className="text-sm text-primary text-opacity-90">
                Hakan Sarıaslan
              </a>
            </div>
          </div>
          <div>
            <div className="flex gap-x-2">
              <a href="https://www.facebook.com/getir" target="_blank" className="footer-social">
                <FaFacebook />
              </a>

              <a href="https://twitter.com/getir" target="_blank" className="footer-social">
                <FaTwitter />
              </a>
              
              <a href="https://www.instagram.com/getir" target="_blank" className="footer-social">
                <FaInstagram />
              </a>
              
              <a href="#" className="footer-social flex items-center gap-x-1 border-1 border-gray-100 text-lg -mt-0.5">
                <FiGlobe />
                <span className="text-sm">Türkçe (TR)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
