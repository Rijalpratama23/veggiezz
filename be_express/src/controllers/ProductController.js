import Product from "../models/ProductModel.js"; 
// Pastikan Anda nanti punya file ProductModel.js di folder models (lihat penjelasan di bawah)

// 1. Mendapatkan SEMUA produk (Untuk halaman daftar produk)
export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: "Terjadi kesalahan server"});
    }
}

// 2. Mendapatkan 1 Produk berdasarkan ID (Untuk halaman edit)
export const getProductById = async (req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                uuid: req.params.id // Atau 'id' tergantung database Anda
            }
        });
        if(!response) return res.status(404).json({msg: "Produk tidak ditemukan"});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// 3. Membuat Produk Baru (INI YANG PENTING UNTUK FORM ANDA)
// controllers/ProductController.js

export const createProduct = async (req, res) => {
    // 1. CEK DATA MASUK (Debug)
    // Lihat terminal VS Code untuk memastikan data sampai
    console.log("=== DATA MASUK ===");
    console.log(req.body); 
    console.log("==================");

    // 2. MAPPING VARIABEL (LOGIKA ANTI-GAGAL)
    // Backend akan mencoba membaca 'name' (Inggris). 
    // Jika tidak ada, dia akan mencari 'nama_produk' (Indo).
    // Ini menjamin data terbaca apapun format kirimannya.
    
    const name = req.body.name || req.body.nama_produk;
    const price = req.body.price || req.body.harga;
    const stock = req.body.stock || req.body.stok;
    const category = req.body.category || req.body.kategori;
    const url = req.body.url || req.body.gambar; // atau req.body.link_gambar
    const description = req.body.description || req.body.deskripsi;

    // Validasi Manual (Opsional, agar tidak error notNull)
    if (!name || !price) {
        return res.status(400).json({msg: "Nama dan Harga tidak boleh kosong!"});
    }

    try {
        await Product.create({
            name: name,
            price: price,
            stock: stock,
            category: category,
            url: url,
            description: description
        });
        res.status(201).json({msg: "Product Created Successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg: error.message});
    }
}

// 4. Update Produk
export const updateProduct = async (req, res) => {
    const product = await Product.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "Produk tidak ditemukan"});

    const { name, price, stock, category, url, description } = req.body;

    try {
        await Product.update({
            name: name,
            price: price,
            stock: stock,
            category: category,
            url: url,
            description: description
        },{
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg: error.message});
    }
}

// 5. Menghapus Produk
export const deleteProduct = async (req, res) => {
    const product = await Product.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "Produk tidak ditemukan"});

    try {
        await Product.destroy({
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg: error.message});
    }
}