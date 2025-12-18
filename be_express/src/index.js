import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/database.js';
import router from './routes/router.js';
import Product from './models/ProductModel.js'; 

dotenv.config();
const app = express();

// Limit upload gambar (Penting)
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors({ credentials: true, origin: 'http://localhost:5173' })); 

// --- KEMBALI KE KODE NORMAL ---
(async () => {
    try {
        await db.authenticate();
        console.log('Database Connected...');
        // Cukup sync biasa agar data aman.
        await db.sync(); 
        
    } catch (error) {
        console.error("Gagal koneksi ke database:", error);
    }
})();
// ------------------------------

app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));