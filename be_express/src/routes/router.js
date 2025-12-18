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

// import multer path
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// konfigurasi penyimpanan gambar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = 'public/images';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

router.post('/users', Register); // Jalur Daftar
router.post('/login', Login); // Jalur Masuk
router.delete('/logout', Logout); // Jalur Keluar
// updateUser & Dellete
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/products', getProducts);       // Untuk melihat semua produk
router.get('/products/:id', getProductById); // Untuk melihat 1 produk detail
router.post('/products', upload.single('file'), createProduct);
router.patch('/products/:id', upload.single('file'), updateProduct); // Untuk edit produk
router.delete('/products/:id', deleteProduct); // Untuk hapus produk

export default router;
