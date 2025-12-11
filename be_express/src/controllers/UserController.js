import Users from '../models/UserModels.js';
import bcrypt from 'bcrypt';

// 1. UPDATE USER (PROFILE & ROLE)
export const updateUser = async (req, res) => {
  try {
    // Cari user berdasarkan ID
    const user = await Users.findOne({
      where: {
        id_user: req.params.id,
      },
    });

    if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });

    // Ambil data dari body
    const { nama, email, password, telepon, alamat, role } = req.body;

    // Logika Password: Jika kosong pakai lama, jika ada isi enkripsi baru
    let hashPassword = user.password;
    if (password && password !== "") {
      const salt = await bcrypt.genSalt();
      hashPassword = await bcrypt.hash(password, salt);
    }

    // --- LOGIKA AMAN (SAFE UPDATE) ---
    // Pakai data baru (req.body), TAPI kalau kosong pakai data lama (user.database)
    await Users.update(
      {
        nama: nama || user.nama,           // <--- INI KUNCINYA
        email: email || user.email,        // Supaya data tidak hilang
        password: hashPassword,
        telepon: telepon || user.telepon,
        alamat: alamat || user.alamat,
        role: role || user.role,           // Untuk update jadi 'penjual'
      },
      {
        where: {
          id_user: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: 'User Berhasil Diupdate' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// 2. DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id_user: req.params.id,
      },
    });

    if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });

    await Users.destroy({
      where: {
        id_user: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User Berhasil Dihapus' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};