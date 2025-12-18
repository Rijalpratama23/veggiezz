import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Pastikan library icon fontawesome sudah terinstall di index.html atau via npm

const DaftarProduct = ({ onAddClick }) => {
  // 1. STATE UNTUK MENAMPUNG DATA DARI DATABASE
  const [products, setProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  // Ambil Data User (untuk tahu produk siapa yang harus ditampilkan, jika nanti pakai filter)
  const userLocal = JSON.parse(localStorage.getItem('user'));

  // 2. FUNGSI AMBIL DATA (GET)
  const getProducts = async () => {
    try {
      // Tembak API Backend
      const response = await axios.get('http://127.0.0.1:5000/products');
      setProducts(response.data); // Simpan hasil ke State
    } catch (error) {
      console.error('Gagal mengambil data produk:', error);
    }
  };

  // 3. JALANKAN SAAT HALAMAN DIBUKA
  useEffect(() => {
    getProducts();
  }, []);

  const confirmDelete = (uuid) => {
    setProductIdToDelete(uuid); // Simpan ID produk yang mau dihapus
    setShowModal(true); // Tampilkan Modal
  };

  // 2. Fungsi saat tombol "Batal" / "Tidak" diklik (Tutup Modal)
  const closeModal = () => {
    setShowModal(false);
    setProductIdToDelete(null);
  };

  const handleDelete = async () => {
    if (productIdToDelete) {
      try {
        await axios.delete(`http://localhost:5000/products/${productIdToDelete}`);
        getProducts(); // Refresh data
        closeModal(); // Tutup modal setelah berhasil
      } catch (error) {
        console.log(error);
        alert('Gagal menghapus produk');
      }
    }
  };

  // 5. FORMAT RUPIAH
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 transition-all">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-primary">Daftar Produk Saya</h2>
        <button onClick={onAddClick} className="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all flex justify-center items-center gap-2 active:scale-95 cursor-pointer">
          <i className="fa-solid fa-plus"></i> Tambah Produk
        </button>
      </div>

      {/* TABEL WRAPPER */}
      <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-300 rounded-lg">
        <table className="w-full border-collapse relative min-w-[600px] md:min-w-full">
          {/* Header Tabel Sticky */}
          <thead className="sticky top-0 z-10 shadow-sm">
            <tr className="bg-gray-100 text-gray-800 font-bold text-sm md:text-lg">
              <th className="border p-3 md:p-4 w-12 text-center bg-gray-100 whitespace-nowrap">No</th>
              <th className="border p-3 md:p-4 text-left bg-gray-100 whitespace-nowrap">Nama Produk</th>
              <th className="border p-3 md:p-4 text-center bg-gray-100 whitespace-nowrap">Gambar</th>
              <th className="border p-3 md:p-4 text-left bg-gray-100 whitespace-nowrap">Harga</th>
              <th className="border p-3 md:p-4 text-left bg-gray-100 whitespace-nowrap">Stok</th>
              <th className="border p-3 md:p-4 text-left bg-gray-100 whitespace-nowrap">Kategori</th>
              <th className="border p-3 md:p-4 text-center w-48 bg-gray-100 whitespace-nowrap">Aksi</th>
            </tr>
          </thead>

          {/* Isi Data */}
          <tbody>
            {products.length === 0 ? (
              // Tampilan jika data kosong
              <tr>
                <td colSpan="7" className="text-center p-8 text-gray-500 italic">
                  Belum ada produk. Silakan tambah produk baru!
                </td>
              </tr>
            ) : (
              // Mapping Data Asli
              products.map((product, index) => (
                <tr key={product.uuid} className="hover:bg-gray-50 text-gray-700 text-sm md:text-lg transition-colors">
                  <td className="border p-3 md:p-4 text-center font-semibold">{index + 1}</td>
                  <td className="border p-3 md:p-4 font-medium whitespace-nowrap">{product.name}</td>
                  <td className="border p-3 md:p-4 text-center">
                    <div className="flex justify-center">
                      {/* Jika ada gambar, tampilkan. Jika tidak, pakai placeholder */}
                      <img src={product.url} alt={product.nama_produk} className="w-12 h-12 md:w-16 md:h-16 object-cover drop-shadow-md rounded" />
                    </div>
                  </td>
                  <td className="border p-3 md:p-4 whitespace-nowrap font-bold text-green-700">{formatRupiah(product.price)}</td>
                  <td className="border p-3 md:p-4 whitespace-nowrap">{product.stock} ikat</td>
                  <td className="border p-3 md:p-4 whitespace-nowrap text-sm text-gray-600">{product.category}</td>
                  <td className="border p-3 md:p-4 text-center">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/products/edit/${product.uuid}`} // Mengarah ke URL edit dengan membawa ID
                        className="bg-white border border-gray-300 text-gray-700 px-3 py-1 md:px-4 rounded shadow-sm hover:bg-gray-100 font-semibold text-xs md:text-sm transition-all cursor-pointer flex items-center justify-center"
                      >
                        Edit
                      </Link>

                      {/* --- PERBAIKAN DI SINI --- */}
                      <button
                        onClick={() => confirmDelete(product.uuid)} // SEKARANG MEMANGGIL MODAL, BUKAN LANGSUNG HAPUS
                        className="bg-red-500 text-white px-3 py-1 md:px-4 rounded shadow-sm hover:bg-red-600 font-semibold text-xs md:text-sm transition-all cursor-pointer"
                      >
                        Hapus
                      </button>
                      {/* ------------------------- */}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* --- MODAL CONFIRMATION (CARD) --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
          {/* Card Container */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100">
            {/* Icon Sampah (Trash) */}
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>

            {/* Judul & Pesan */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hapus Produk?</h3>
              <p className="text-gray-500 mb-6">
                Apakah Anda yakin ingin menghapus produk ini?
                <br />
                Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex gap-4 justify-center">
              {/* Tombol Batal */}
              <button onClick={closeModal} className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition focus:ring-4 focus:ring-gray-100">
                Tidak, Batal
              </button>

              {/* Tombol Hapus */}
              <button onClick={handleDelete} className="px-6 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 shadow-lg shadow-red-500/30 transition focus:ring-4 focus:ring-red-200">
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ---------------------------------- */}

      <div className="mt-4 text-xs md:text-sm text-gray-500 text-right">
        Menampilkan <span className="font-bold text-gray-800">{products.length}</span> produk
      </div>
    </div>
  );
};

export default DaftarProduct;
