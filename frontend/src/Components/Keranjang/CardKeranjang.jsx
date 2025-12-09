import React, { useState } from 'react';

const CardKeranjang = ({ image, name, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div>
      {/* CARD PRODUK */}
      <div
        className="
    flex 
    flex-col 
    sm:flex-row 
    items-start 
    sm:items-center 
    justify-between 
    rounded-2xl 
    shadow-md 
    p-4 
    w-full 
    mt-5 
    md:mt-8 
    max-w-md 
    gap-3
  "
      >
        {/* Gambar */}
        <img src={image} alt={name} className="w-20 h-20 object-cover rounded-xl flex-shrink-0" />

        {/* Info Produk */}
        <div className="flex-1 sm:ml-4">
          <h3 className="text-gray-900 font-actor font-medium text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{price}</p>
        </div>

        {/* Tombol Trash + Quantity */}
        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
          {/* Ikon Hapus */}
          <button className="text-red-500 hover:text-red-600 sm:pb-3">
            <i className="fa-solid fa-trash text-xl"></i>
          </button>

          {/* Kontrol Jumlah */}
          <div
            className="
        flex 
        items-center 
        space-x-2 
        flex-shrink-0
      "
          >
            <button
              onClick={decrease}
              className="
          border 
          border-gray-400 
          rounded-full 
          w-7 h-7 
          sm:w-8 sm:h-8
          flex 
          items-center 
          justify-center 
          text-gray-700 
          hover:bg-gray-100
          text-sm sm:text-base
        "
            >
              −
            </button>

            <span className="font-medium text-sm sm:text-base">{quantity}</span>

            <button
              onClick={increase}
              className="
          border 
          border-gray-400 
          rounded-full 
          w-7 h-7 
          sm:w-8 sm:h-8
          flex 
          items-center 
          justify-center 
          text-gray-700 
          hover:bg-gray-100
          text-sm sm:text-base
        "
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* END CARD */}
    </div>
  );
};

export default CardKeranjang;
