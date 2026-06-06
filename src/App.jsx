import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  // State untuk menangani jumlah klik tombol
  const [counter, setCounter] = useState(0);

  // Fungsi saat tombol diklik
  const handleCtaClick = () => {
    setCounter(counter + 1);
  };

  // Logika pengkondisian teks feedback berdasarkan jumlah counter
  let feedbackMessage = 'Klik tombol di bawah untuk memulai.';
  if (counter === 1) {
    feedbackMessage = 'Terima kasih! Langkah pertama berhasil.';
  } else if (counter === 2) {
    feedbackMessage = 'Kamu mengklik lagi! Teks feedback berubah.';
  } else if (counter > 2) {
    feedbackMessage = 'Tombol dinonaktifkan karena sudah lebih dari 2 klik.';
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* 1. Menampilkan Header */}
      <Header />

      {/* 2. Baris Teks Copyright di bawah Header sesuai proyektor */}
      <div className="text-center py-3 bg-gray-400 text-white text-xs font-medium tracking-wide">
        &copy; 2026 BrandKu. All rights reserved.
      </div>

      {/* 3. Kotak Besar Hijau Muda (Sesuai Tampilan di Proyektor) */}
      <main className="flex-1 p-6 flex justify-center items-start pt-10">
        <div className="w-full max-w-4xl bg-emerald-50/60 border border-emerald-100 h-[450px] rounded-2xl shadow-sm p-8 flex flex-col items-center justify-center text-center">
          
          {/* Tempat menampilkan pesan feedback yang dinamis */}
          <h2 className="text-xl font-semibold text-gray-700 mb-6 max-w-md">
            {feedbackMessage}
          </h2>

          {/* Tombol interaktif menggunakan state */}
          <button
            onClick={handleCtaClick}
            disabled={counter > 2}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all shadow-sm active:scale-95 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:scale-100"
          >
            {counter > 2 ? 'Sudah Maksimal' : 'Klik Di Sini'}
          </button>

          {/* Indikator counter kecil untuk pembuktian ke dosen */}
          <div className="mt-8 bg-white px-4 py-1.5 rounded-full border text-xs text-gray-500 font-mono">
            Status Counter: <span className="font-bold text-blue-600">{counter}</span>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;