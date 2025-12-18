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
    console.log("=== DEBUGGING UPLOAD ===");
    console.log("File:", req.file); // Cek apakah file gambar masuk?
    console.log("Body:", req.body); // Cek apakah nama, harga, dll masuk?
    console.log("==========================");
    // 1. LOGIKA URL GAMBAR
    let finalUrl = "";

    if(req.file === undefined) {
        // Jika user tidak upload file, kita cek apakah dia kirim link teks?
        // Kalau tidak ada juga, pakai gambar default/kosong
        finalUrl = req.body.url || ""; 
    } else {
        // Jika ada file upload, buat URL otomatisnya
        // Contoh: http://localhost:5000/images/file-123123.jpg
        finalUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    }

    // 2. AMBIL DATA LAIN
    const name = req.body.name || req.body.nama_produk;
    const price = req.body.price || req.body.harga;
    const stock = req.body.stock || req.body.stok;
    const category = req.body.category || req.body.kategori;
    const description = req.body.description || req.body.deskripsi;

    // Validasi Sederhana
    if (!name || !price) {
        return res.status(400).json({msg: "Nama dan Harga tidak boleh kosong!"});
    }

    try {
        await Product.create({
            name: name,
            price: price,
            stock: stock,
            category: category,
            url: finalUrl, // Simpan URL yang sudah digenerate
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