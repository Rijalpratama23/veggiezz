// api/produk.js
import pool from './api-db.js';

export default async function handler(request, response) {
  // Tambahkan header ini agar tidak error saat diakses dari browser
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    // Jalankan Query SQL (pengganti findAll() di Sequelize)
    const result = await pool.sql`SELECT * FROM produk`;
    
    // Kirim hasilnya ke frontend
    return response.status(200).json(result.rows);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}