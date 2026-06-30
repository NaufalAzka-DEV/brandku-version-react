import { useState } from 'react';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const loginUser = async (email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Menyimulasikan waktu tunggu jaringan (delay) selama 1 detik
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Validasi sederhana (Anda bisa sesuaikan kredensialnya jika mau)
      // Di sini kita bebaskan email apa saja, asalkan password-nya minimal 4 karakter
      if (email && password.length >= 4) {
        const mockToken = "QpwL5tke4Pnpja7X4"; // Token simulasi sukses
        
        localStorage.setItem('token', mockToken);
        setSuccess(true);
        return { success: true, token: mockToken };
      } else {
        throw new Error('Password minimal harus 4 karakter!');
      }
    } catch (err) {
      setError(err.message || 'Email atau password salah!');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error, success };
}