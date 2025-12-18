import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Pastikan library icon fontawesome sudah terinstall di index.html atau via npm

const DaftarProduct = ({ onAddClick }) => {
  // 1. STATE UNTUK MENAMPUNG DATA DARI DATABASE
  const [products, setProducts] = useState([]);

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

  // 4. FUNGSI HAPUS PRODUK (DELETE)
  const handleDelete = async (id) => {
    // Konfirmasi dulu biar aman
    if (!window.confirm('Yakin ingin menghapus produk ini?')) return;

    try {
      await axios.delete(`http://127.0.0.1:5000/products/${id}`);
      alert('Produk berhasil dihapus!');
      getProducts(); // Refresh tabel setelah hapus
    } catch (error) {
      console.error(error);
      alert('Gagal menghapus produk.');
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
                      <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 md:px-4 rounded shadow-sm hover:bg-gray-100 font-semibold text-xs md:text-sm transition-all cursor-pointer">Edit</button>
                      <button
                        onClick={() => handleDelete(product.id_produk)} // Panggil fungsi Hapus
                        className="bg-red-500 text-white px-3 py-1 md:px-4 rounded shadow-sm hover:bg-red-600 font-semibold text-xs md:text-sm transition-all cursor-pointer"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs md:text-sm text-gray-500 text-right">
        Menampilkan <span className="font-bold text-gray-800">{products.length}</span> produk
      </div>
    </div>
  );
};

export default DaftarProduct;
