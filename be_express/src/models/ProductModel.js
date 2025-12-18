import { Sequelize } from "sequelize";
import db from "../config/database.js"; // Pastikan path ke database config benar

const { DataTypes } = Sequelize;

const Product = db.define('produk', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    url: {
        type: DataTypes.TEXT, // Pakai TEXT agar muat link gambar panjang
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    tableName: 'produk'
});

export default Product;

// PENTING:
// Setelah membuat ini, jika tabel di database belum ada, 
// Anda mungkin perlu menjalankan perintah sinkronisasi (seperti: await db.sync(); di file index.js sementara) 
// atau membuat tabel manual di MySQL/phpMyAdmin.