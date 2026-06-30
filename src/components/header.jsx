import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginDemo from './LoginDemo';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const getMenuClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold text-sm border-b-2 border-blue-600 pb-1 transition-all"
      : "text-gray-500 hover:text-gray-900 text-sm pb-1 transition-colors";

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <NavLink to="/" className="text-xl font-bold text-blue-600 tracking-wide">
            BrandKu
          </NavLink>
          
          <div className="flex items-center space-x-8">
            <NavLink to="/" className={getMenuClass}>Beranda</NavLink>
            <NavLink to="/about" className={getMenuClass}>Tentang</NavLink>
            <NavLink to="/pricing" className={getMenuClass}>Harga</NavLink>
            
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2 rounded-lg transition-colors shadow-sm"
            >
              Masuk
            </button>
          </div>

        </div>
      </nav>

      {/* Tampilkan modal login jika status true */}
      <LoginDemo isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}