import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import logoLogin from '../../assets/logoLogin.png';
import gambarLogin from '../../assets/gambarLogin.png';

const Content = () => {
  const navigate = useNavigate();

  // --- STATE ---
  const [isRegister, setIsRegister] = useState(false); // False = Login, True = Register
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(''); // Untuk menampung pesan error dari backend

  // State untuk Input Form
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  // --- FUNGSI AUTH (LOGIN & REGISTER) ---
  const handleAuth = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setMsg(''); // Reset pesan error

    try {
      if (isRegister) {
        // --- LOGIKA REGISTER ---
        await axios.post('http://localhost:5000/users', {
          nama: nama,
          email: email,
          password: password,
          confPassword: confPassword,
          telepon: '08123456789', // Default dulu atau tambah input baru
          alamat: 'Alamat default', // Default dulu
        });

        // Jika sukses register, pindah ke mode login
        setIsRegister(false);
        setMsg('Registrasi Berhasil! Silakan Login.');
        // Reset form password
        setPassword('');
        setConfPassword('');
      } else {
        // --- LOGIKA LOGIN ---
        const response = await axios.post('http://localhost:5000/login', {
          email: email,
          password: password,
        });

        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Simpan token (opsional, biar user tetap login kalau direfresh)
        // localStorage.setItem('token', response.data.accessToken);

        // Pindah ke Home
        navigate('/home');
      }
    } catch (error) {
      if (error.response) {
        // Tampilkan pesan error dari backend (misal: "Password Salah")
        setMsg(error.response.data.msg);
      } else {
        setMsg('Tidak dapat terhubung ke server');
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-[900px] overflow-hidden">
      {/* --- BAGIAN KIRI (FORM) --- */}
      <div className="flex-1 p-8">
        {/* Logo */}
        <div className="flex items-center mb-6">
          <img src={logoLogin} alt="Logo" className="w-30 h-30 object-contain" />
          <h1 className="text-3xl font-bold color-primary font-lemon ml-2">VeggieZ</h1>
        </div>

        {/* Judul (Berubah sesuai mode) */}
        <h2 className="text-2xl font-bold mb-2 text-gray-900 font-primary">{isRegister ? 'Daftar Akun Baru' : 'Login ke Akun VeggieZ'}</h2>

        {/* Pesan Error / Sukses */}
        {msg && <p className="text-center text-red-500 bg-red-100 p-2 rounded mb-4 text-sm">{msg}</p>}

        <form onSubmit={handleAuth} className="space-y-4">
          {/* Input NAMA (Hanya muncul saat Register) */}
          {isRegister && (
            <div className="border rounded-2xl px-4 py-2 flex items-center">
              <input type="text" placeholder="Nama Lengkap" className="w-full outline-none text-gray-700 placeholder-gray-400" value={nama} onChange={(e) => setNama(e.target.value)} required />
            </div>
          )}

          {/* Input EMAIL */}
          <div className="border rounded-2xl px-4 py-2 flex items-center">
            <input type="email" placeholder="Email" className="w-full outline-none text-gray-700 placeholder-gray-400" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          {/* Input PASSWORD */}
          <div className="border rounded-2xl px-4 py-2 flex items-center justify-between">
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-full outline-none text-gray-700 placeholder-gray-400" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-gray-500 hover:text-green-600 ml-2">
              <i className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}></i>
            </span>
          </div>

          {/* Input CONFIRM PASSWORD (Hanya muncul saat Register) */}
          {isRegister && (
            <div className="border rounded-2xl px-4 py-2 flex items-center justify-between">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Ulangi Password"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                required
              />
            </div>
          )}

          {/* Checkbox & Lupa Password (Hanya di Login) */}
          {!isRegister && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 accent-green-600" />
                <span>Ingat Saya</span>
              </label>
              <a href="#" className="color-primary hover:underline">
                Lupa Password?
              </a>
            </div>
          )}

          {/* Tombol Utama */}
          <Button type="submit" title={isRegister ? 'Daftar Sekarang' : 'Login'} />

          {/* Toggle Login/Register */}
          <div className="text-center mt-4 text-sm text-gray-600">
            {isRegister ? 'Sudah punya akun? ' : 'Belum punya akun? '}
            <span
              onClick={() => {
                setIsRegister(!isRegister);
                setMsg(''); // Hapus pesan error saat pindah mode
              }}
              className="text-green-600 font-bold cursor-pointer hover:underline"
            >
              {isRegister ? 'Login di sini' : 'Daftar di sini'}
            </span>
          </div>
        </form>
      </div>

      {/* --- BAGIAN KANAN (GAMBAR) --- */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-6 border-l border-gray-100">
        <img src={gambarLogin} alt="Sayur" className="w-[357px] h-auto mb-2" />
        <p className="text-green-600 text-center italic font-anime text-xl">{isRegister ? 'Join the Fresh Revolution!' : 'Eat Fresh, Live Green with VeggieZ'}</p>
      </div>
    </div>
  );
};

export default Content;
