import React, { useState } from 'react';
import CardGrid from './CardGrid'; 

export default function Hero() {
  const [clickCount, setClickCount] = useState(7);

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Welcome Card */}
      <div className="max-w-3xl mx-auto bg-emerald-50/50 border border-emerald-100 rounded-2xl p-8 text-center shadow-sm mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Selamat Datang di BrandKu
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base">
          Solusi digital terbaik untuk mengelola dan mengembangkan tugas akademik 
          serta bisnismu dengan lebih mudah.
        </p>
        
        <button 
          onClick={() => setClickCount(clickCount + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-md animate-pulse-subtle"
        >
          Mulai Sekarang
        </button>
        
        <div className="mt-6">
          <span className="inline-block bg-white border border-gray-200 text-xs text-gray-500 px-4 py-1.5 rounded-full shadow-sm font-mono">
            Total Klik: {clickCount}
          </span>
        </div>
      </div>

      {/* Menampilkan Component CardGrid secara terpisah */}
      <CardGrid />
    </section>
  );
}