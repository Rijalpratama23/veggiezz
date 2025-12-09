import React from 'react';
import { useNavigate } from 'react-router-dom';
import sawiImg from '../../assets/sawiImg.png';
import wortel from '../../assets/wortel.png';
import tomat from '../../assets/tomat.png';
import terong from '../../assets/terong.png';

const PopularProduct = () => {
  const popularVegetables = [
    {
      id: 1,
      name: 'Sawi Hijau',
      price: 'Rp. 29.800/kg',
      image: sawiImg,
    },
    {
      id: 2,
      name: 'Wortel',
      price: 'Rp. 18.000/kg',
      image: wortel,
    },
    {
      id: 3,
      name: 'Tomat',
      price: 'Rp. 10.000/kg',
      image: tomat,
    },
    {
      id: 4,
      name: 'Terong Ungu',
      price: 'Rp. 7.000/kg',
      image: terong,
    },
  ];
  return (
    <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-5 md:pb-15 mb-10 rounded-b-2xl bg-white">
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-actor mb-6 text-center md:text-left">Sayur yang sedang Populer</h2>

      <div className="flex items-center justify-center md:justify-between gap-4">
        {/* Tombol kiri (desktop) */}
        <button className="hidden md:block bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition">
          <a href="">
            {' '}
            <i class="fa-solid fa-angle-left"></i>
          </a>
        </button>

        {/* ✅ Grid produk */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          {popularVegetables.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-green-50 border border-gray-200 ">
              <div className="bg-gradient-to-b from-[#3A803E] to-[#D1DBD1] p-4 h-28 sm:h-36 flex justify-center items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md" />
              </div>
              <div className="text-center py-3 sm:py-4">
                <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                <p className="text-xs sm:text-sm text-green-700 italic">({item.price})</p>
                <button className="mt-3 primary hover:bg-green-800 text-white px-4 sm:px-5 py-1 sm:py-2 rounded-md text-xs sm:text-sm transition-all duration-300">
                  <a href="">ADD +</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol kanan (desktop) */}
        <button className="hidden md:block bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition">
          <a href="">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </button>
      </div>
    </section>
  );
};

export default PopularProduct;
