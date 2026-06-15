import React, { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero'; // Pastikan file hero.jsx sudah dibuat di folder components

function App() {
  // State untuk menghitung klik tombol
  const [count, setCount] = useState(0);

  // Fungsi yang dijalankan saat tombol diklik
  const handleHeroClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Menyisipkan Navbar */}
        <Header brandName="BrandKu" />

        {/* Menyisipkan Hero Section dan mengirim data lewat Props */}
        <Hero 
          title="Selamat Datang di BrandKu" 
          description="Solusi digital terbaik untuk mengelola dan mengembangkan tugas akademik serta bisnismu dengan lebih mudah."
          buttonText="Mulai Sekarang"
          countValue={count}
          onButtonClick={handleHeroClick}
        />
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 bg-slate-300 mt-20">
        © 2026 BrandKu. All rights reserved.
      </footer>
    </div>
  );
}

// CUKUP TULIS SATU KALI SAJA DI SINI
export default App;