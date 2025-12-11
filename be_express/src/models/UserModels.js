import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    // Definisi Kolom sesuai Database Anda
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    telepon: {
        type: DataTypes.STRING
    },
    alamat: {
        type: DataTypes.TEXT
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'pembeli' // Default role
    },
    refresh_token: {
        type: DataTypes.TEXT // Penting: Kolom ini sudah Anda buat di DB
    },
    tanggal_daftar: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'tanggal_daftar' // Mapping agar Sequelize mengenali kolom ini
    }
}, {
    freezeTableName: true, 
    timestamps: true,      // Aktifkan timestamp
    createdAt: 'tanggal_daftar', // Arahkan createdAt ke 'tanggal_daftar'
    updatedAt: false       // Matikan updatedAt karena tidak ada di tabel Anda
});

export default Users;