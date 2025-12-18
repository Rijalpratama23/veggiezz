import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Head from '../../Components/Setting/Head';
import SideBar from '../../Components/Setting/SideBar';
import Content from '../../Components/Setting/Content'; // Profil
import DaftarProduct from '../../Page/DaftarProduct/DaftarProduct'; // Tabel Produk (Pastikan path import benar)
import FormAddProduct from '../../Components/Setting/FormProduct'; // Form Tambah (Pastikan path import benar)

const SettingPenjual = () => {
  // 1. STATE PROFILE
  const [profile, setProfile] = useState({
    nama: 'Loading...',
    email: 'Loading...',
  });

  // 2. STATE NAVIGASI HALAMAN (Default: 'profile')
  // Pilihan: 'profile', 'list-produk', 'add-produk'
  const [activeView, setActiveView] = useState('profile');

  // 3. AMBIL DATA USER
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setProfile({
        nama: userData.nama,
        email: userData.email,
      });
    }
  }, []);

  // 4. MENU SIDEBAR (Dengan onClick untuk ganti halaman)
  const menuPenjual = [
    {
      judul: 'Informasi Akun',
      icon: <i className="fa-solid fa-user text-3xl"></i>,
      onClick: () => setActiveView('profile'),
    },
    {
      judul: 'Daftar Produk',
      icon: <i className="fa-solid fa-store text-3xl"></i>,
      onClick: () => setActiveView('list-produk'),
    },
    {
      judul: 'Tambah Produk Baru',
      icon: <i className="fa-solid fa-circle-plus text-3xl"></i>,
      onClick: () => setActiveView('add-produk'),
    },
    { judul: 'Riwayat Penjualan', icon: <i className="fa-solid fa-chart-line text-3xl"></i> },
    { judul: 'Pesan Masuk', icon: <i className="fa-solid fa-envelope text-3xl"></i> },
    { judul: 'Rating dan Ulasan', icon: <i className="fa-solid fa-star text-3xl"></i> },
    { judul: 'Hapus Akun', icon: <i className="fa-solid fa-trash text-3xl text-red-500"></i>, isDelete: true },
  ];

  // 5. RENDER KONTEN BERDASARKAN activeView
  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return (
          <Content
            nama={profile.nama}
            email={profile.email}
            cardType={
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-green-400 mb-4 inline-block">
                <i className="fa-solid fa-check-circle mr-1"></i> Akun Penjual Terverifikasi
              </span>
            }
          />
        );
      case 'list-produk':
        return <DaftarProduct onAddClick={() => setActiveView('add-produk')} />;
      case 'add-produk':
        return <FormAddProduct onCancel={() => setActiveView('list-produk')} onSuccess={() => setActiveView('list-produk')} />;
      default:
        return <div>Halaman tidak ditemukan</div>;
    }
  };

  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className="pt-15 pb-5 md:pt-30">
        <div className="text-center mb-8">
          <h1 className="font-acme text-3xl md:text-4xl text-gray-800">DASHBOARD PENJUAL</h1>
          <p className="text-gray-500 font-actor">Kelola Toko dan Produk Anda</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 m-5 md:mx-18">
          {/* Sidebar */}
          <div className="w-full md:w-auto">
            <SideBar dataMenu={menuPenjual} />
          </div>

          {/* Content Dinamis */}
          <div className="w-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingPenjual;
