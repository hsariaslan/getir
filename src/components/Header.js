import React from 'react';
import { FiGlobe, FiUser, FiUserPlus, } from 'react-icons/fi';

export default function Header() {
  return (
    <div className="bg-primaryDark">
      <div className="container h-11 flex items-center justify-between text-white text-opacity-80">
        <div className="menu menu-active text-base">getir</div>
        <div className="flex gap-x-10 items-center">
          <div className="nav-links">
            <FiGlobe className="nav-icons" />
            <span>Türkçe (TR)</span>
          </div>
          <div className="nav-links">
            <FiUser className="nav-icons" />
            <span>Giriş Yap</span>
          </div>
          <div className="nav-links">
            <FiUserPlus className="nav-icons" />
            <span>Kayıt Ol</span>
          </div>
        </div>
      </div>
    </div>
  )
}
