import React from 'react';
import HumanIcon from '../../assets/HumanIcon.avif';

const Content = ({ nama, email, cardType }) => {
  return (
    // 1. Container Utama: Ganti w-200 jadi w-full agar muat di HP
    <div className="bg-white rounded-2xl w-full shadow-sm h-fit">
      
      <div className="p-4 md:p-8">
        
        {/* Badge Supplier (Opsional jika ada) */}
        {cardType}

        {/* --- Header Profile Section --- */}
        <div className="mt-4">
          {/* Mobile: Susun bawah (col), Desktop: Samping (row) */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Foto & Nama */}
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="flex rounded-full border-2 p-1 border-gray-100">
                {/* Image responsive: w-24 di HP, w-30 di Desktop */}
                <img 
                  src={HumanIcon} 
                  alt="picture" 
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full" 
                />
              </div>
              <div className="">
                <h3 className="font-actor text-xl md:text-2xl font-medium text-gray-800">{nama}</h3>
                <p className="text-gray-500 text-sm md:text-base">{email}</p>
              </div>
            </div>

            {/* Tombol Ubah Foto: Full width di HP, Auto di Desktop */}
            <button className="w-full md:w-auto py-2 px-6 primary text-white font-semibold rounded-2xl hover:opacity-90 transition-all cursor-pointer shadow-md">
              Ubah Foto
            </button>
          </div>
        </div>

        {/* --- Form Section --- */}
        <div className="flex justify-center mt-8">
          {/* Form Container: Ganti w-120 jadi w-full dengan batas max-w-lg */}
          <div className="w-full max-w-lg">
            
            <h2 className="text-2xl font-actor mb-6 text-center md:text-left font-semibold text-gray-700">
              Informasi Akun
            </h2>
            
            <div className="flex flex-col gap-4">
              {/* Input Nama */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="text" 
                  placeholder="Nama" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                />
              </div>

              {/* Input Email */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                />
              </div>

              {/* Input Password */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="password" 
                  placeholder="Kata Sandi" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                />
              </div>

              {/* Input No HP */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="number" 
                  placeholder="No. Hp" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                />
              </div>
            </div>

            {/* Tombol Simpan */}
            <div className="mt-8 primary rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <button className="w-full py-3 px-5 font-actor text-white font-semibold rounded-2xl hover:bg-white/10 cursor-pointer">
                Simpan Perubahan
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Content;