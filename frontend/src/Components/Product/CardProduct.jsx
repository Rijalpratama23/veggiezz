import React from 'react';
import { useNavigate } from 'react-router-dom';
import wortel2 from "../../assets/wortel2.png";
import kentang from "../../assets/kentang.png";
import lobak from "../../assets/lobak.png";
import bawangMerah from "../../assets/bawangMerah.png";
import singkong from "../../assets/singkong.png";
import bitMerah from "../../assets/bitMerah.png";
import { ShoppingCart, Plus } from "lucide-react";



const products = [
  { name: "Wortel", price: "Rp. 10.000/kg", image: wortel2 },
  { name: "Kentang", price: "Rp. 20.000/kg", image: kentang },
  { name: "Lobak", price: "Rp. 34.000/kg", image: lobak },
  { name: "Bawang Merah", price: "Rp. 12.000/250gr", image: bawangMerah },
  { name: "Singkong", price: "Rp. 15.000/kg", image: singkong },
  { name: "Bit Merah", price: "Rp. 33.000/kg", image: bitMerah },
];

const CardProduct = () => {
  return (
    <main className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {products.map((item, index) => (
        <div key={index} className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300">
          {/* Bagian Atas - Gambar */}
          <div className="bg-[#e8ecff] p-4 sm:p-5 flex justify-center items-center h-32 sm:h-40 md:h-48">
            <img src={item.image} alt={item.name} className="object-contain h-24 sm:h-28 md:h-36 transition-transform duration-300 hover:scale-105" />
          </div>

          {/* Bagian Bawah - Info dan Tombol */}
          <div className="bg-white px-4 sm:px-5 py-3 flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">{item.price}</p>

            {/* Tombol */}
            <div className="flex justify-end gap-2 mt-auto">
              <button className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all">
                <ShoppingCart size={16} className="sm:size-[18px]" />
              </button>
              <button className="bg-green-700 hover:bg-green-800 text-white p-1 sm:p-1.5 rounded-md transition-all">
                <Plus size={16} className="sm:size-[18px]" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default CardProduct;
