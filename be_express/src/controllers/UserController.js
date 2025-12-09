import Users from '../models/UserModels.js';
import bcrypt from 'bcrypt';

// UPDATE
export const updateUser = async (req, res) => {
  // 1. Cari dulu user yang mau diedit berdasarkan ID di URL
  const user = await Users.findOne({
    where: {
      id_user: req.params.id,
    },
  });

  // Kalau user tidak ketemu, stop.
  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });

  // 2. Cek apakah user mengirim password baru?
  const { nama, email, password, confPassword, telepon, alamat, role } =
    req.body;

  let hashPassword;

  // Logika: Jika kolom password kosong, pakai password lama. Jika ada isinya, buat hash baru.
  if (password === '' || password === null) {
    hashPassword = user.password; // Pakai password lama dari database
  } else {
    // Jika mau ganti password, hash dulu
    const salt = await bcrypt.genSalt();
    hashPassword = await bcrypt.hash(password, salt);
  }

  // 3. Validasi Confirm Password (hanya jika user mengetik password baru)
  if (password && password !== confPassword) {
    return res
      .status(400)
      .json({ msg: 'Password dan Confirm Password tidak cocok' });
  }

  // 4. Proses Update ke Database
  try {
    await Users.update(
      {
        nama: nama,
        email: email,
        password: hashPassword,
        telepon: telepon,
        alamat: alamat,
        role: role, // Hati-hati, biasanya hanya admin yang boleh ganti role
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

// DELLETE
export const deleteUser = async (req, res) => {
  // 1. Cari user dulu
  const user = await Users.findOne({
    where: {
      id_user: req.params.id,
    },
  });

  // 2. Kalau gak ketemu, lapor error
  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });

  // 3. Kalau ketemu, hapus!
  try {
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
