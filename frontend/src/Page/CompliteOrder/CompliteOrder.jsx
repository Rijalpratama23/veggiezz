import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import wortel from "../../assets/wortel.png";
import sawiImg from "../../assets/sawiImg.png";
import tomat from "../../assets/tomat.png";

const CompliteOrder = () => {
  // INTERAKTIFITAS TOGGLE
  const [pengiriman, setPengiriman] = useState("cepat"); // cepat | standard
  const [bayar, setBayar] = useState("transfer"); // transfer | cod

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#C8E6C9]">
      <Header />

      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-30">

        {/* ================= LEFT CARD ================= */}
        <div className="bg-white w-full md:w-[500px] rounded-2xl p-6 shadow-md">
          <h2 className="text-3xl font-actor font-semibold mb-4">
            Pelanggan & Informasi Pengiriman
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-3 mb-5">
            <input
              type="text"
              placeholder="Nama"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Alamat Penerima"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </form>

          {/* Opsi Pengiriman */}
          <h2 className="font-actor text-2xl font-semibold mb-2">Opsi Pengiriman</h2>

          <div className="space-y-3 mb-5">
            {/* Pengiriman Cepat */}
            <div
              onClick={() => setPengiriman("cepat")}
              className="flex justify-between items-center bg-gray-100 py-2 px-3 rounded-lg cursor-pointer"
            >
              <span className="text-gray-700 font-actor">Pengiriman Cepat</span>

              <i
                className={`fa-solid ${
                  pengiriman === "cepat"
                    ? "fa-toggle-on text-green-600"
                    : "fa-toggle-off text-gray-400"
                } text-3xl`}
              ></i>
            </div>

            {/* Pengiriman Standard */}
            <div
              onClick={() => setPengiriman("standard")}
              className="flex justify-between items-center bg-gray-100 py-2 px-3 rounded-lg cursor-pointer"
            >
              <span className="text-gray-700 font-actor">Pengiriman Standard</span>

              <i
                className={`fa-solid ${
                  pengiriman === "standard"
                    ? "fa-toggle-on text-green-600"
                    : "fa-toggle-off text-gray-400"
                } text-3xl`}
              ></i>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <h2 className="font-actor text-2xl font-semibold mb-2">Metode Pembayaran</h2>

          <div className="space-y-3">
            {/* Transfer M-Banking */}
            <div
              onClick={() => setBayar("transfer")}
              className="flex justify-between items-center bg-gray-100 py-2 px-3 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-credit-card text-xl"></i>
                <p className="font-actor">Transfer M-banking</p>
              </div>

              <i
                className={`fa-solid ${
                  bayar === "transfer"
                    ? "fa-toggle-on text-green-600"
                    : "fa-toggle-off text-gray-400"
                } text-3xl`}
              ></i>
            </div>

            {/* COD */}
            <div
              onClick={() => setBayar("cod")}
              className="flex justify-between items-center bg-gray-100 py-2 px-3 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-sack-dollar text-xl"></i>
                <p className="font-actor">Bayar Ditempat</p>
              </div>

              <i
                className={`fa-solid ${
                  bayar === "cod"
                    ? "fa-toggle-on text-green-600"
                    : "fa-toggle-off text-gray-400"
                } text-3xl`}
              ></i>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="bg-white w-full md:w-[400px] rounded-2xl p-6 shadow-md">
          <h2 className="font-semibold text-center mb-6 font-actor text-3xl">
            Ringkasan Pesanan
          </h2>

          {/* Item 1 */}
          <div className="flex items-center mb-5">
            <img src={wortel} className="w-20" />
            <div className="ml-4">
              <p className="font-semibold text-base">Wortel Segar</p>
              <p className="text-gray-700 text-sm">X2</p>
            </div>
            <div className="ml-auto font-semibold text-base">Rp 24.000</div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center mb-5">
            <img src={sawiImg} className="w-20" />
            <div className="ml-4">
              <p className="font-semibold text-base">Sawi Hijau</p>
              <p className="text-gray-700 text-sm">X2</p>
            </div>
            <div className="ml-auto font-semibold text-base">Rp 58.000</div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center mb-8">
            <img src={tomat} className="w-20" />
            <div className="ml-4">
              <p className="font-semibold text-base">Tomat</p>
              <p className="text-gray-700 text-sm">X1</p>
            </div>
            <div className="ml-auto font-semibold text-base">Rp 10.000</div>
          </div>

          {/* Button */}
          <button onClick={() => navigate("/confirmFaid")} className="bg-green-700 hover:bg-green-800 text-white w-full py-2 rounded-full text-sm transition-all font-actor font-medium md:mt-30 cursor-pointer">
            Konfirmasi Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompliteOrder;
