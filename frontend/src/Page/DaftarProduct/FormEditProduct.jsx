import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditProduct = () => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [kategori, setKategori] = useState('Sayuran');
  const [deskripsi, setDeskripsi] = useState('');

  const [file, setFile] = useState(null); // Untuk file gambar BARU
  const [preview, setPreview] = useState(''); // Untuk preview gambar (lama/baru)

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Ambil ID dari URL

  // 1. AMBIL DATA LAMA SAAT HALAMAN DIBUKA
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
      const data = response.data;

      // Isi form dengan data lama
      setNama(data.name);
      setHarga(data.price);
      setStok(data.stock);
      setKategori(data.category);
      setDeskripsi(data.description);
      setPreview(data.url); // Tampilkan gambar lama
    } catch (error) {
      alert('Gagal mengambil data produk. Mungkin ID salah.');
      // PERBAIKAN 1: Jika error, kembali ke Setting Penjual
      navigate('/settingPenjual');
    }
  };

  // 2. FUNGSI HANDLE GAMBAR BARU
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  // 3. FUNGSI UPDATE (PATCH)
  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('name', nama);
    formData.append('price', harga);
    formData.append('stock', stok);
    formData.append('category', kategori);
    formData.append('description', deskripsi);

    // Kirim file HANYA JIKA user memilih gambar baru
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.patch(`http://127.0.0.1:5000/products/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });

      alert('Produk Berhasil Diupdate!');

      // PERBAIKAN 2: Navigasi SUKSES ke Setting Penjual (Bukan /products)
      navigate('/settingPenjual');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.msg || 'Gagal mengupdate produk.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 max-w-4xl mx-auto font-sans mt-10">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Edit Produk</h2>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        {/* Nama Produk */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Nama Produk</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none transition duration-200" value={nama} onChange={(e) => setNama(e.target.value)} required />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Harga */}
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Harga (Rp)</label>
            <input type="number" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none transition duration-200" value={harga} onChange={(e) => setHarga(e.target.value)} required />
          </div>
          {/* Stok */}
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Stok (ikat/unit)</label>
            <input type="number" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none transition duration-200" value={stok} onChange={(e) => setStok(e.target.value)} required />
          </div>
        </div>

        {/* Kategori */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Kategori</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-white cursor-pointer transition duration-200" value={kategori} onChange={(e) => setKategori(e.target.value)}>
            <option value="Sayuran">Sayuran Daun</option>
            <option value="Umbi">Umbi-umbian</option>
            <option value="Buah">Buah-buahan</option>
            <option value="Bumbu">Bumbu Dapur</option>
          </select>
        </div>

        {/* Gambar Upload & Preview */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Gambar Produk</label>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 w-full">
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition duration-200 cursor-pointer"
                onChange={loadImage}
              />
              <p className="text-xs text-gray-500 mt-2">*Biarkan kosong jika tidak ingin mengubah gambar.</p>
            </div>

            {/* Preview Gambar */}
            {preview && (
              <div className="mt-2 md:mt-0">
                <p className="text-sm font-semibold text-gray-700 mb-1">Preview:</p>
                <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border border-gray-300 shadow-sm" />
              </div>
            )}
          </div>
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Deskripsi Produk</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none h-24 resize-y transition duration-200"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          ></textarea>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col-reverse gap-3 mt-6 md:flex-row md:justify-end">
          <button
            type="button"
            // PERBAIKAN 3: Tombol Batal kembali ke Setting Penjual
            onClick={() => navigate('/settingPenjual')}
            disabled={isLoading}
            className="w-full md:w-auto px-6 py-3 md:py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition duration-200 outline-none"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto px-6 py-3 md:py-2 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition duration-200 shadow-md hover:shadow-lg outline-none flex justify-center items-center"
          >
            {isLoading ? 'Menyimpan...' : 'Update Produk'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditProduct;
