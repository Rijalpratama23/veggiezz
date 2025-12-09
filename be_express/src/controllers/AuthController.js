import Users from '../models/UserModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// 1. LOGIKA REGISTER
export const Register = async (req, res) => {
  const { nama, email, password, confPassword, telepon, alamat } = req.body;

  // Cek apakah password dan confirm password sama
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: 'Password dan Confirm Password tidak cocok' });

  // Enkripsi password sebelum disimpan ke database
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      nama: nama,
      email: email,
      password: hashPassword,
      telepon: telepon,
      alamat: alamat,
      role: 'pembeli', // Default role saat register
    });
    res.json({ msg: 'Register Berhasil' });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ msg: 'Gagal Register. Email mungkin sudah digunakan.' });
  }
};

// 2. LOGIKA LOGIN
export const Login = async (req, res) => {
  try {
    // Cari user berdasarkan email
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });

    // Jika email tidak ditemukan
    if (user.length === 0)
      return res.status(404).json({ msg: 'Email tidak ditemukan' });

    // Cek kecocokan password
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: 'Password Salah' });

    // Siapkan data untuk Token
    const userId = user[0].id_user;
    const nama = user[0].nama;
    const email = user[0].email;
    const role = user[0].role;

    // Buat Access Token (Kunci Masuk)
    const accessToken = jwt.sign(
      { userId, nama, email, role },
      process.env.ACCESS_TOKEN_SECRET || 'kunci_rahasia_123',
      {
        expiresIn: '1d',
      }
    );

    // Simpan token ke database (opsional tapi bagus)
    await Users.update(
      { refresh_token: accessToken },
      {
        where: {
          id_user: userId,
        },
      }
    );

    // Kirim token ke frontend
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: 'Terjadi kesalahan sistem' });
  }
};

// 3. LOGIKA LOGOUT (Tambahan Penting)
export const Logout = async (req, res) => {
  // Anggap saja kita menghapus token dari database untuk logout
  // Untuk simplifikasi tugas, kita bisa return sukses saja dulu
  res.sendStatus(200);
};
