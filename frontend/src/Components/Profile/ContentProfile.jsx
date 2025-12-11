import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardUser from '../../Components/Profile/CardUser';

const ContentProfile = () => {
  const navigate = useNavigate();

  const userLocal = JSON.parse(localStorage.getItem('user'));

  const [showModal, setShowModal] = useState(false);

  // Fungsi set tombol
  const handlePenjualClick = () => {
    // Cek apakah role masih pembeli
    if (userLocal && userLocal.role === 'pembeli') {
      setShowModal(true);
    } else {
      navigate('/settingPenjual');
    }
  };

  const confirmUpgrade = async () => {
    if (!userLocal || !userLocal.id) return;

    try {
      // 1. KOREKSI URL: Gunakan 127.0.0.1 agar koneksi lancar
      await axios.patch(`http://127.0.0.1:5000/users/${userLocal.id}`, {
        role: 'penjual', // Pastikan database UserModels Anda sudah support string ini
      });

      // 2. Update LocalStorage
      const updatedUser = { ...userLocal, role: 'penjual' };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      // 3. Tutup Modal
      setShowModal(false);
      alert('Selamat! Akun Anda kini menjadi Akun Penjual.');

      // 4. Pindah Halaman
      navigate('/settingPenjual');

      // 5. KOREKSI PENTING: Reload halaman agar Header membaca role baru
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('Gagal mengupdate akun. Cek koneksi server.');
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen secondary pt-10 md:pt-20">
      <div className="poster m-5 md:m-10 rounded-2xl p-10 md:p-15">
        <div className="text-center">
          <h1 className="font-medium text-2xl md:text-4xl font-acme">PROFILE</h1>
          <h2 className="font-actor text-xl md:text-2xl">Kelola Detail Akun Anda</h2>
        </div>
        <div className="md:flex justify-center gap-20 md:gap-60 mt-10 md:mt-20">
          <CardUser title="Profile Penjual" target="/settingPenjual" onCustomClick={handlePenjualClick} icon={<i className="fa-solid fa-user-lock color-primary text-4xl md:text-9xl m-5"></i>} />

          {/* KARTU PEMBELI (Normal) */}
          <CardUser title="Profile Pembeli" target="/settingPembeli" icon={<i className="fa-solid fa-user-check color-primary text-4xl md:text-9xl m-5"></i>} />
        </div>
      </div>

      {/* --- MODAL KONFIRMASI UPGRADE --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center border-t-8 border-green-600">
            {/* Icon Gembok/Shield */}
            <div className="mb-4 text-green-600">
              <i className="fa-solid fa-shield-halved text-6xl"></i>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">Konfirmasi Supplier</h3>
            <p className="text-gray-600 mb-6">Konfirmasi bahwa anda ingin mengaktifkan fitur Supplier/Penjual?</p>

            <div className="flex justify-center gap-4">
              {/* Tombol Ya */}
              <button onClick={confirmUpgrade} className="px-8 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md cursor-pointer">
                Ya
              </button>

              {/* Tombol Tidak */}
              <button onClick={() => setShowModal(false)} className="px-8 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition shadow-md cursor-pointer">
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentProfile;
