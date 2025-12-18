import express from 'express';
import { Register, Login, Logout } from '../controllers/AuthController.js';
import { updateUser, deleteUser } from '../controllers/UserController.js';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";


const router = express.Router();

router.post('/users', Register); // Jalur Daftar
router.post('/login', Login); // Jalur Masuk
router.delete('/logout', Logout); // Jalur Keluar
// updateUser & Dellete
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/products', getProducts);       // Untuk melihat semua produk
router.get('/products/:id', getProductById); // Untuk melihat 1 produk detail
router.post('/products', createProduct);    // <--- INI PERBAIKAN UTAMA (Tombol Simpan)
router.patch('/products/:id', updateProduct); // Untuk edit produk
router.delete('/products/:id', deleteProduct); // Untuk hapus produk

export default router;
