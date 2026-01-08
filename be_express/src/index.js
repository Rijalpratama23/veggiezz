import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/database.js'; // Pastikan path ini benar di dalam folder api
import router from './routes/router.js';

dotenv.config();
const app = express();

// 1. Update CORS: Izinkan domain Vercel kamu, bukan cuma localhost
app.use(cors({ 
    credentials: true, 
    origin: process.env.NODE_ENV === 'production' 
        ? 'https://veggiezz-gs3v.vercel.app' // Ganti dengan domain vercel kamu
        : 'http://localhost:5173' 
}));

app.use(express.static("public"));
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 2. Koneksi Database (Hanya jalankan authenticate, sync bisa berat di serverless)
(async () => {
    try {
        await db.authenticate();
        console.log('Database Connected...');
        // await db.sync(); // Jalankan ini secara manual saja jika perlu update tabel
    } catch (error) {
        console.error("Gagal koneksi ke database:", error);
    }
})();

app.use(router);

// 3. HAPUS app.listen(5000...) karena Vercel yang akan mengaturnya
// app.listen(5000, () => console.log('Server running at port 5000'));

export default app;