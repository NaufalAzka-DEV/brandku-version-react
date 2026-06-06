import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-12 bg-white border-b border-gray-200">
      {/* Bagian kiri: Nama Brand */}
      <h1 className="text-blue-600 font-bold text-xl">BrandKu</h1>
      
      {/* Bagian kanan: Menu Navigasi sesuai proyektor */}
      <nav className="flex gap-8 text-gray-500 font-medium text-sm">
        <a href="#" className="hover:text-blue-600 transition-colors">Beranda</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Fitur</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Harga</a>
      </nav>
    </header>
  );
}

export default Header; 