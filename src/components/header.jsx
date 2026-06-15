import React from 'react';

function Header(props) {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Brand Name diambil dari Props */}
      <div className="text-xl font-bold text-blue-600">
        {props.brandName}
      </div>

      {/* Menu Navigasi */}
      <ul className="flex space-x-6 text-gray-600">
        <li><a href="#beranda" className="hover:text-blue-600">Beranda</a></li>
        <li><a href="#fitur" className="hover:text-blue-600">Fitur</a></li>
        <li><a href="#harga" className="hover:text-blue-600">Harga</a></li>
      </ul>
    </nav>
  );
}

export default Header;