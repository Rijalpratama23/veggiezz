import React from 'react';
import Header from '../../Components/Header';
import Head from '../../Components/Setting/Head';
import SideBar from '../../Components/Setting/SideBar';
import Content from '../../Components/Setting/Content';

const SettingPembeli = () => {
  // DATA UNTUK PEMBELI (5 ITEM)
  const menuPembeli = [
    { judul: "Informasi Akun", icon: <i className="fa-solid fa-user text-3xl"></i> },
    { judul: "Alamat Pengiriman", icon: <i className="fa-solid fa-house text-3xl"></i> },
    { judul: "Metode Pembayaran", icon: <i className="fa-solid fa-credit-card text-3xl"></i> },
    { judul: "Notifikasi", icon: <i className="fa-solid fa-bell text-3xl"></i> },
    { judul: "Kemanan & Privasi", icon: <i className="fa-solid fa-shield text-3xl"></i> },
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
            <Content nama="John Doe" email="johndoe@gmail.com"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingPembeli;