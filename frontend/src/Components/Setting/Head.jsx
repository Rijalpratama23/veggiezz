import React from 'react';
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();

  return (
    // Container Utama: Relative untuk patokan posisi absolute di desktop
    <div className="relative mt-5 md:mt-0 w-full flex flex-col md:flex-row items-center md:justify-center py-4 mb-6">
      
      {/* Bagian Tombol */}
      {/* Mobile: W-full agar bisa align-start. Desktop: Absolute di kiri */}
      <div className="w-full md:w-auto md:absolute md:left-0 z-10 flex justify-start px-5 md:px-0">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition-all hover:bg-green-50 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left text-green-700 font-bold group-hover:-translate-x-1 transition-transform"></i>
          <span className="text-green-700 font-semibold font-actor text-sm md:text-lg">
            Kembali ke Beranda
          </span>
        </button>
      </div>

      {/* Bagian Judul */}
      {/* Mobile: Margin top agar tidak nempel tombol. Desktop: Margin 0 */}
      <div className="mt-4 md:mt-0 text-center">
        <h2 className="font-actor font-bold text-2xl md:text-3xl text-gray-800 tracking-wide">
          PENGATURAN
        </h2>
      </div>

    </div>
  );
};

export default Head;