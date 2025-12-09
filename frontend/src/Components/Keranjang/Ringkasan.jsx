import React from "react";
import { useNavigate } from "react-router-dom";

const RingkasanPesanan = () => {
  const navigation = useNavigate();

  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-md 
        p-6 
        w-full
        max-w-[380px] 
        mx-auto 
        md:mx-0
        md:mr-15 
        text-left
      "
    >
      <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>

      {/* Subtotal */}
      <div className="flex justify-between text-gray-600 mb-2">
        <span>Subtotal :</span>
        <span>Rp 92.000</span>
      </div>

      {/* Harga Ongkir (dicoret) */}
      <div className="flex justify-between text-gray-600 mb-4">
        <span>Harga Ongkir :</span>
        <span className="line-through text-gray-400">Rp 10.000</span>
      </div>

      {/* Kode Promo */}
      <div className="mb-4">
        <label
          htmlFor="promo"
          className="block text-gray-700 font-medium mb-1"
        >
          Kode Promo
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Masukkan Kode Promo..."
          className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>

      {/* Pesanan Total */}
      <div className="flex justify-between items-center mb-5">
        <span className="font-medium text-gray-800">Pesanan Total :</span>
        <span className="font-semibold text-lg text-black border-b border-gray-400 pb-0.5">
          Rp 102.000
        </span>
      </div>

      {/* Tombol Lanjutkan */}
      <button
        onClick={() => navigation("/compliteOrder")}
        className="
          w-full 
          bg-green-700 
          hover:bg-green-800 
          text-white 
          text-sm 
          font-medium 
          py-2 
          rounded-full 
          transition-all 
          duration-200
        "
      >
        Lanjutkan ke Pembayaran
      </button>
    </div>
  );
};

export default RingkasanPesanan;
