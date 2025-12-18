import React, { useState } from 'react';
import axios from 'axios';

const FormAddProduct = ({ onCancel, onSuccess }) => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [kategori, setKategori] = useState('Sayuran');
  const [deskripsi, setDeskripsi] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  // Tambahkan state loading agar tombol tidak bisa diklik dua kali
  const [isLoading, setIsLoading] = useState(false);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // BUNGKUS DATA MENGGUNAKAN FORMDATA (Wajib untuk upload file)
    const formData = new FormData();
    formData.append('name', nama);
    formData.append('price', harga);
    formData.append('stock', stok);
    formData.append('category', kategori);
    formData.append('description', deskripsi);

    // 'file' harus sama dengan yang ada di router.js (upload.single('file'))
    if (file) {
      formData.append("file", file);
    }

    try {
      // GANTI URL INI SESUAI KEBUTUHAN (Misal pakai 127.0.0.1 agar lebih stabil)
      await axios.post('http://127.0.0.1:5000/products', formData, {
        headers: {
          'Content-type': 'multipart/form-data', // Header khusus upload
        },
      });

      alert('Produk Berhasil Ditambahkan!');
      onSuccess();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.msg || 'Gagal menambah produk');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // UBAH 1: Container Utama
    // - p-4 md:p-6: Padding lebih kecil di HP (4), normal di desktop (6).
    // - max-w-4xl mx-auto: Agar form tidak terlalu lebar di layar besar dan tetap di tengah.
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 max-w-4xl mx-auto font-sans">
      {/* UBAH 2: Judul */}
      {/* - text-xl md:text-2xl: Ukuran font sedikit lebih kecil di HP. */}
      {/* - mb-4 md:mb-6: Margin bawah menyesuaikan. */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Tambah Produk Baru</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Nama Produk */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Nama Produk</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
            placeholder="Contoh: Bayam Segar"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>

        {/* BAGIAN INI SUDAH BAGUS (Responsive Row) */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Harga */}
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Harga (Rp)</label>
            <input
              type="number"
              // Menambahkan 'transition duration-200' untuk efek halus saat fokus
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
              placeholder="15000"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
          </div>

          {/* Stok */}
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Stok</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none transition duration-200"
              placeholder="10"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Kategori */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Kategori</label>
          {/* Menambahkan 'cursor-pointer' */}
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none bg-white cursor-pointer transition duration-200" value={kategori} onChange={(e) => setKategori(e.target.value)}>
            <option value="Sayuran">Sayuran Daun</option>
            <option value="Umbi">Umbi-umbian</option>
            <option value="Buah">Buah-buahan</option>
            <option value="Bumbu">Bumbu Dapur</option>
          </select>
        </div>

        {/* Gambar (URL) */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Upload Gambar</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition duration-200"
              onChange={loadImage} // Panggil fungsi loadImage
            />
          </div>

          {/* Tampilkan Preview jika ada gambar dipilih */}
          {preview && (
            <div className="mt-4">
              <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border border-gray-300 shadow-sm" />
            </div>
          )}
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">Deskripsi Produk</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none h-24 resize-y transition duration-200"
            placeholder="Jelaskan kondisi sayuran..."
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          ></textarea>
        </div>

        {/* UBAH 3: Tombol Aksi yang Lebih Responsif */}
        {/* - mt-6: Jarak atas sedikit lebih lega. */}
        {/* - flex-col-reverse md:flex-row: Di HP, tombol 'Simpan' (submit) ditaruh di atas tombol 'Batal'. Di desktop, kembali bersebelahan. */}
        {/* - md:justify-end: Di desktop, tombol rata kanan. */}
        <div className="flex flex-col-reverse gap-3 mt-6 md:flex-row md:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            // w-full md:w-auto: Di HP tombol selebar layar agar mudah ditekan, di desktop lebarnya menyesuaikan konten.
            className="w-full md:w-auto px-6 py-3 md:py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition duration-200 focus:ring-2 focus:ring-gray-200 outline-none disabled:opacity-50"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={isLoading}
            // w-full md:w-auto: Sama, selebar layar di HP.
            // py-3 md:py-2: Tombol sedikit lebih tinggi di HP agar target sentuh lebih besar.
            className="w-full md:w-auto px-6 py-3 md:py-2 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-1 outline-none flex justify-center items-center disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Menyimpan...
              </>
            ) : (
              'Simpan Produk'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddProduct;
