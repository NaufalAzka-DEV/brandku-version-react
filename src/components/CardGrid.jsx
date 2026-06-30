import React from 'react';

export default function CardGrid() {
  const features = [
    {
      id: 1,
      icon: '📚',
      title: 'Manajemen Akademik',
      description: 'Kelola tugas kuliah, project tim, dan jadwal akademismu dengan dashboard yang terintegrasi.',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      icon: '💼',
      title: 'Pengembangan Bisnis',
      description: 'Bangun personal branding dan tracking kemajuan usahamu dari satu platform yang efisien.',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Solusi Kilat',
      description: 'Akses cepat ke berbagai tools optimasi digital untuk meningkatkan produktivitas harianmu.',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div id="features" className="max-w-6xl mx-auto mt-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800">Layanan Utama BrandKu</h2>
        <p className="text-gray-500 text-sm mt-2">Pilih ekosistem yang sesuai dengan kebutuhan transformasimu</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-12 h-12 ${item.bgColor} ${item.textColor} rounded-lg flex items-center justify-center text-xl mb-4`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}