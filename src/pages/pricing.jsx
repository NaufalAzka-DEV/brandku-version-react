import React from 'react';

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Paket Layanan</h1>
      <p className="text-gray-600 mb-8">Pilih rencana yang paling sesuai dengan kebutuhan belajarmu.</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-sm mx-auto shadow-sm">
        <h3 className="text-lg font-bold text-gray-800">Paket Mahasiswa</h3>
        <p className="text-2xl font-extrabold text-blue-600 my-3">Rp 0 <span className="text-xs font-normal text-gray-400">/ selamanya</span></p>
        <p className="text-sm text-gray-500 mb-6">Akses penuh fitur dasar tugas dan dashboard tim.</p>
        <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium">Mulai Free</button>
      </div>
    </div>
  );
}