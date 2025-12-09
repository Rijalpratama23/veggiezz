import React from 'react';
import { useNavigate } from 'react-router-dom';
import sayurBunga from '../../assets/sayurBunga.png';
import sayurDaun from '../../assets/sayurDaun.png';
import tomato from '../../assets/tomato.png';
import ubi from '../../assets/ubi.png';

const Categori = () => {
  const categories = [
    { name: 'Sayur Daun', icon: sayurDaun },
    { name: 'Sayur Buah', icon: tomato },
    { name: 'Sayur Umbi', icon: ubi },
    { name: 'Sayur Bunga', icon: sayurBunga },
  ];
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto bg-white rounded-t-xl">
      <h2 className="text-lg sm:text-xl md:text-2xl font-actor font-bold mb-6 text-green-800 text-center md:text-left">Pilih Kategori Sayuran Pilihan Anda</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-3 sm:gap-4 md:gap-8 justify-center flex-wrap">
        {categories.map((cat, index) => (
          <button>
            <div
              key={index}
              className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 bg-gray-100 hover:bg-green-50 border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-green-800 font-medium shadow-sm transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <img src={cat.icon} alt={cat.name} className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-xs sm:text-sm md:text-base">{cat.name}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categori;
