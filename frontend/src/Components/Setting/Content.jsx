import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HumanIcon from '../../assets/HumanIcon.avif'; // Pastikan path gambarnya benar sesuai folder Anda

const Content = ({ nama, email, cardType }) => {
  // 1. Ambil ID user dari LocalStorage agar kita tahu akun SIAPA yang sedang diedit
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const idUser = userLocal ? userLocal.id : null;

  // 2. Buat State untuk menampung inputan form
  const [inputNama, setInputNama] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputTelepon, setInputTelepon] = useState("");

  // 3. Saat halaman dibuka, isi form otomatis dengan data Nama & Email yang ada
  useEffect(() => {
    if (nama) setInputNama(nama);
    if (email) setInputEmail(email);
    // Password sengaja dikosongkan (hanya diisi jika ingin mengubah)
    // No. Hp dikosongkan dulu karena data belum ditarik dari props, user bisa input manual
  }, [nama, email]);

  // 4. FUNGSI UPDATE (Jantungnya fitur ini)
  const handleUpdate = async () => {
    if (!idUser) {
      alert("ID User tidak ditemukan. Silakan Login ulang.");
      return;
    }

    try {
      // Kirim data baru ke Backend
      await axios.patch(`http://localhost:5000/users/${idUser}`, {
        nama: inputNama,
        email: inputEmail,
        password: inputPassword, // Backend akan cek: jika string kosong, password lama tetap dipakai
        telepon: inputTelepon
      });

      // Update data di 'Dompet Browser' (LocalStorage) agar tampilan nama di Header/Sidebar langsung berubah
      const userUpdated = { ...userLocal, nama: inputNama, email: inputEmail };
      localStorage.setItem("user", JSON.stringify(userUpdated));

      alert("Berhasil! Data profil telah diperbarui.");
      
      // Reload halaman agar semua tampilan segar kembali
      window.location.reload();

    } catch (error) {
      console.error(error);
      alert("Gagal mengupdate profil. Cek koneksi atau coba lagi.");
    }
  };

  return (
    // Container Utama
    <div className="bg-white rounded-2xl w-full shadow-sm h-fit">
      
      <div className="p-4 md:p-8">
        
        {/* Badge Supplier */}
        {cardType}

        {/* --- Header Profile Section --- */}
        <div className="mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Foto & Nama */}
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="flex rounded-full border-2 p-1 border-gray-100">
                <img 
                  src={HumanIcon} 
                  alt="picture" 
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full" 
                />
              </div>
              <div className="">
                {/* Tampilkan Nama sesuai yang sedang diketik (Preview Real-time) */}
                <h3 className="font-actor text-xl md:text-2xl font-medium text-gray-800">
                    {inputNama || nama}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                    {inputEmail || email}
                </p>
              </div>
            </div>

            {/* Tombol Ubah Foto (UI Only dulu) */}
            <button className="w-full md:w-auto py-2 px-6 primary text-white font-semibold rounded-2xl hover:opacity-90 transition-all cursor-pointer shadow-md">
              Ubah Foto
            </button>
          </div>
        </div>

        {/* --- Form Section --- */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-lg">
            
            <h2 className="text-2xl font-actor mb-6 text-center md:text-left font-semibold text-gray-700">
              Informasi Akun
            </h2>
            
            <div className="flex flex-col gap-4">
              {/* INPUT NAMA */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="text" 
                  placeholder="Nama" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                  value={inputNama}
                  onChange={(e) => setInputNama(e.target.value)}
                />
              </div>

              {/* INPUT EMAIL */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
              </div>

              {/* INPUT PASSWORD */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="password" 
                  placeholder="Kata Sandi Baru (Kosongkan jika tidak ingin ubah)" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                />
              </div>

              {/* INPUT NO HP */}
              <div className="border border-gray-300 rounded-2xl px-2 py-1 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-200 transition-all">
                <input 
                  type="text" 
                  placeholder="No. Hp" 
                  className="outline-none m-3 w-full bg-transparent text-base sm:text-lg text-gray-700 placeholder-gray-400" 
                  value={inputTelepon}
                  onChange={(e) => setInputTelepon(e.target.value)}
                />
              </div>
            </div>

            {/* TOMBOL SIMPAN */}
            <div className="mt-8 primary rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <button 
                onClick={handleUpdate} // <-- Sambungkan fungsi di sini
                className="w-full py-3 px-5 font-actor text-white font-semibold rounded-2xl hover:bg-white/10 cursor-pointer"
              >
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