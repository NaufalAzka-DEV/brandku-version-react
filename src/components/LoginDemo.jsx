import React, { useState } from 'react';
import { useLogin } from '../hooks/UseLogin';

export default function LoginDemo({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, loading, error, success } = useLogin();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result) {
      alert('Login Berhasil!');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl relative mx-4 border border-gray-100">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-semibold">
          &times;
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Masuk ke BrandKu</h2>
          <p className="text-sm text-gray-500 mt-1">Demo Login Mahasiswa</p>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2.5 rounded-lg mb-4 text-center">{error}</div>}
        {success && <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm px-4 py-2.5 rounded-lg mb-4 text-center">Login sukses!</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email</label>
            <input 
              type="email" 
              placeholder="contoh@brandku.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors mt-2 disabled:bg-blue-400"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  );
}