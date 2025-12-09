import express from 'express';
import { Register, Login, Logout } from '../controllers/AuthController.js';

import { updateUser, deleteUser } from '../controllers/UserController.js';

const router = express.Router();

router.post('/users', Register); // Jalur Daftar
router.post('/login', Login); // Jalur Masuk
router.delete('/logout', Logout); // Jalur Keluar

// updateUser & Dellete
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
