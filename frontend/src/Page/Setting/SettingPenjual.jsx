import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios untuk fitur delete (opsional)
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../../Components/Header';
import Head from '../../Components/Setting/Head';
import SideBar from '../../Components/Setting/SideBar';
import Content from '../../Components/Setting/Content';

const SettingPenjual = () => {
  const navigate = useNavigate();

  // 1. STATE PROFILE
  const [profile, setProfile] = useState({
    id: '', // Tambahkan ID untuk keperluan hapus akun
    nama: 'Loading...',
    email: 'Loading...',
  });

  // 2. STATE UNTUK MODAL (POPUP)
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Modal Keluar
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal Hapus Akun

  // 3. AMBIL DATA DARI LOCAL STORAGE
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setProfile({
        id: userData.id,
        nama: userData.nama,
        email: userData.email,
      });
    } else {
      setProfile({ nama: 'Tamu', email: 'Belum Login' });
    }
  }, []);

  // 4. FUNGSI LOGOUT & DELETE
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setShowLogoutModal(false);
    navigate('/'); // Kembali ke Login
  };

  const deleteAccount = async () => {
    try {
      // Pastikan endpoint API sesuai dengan backend Anda
      await axios.delete(`http://localhost:5000/users/${profile.id}`);
      setShowDeleteModal(false);
      alert('Akun Toko berhasil dihapus.');
      handleLogout();
    } catch (error) {
      console.error(error);
      alert('Gagal menghapus akun.');
      setShowDeleteModal(false);
    }
  };

  // 5. MENU KHUSUS PENJUAL
  const menuPenjual = [
    { judul: 'Informasi Akun', icon: <i className="fa-solid fa-user text-3xl"></i> },
    { judul: 'Daftar Produk', icon: <i className="fa-solid fa-store text-3xl"></i> },
    { judul: 'Tambah Produk Baru', icon: <i className="fa-solid fa-circle-plus text-3xl"></i> },
    { judul: 'Riwayat Penjualan', icon: <i className="fa-solid fa-chart-line text-3xl"></i> },
    { judul: 'Pesan Masuk', icon: <i className="fa-solid fa-envelope text-3xl"></i> },
    { judul: 'Rating dan Ulasan', icon: <i className="fa-solid fa-star text-3xl"></i> },

    // Tombol Hapus Akun
    {
      judul: 'Hapus Akun',
      icon: <i className="fa-solid fa-trash text-3xl text-red-500"></i>,
      isDelete: true,
      onClick: () => setShowDeleteModal(true), // Buka Modal Delete
    },

    // Tombol Keluar (BARU)
    {
      judul: 'Keluar',
      icon: <i className="fa-solid fa-right-from-bracket text-3xl text-red-500"></i>,
      isDelete: true, // Pakai style merah
      onClick: () => setShowLogoutModal(true), // Buka Modal Logout
    },
  ];

  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className="pt-15 pb-5 md:pt-30">
        {/* Judul Halaman */}
        <div className="text-center mb-8">
          <h1 className="font-acme text-3xl md:text-4xl text-gray-800">DASHBOARD PENJUAL</h1>
          <p className="text-gray-500 font-actor">Kelola Toko dan Produk Anda</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 m-5 md:mx-18">
          {/* Sidebar Menu Penjual */}
          <div className="w-full md:w-auto">
            <SideBar dataMenu={menuPenjual} />
          </div>

          {/* Content Profile */}
          <div className="w-full">
            <Content
              nama={profile.nama}
              email={profile.email}
              cardType={
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-green-400 mb-4 inline-block">
                  <i className="fa-solid fa-check-circle mr-1"></i> Akun Penjual Terverifikasi
                </span>
              }
            />
          </div>
        </div>
      </div>

      {/* --- MODAL 1: KONFIRMASI HAPUS AKUN --- */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
            <i className="fa-solid fa-triangle-exclamation text-5xl text-red-500 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Hapus Toko?</h3>
            <p className="text-gray-600 mb-6">Semua data produk dan penjualan akan hilang permanen.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setShowDeleteModal(false)} className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
                Batal
              </button>
              <button onClick={deleteAccount} className="px-6 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition shadow-md">
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: KONFIRMASI KELUAR (LOGOUT) --- */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
            {/* Icon Pintu Keluar */}
            <i className="fa-solid fa-right-from-bracket text-5xl text-red-500 mb-4"></i>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">Keluar Toko?</h3>
            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin keluar dari akun Penjual?</p>

            <div className="flex justify-center gap-4">
              {/* Tombol Batal */}
              <button onClick={() => setShowLogoutModal(false)} className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
                Batal
              </button>

              {/* Tombol Ya (Logout) */}
              <button onClick={handleLogout} className="px-6 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition shadow-md">
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingPenjual;
