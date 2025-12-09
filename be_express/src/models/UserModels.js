import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Users = db.define(
  'users',
  {
    // Nama tabel di database
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    telepon: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'pembeli', // Default peran jika tidak diisi
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
    // Karena di database Anda nama kolomnya 'tanggal_daftar', kita mapping manual:
    tanggal_daftar: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'tanggal_daftar',
    },
  },
  {
    freezeTableName: true, // Agar sequelize membaca tabel 'users', bukan 'userss'
    timestamps: true, // Aktifkan timestamp
    createdAt: 'tanggal_daftar', // Mapping createdAt ke kolom tanggal_daftar Anda
    updatedAt: false, // Matikan updatedAt karena tidak ada kolomnya di tabel Anda
  }
);

export default Users;
