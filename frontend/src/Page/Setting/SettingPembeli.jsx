import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import Head from '../../Components/Setting/Head';
import SideBar from '../../Components/Setting/SideBar';
import Content from '../../Components/Setting/Content';

const SettingPembeli = () => {
  const navigate = useNavigate();
  // penyimpanan sementara (state)
  const [profile, setProfile] = useState({
    nama: 'Loading...',
    email: 'Loading...',
  });

  // state untuk Modal Konfirmasi
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // mengambil data dari localstorage
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

  // fungsi Logout (dipanggil setelah akun dihapus!)
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  // fungsi hapus akun pada saat diklik "ya" atau "tidak"
  const deleteAccount = async () => {
    try {
      // memanggil API dellete backend
      await axios.delete(`http://localhost:5000/users/${profile.id}`);

      // jika berhasil, tutup modal dan logout
      setShowModal(false);
      alert('Akun berhasil dihapus🗑️!');
      handleLogout();
    } catch (error) {
      console.error(error);
      alert('Gagal menghapus akun. Coba lagi nanti.');
      setShowModal(false);
    }
  };

  // DATA UNTUK PEMBELI (5 ITEM)
  const menuPembeli = [
    { judul: 'Informasi Akun', icon: <i className="fa-solid fa-user text-3xl"></i> },
    { judul: 'Alamat Pengiriman', icon: <i className="fa-solid fa-house text-3xl"></i> },
    { judul: 'Metode Pembayaran', icon: <i className="fa-solid fa-credit-card text-3xl"></i> },
    { judul: 'Notifikasi', icon: <i className="fa-solid fa-bell text-3xl"></i> },
    { judul: 'Kemanan & Privasi', icon: <i className="fa-solid fa-shield text-3xl"></i> },
    {
      judul: 'Hapus Akun',
      icon: <i className="fa-solid fa-trash text-3xl text-red-500"></i>,
      isDelete: true, // Penanda khusus
      onClick: () => setShowModal(true), // Saat diklik, buka Modal
    },
    // Tombol Keluar (BARU)
    {
      judul: 'Keluar',
      icon: <i className="fa-solid fa-right-from-bracket text-3xl text-red-500"></i>, // Icon Pintu
      isDelete: true, // Pakai style merah agar seragam dengan tombol aksi "bahaya/keluar"
      onClick: () => setShowLogoutModal(true), // Buka modal logout
    },
  ];

  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className="pt-15 pb-5 md:pt-30">
        <Head />

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 m-5 md:mx-18">
          {/* Wrapper Sidebar: Full width di HP, Auto di Desktop */}
          <div className="w-full md:w-auto">
            <SideBar dataMenu={menuPembeli} />
          </div>

          {/* Wrapper Content: Full width mengisi sisa ruang */}
          <div className="w-full">
            <Content nama={profile.nama} email={profile.email} />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
            {/* Icon Peringatan */}
            <i className="fa-solid fa-triangle-exclamation text-5xl text-red-500 mb-4"></i>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">Hapus Akun?</h3>
            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin menghapus akun ini secara permanen? Tindakan ini tidak dapat dibatalkan.</p>

            <div className="flex justify-center gap-4">
              {/* Tombol Batal */}
              <button onClick={() => setShowModal(false)} className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
                Batal
              </button>

              {/* Tombol Ya, Hapus */}
              <button onClick={deleteAccount} className="px-6 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition shadow-md">
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
            {/* Icon Pintu Keluar */}
            <i className="fa-solid fa-right-from-bracket text-5xl text-red-500 mb-4"></i>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ingin Keluar?</h3>
            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin keluar dari aplikasi VeggieZ?</p>

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

export default SettingPembeli;
