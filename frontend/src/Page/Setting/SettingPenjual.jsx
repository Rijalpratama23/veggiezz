import React from 'react';
import Header from '../../Components/Header';
import Head from '../../Components/Setting/Head';
import SideBar from '../../Components/Setting/SideBar';
import Content from '../../Components/Setting/Content';

const SettingPenjual = () => {
  // DATA UNTUK PENJUAL (6 ITEM) - Error syntax sebelumnya sudah diperbaiki di sini
  const menuPenjual = [
    { judul: "Informasi Akun", icon: <i className="fa-solid fa-user text-3xl"></i> },
    { judul: "Daftar Product", icon: <i className="fa-solid fa-bag-shopping text-3xl"></i> },
    { judul: "Tambah Product Baru", icon: <i className="fa-solid fa-plus text-3xl"></i> },
    { judul: "Riwayat Penjualan", icon: <i className="fa-solid fa-chart-column text-3xl"></i> },
    { judul: "Pesan masuk", icon: <i className="fa-solid fa-envelope text-3xl"></i> },
    { judul: "Rating & Ulasan", icon: <i className="fa-solid fa-star text-3xl"></i> },
  ];

  return (
   <div className="min-h-screen secondary">
  <Header />
  <div className="pt-15 pb-5 md:pt-30">
    <Head />
    
    {/* PERUBAHAN ADA DI DIV INI */}
    {/* 1. flex flex-col: Mobile jadi kolom (atas-bawah) */}
    {/* 2. md:flex-row: Desktop jadi baris (kiri-kanan) */}
    {/* 3. gap-8: Memberi jarak antara Sidebar dan Content */}
    {/* 4. items-start: Agar tinggi sidebar tidak memaksa mengikuti tinggi konten */}
    <div className="flex flex-col md:flex-row items-start justify-between gap-8 m-5 md:mx-18">
      
      {/* Wrapper agar Sidebar full width di mobile tapi tetap ukurannya pas di desktop */}
      <div className="w-full md:w-auto">
         <SideBar dataMenu={menuPenjual} />
      </div>
      
      {/* Content diberi w-full agar mengisi sisa ruang */}
      <div className="w-full">
        <Content
          nama="Muhammad Sumbul"
          email="sumbulzz17@gmail.com"
          cardType={
            <div className="flex justify-center font-actor font-semibold text-3xl">
              <div className='flex justify-center primary p-3 rounded-2xl text-white shadow-2xl relative top-3'>SUPLIER</div>
            </div>
          }
        />
      </div>

    </div>
  </div>
</div>
  );
};

export default SettingPenjual;