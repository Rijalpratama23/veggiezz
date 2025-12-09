import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmFaid = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#C8E6C9] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-10 relative">
        {/* Daun kiri atas */}
        <img src="/your-leaf-left.png" alt="decoration-left" className="absolute top-0 left-0 w-40 opacity-80" />

        {/* Daun kanan bawah */}
        <img src="/your-leaf-right.png" alt="decoration-right" className="absolute bottom-0 right-0 w-40 opacity-80" />

        {/* Logo */}
        <h1 className="text-4xl text-center mb-4 font-bold text-[#4CAF50]">
          veggie<span className="text-[#81C784]">z</span>
        </h1>

        {/* Judul */}
        <h2 className="text-center text-2xl font-extrabold text-black">Terima Kasih Sudah Berbelanja</h2>

        {/* Subjudul */}
        <p className="text-center text-gray-500 mt-1">Pesanan anda akan segera dikirim</p>

        {/* Icon Check */}
        <div className="flex justify-center mt-10 mb-10">
          <div className="bg-[#4CAF50] w-40 h-40 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button onClick={() => navigate('/home')} className="bg-[#4CAF50] text-white px-8 py-3 rounded-full shadow hover:bg-[#43A047] transition duration-300">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmFaid;
