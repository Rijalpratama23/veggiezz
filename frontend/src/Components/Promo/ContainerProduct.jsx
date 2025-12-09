import React from 'react';
import kentangPromo from '../../assets/kentangPromo.png'
import kangkungPromo from '../../assets/kangkungPromo.png'
import bayamPromo from '../../assets/bayamPromo.png'
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Sayur Kangkung Segar',
    rating: 5,
    discount: 25,
    oldPrice: 12000,
    newPrice: 7500,
    image: kangkungPromo,
  },
  {
    id: 2,
    name: 'Sayur Bayam',
    rating: 4,
    discount: 10,
    oldPrice: 10000,
    newPrice: 9000,
    image: bayamPromo,
  },
  {
    id: 3,
    name: 'Kentang',
    rating: 4,
    discount: 25,
    oldPrice: 20000,
    newPrice: 15000,
    image: kentangPromo,
  },
];


const ContainerProduct = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 mt-10 mb-20 grid gap-6">
      {products.map((item) => (
        // card iterm
        <div key={item.id} className="bg-white shadow-md rounded-2xl flex flex-col sm:flex-row items-center justify-between p-3 sm:p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-1/2 text-center sm:text-left">
            <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border border-gray-300" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{item.name}</h3>
              <div className="flex justify-center sm:justify-start items-center mt-1 text-yellow-500 text-sm sm:text-base">
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
                <span className="ml-2 text-xs sm:text-sm text-gray-600">{item.rating}/5</span>
              </div>
              <p className="line-through text-xs sm:text-sm text-gray-400 mt-1">Rp. {item.oldPrice.toLocaleString('id-ID')}/ikat</p>
            </div>
          </div>

          {/* Harga & Tombol */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full sm:w-1/2 mt-4 sm:mt-0 gap-2 sm:gap-4 text-center sm:text-right">
            <span className="bg-green-100 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full self-center sm:self-auto">Diskon {item.discount}%</span>
            <div className="flex justify-center sm:justify-end items-center gap-3">
              <p className="text-base sm:text-lg md:text-xl font-bold text-green-700">Rp. {item.newPrice.toLocaleString('id-ID')}</p>
              <button className="bg-green-600 hover:bg-green-700 text-white p-2 sm:p-2.5 rounded-full transition">
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContainerProduct;
