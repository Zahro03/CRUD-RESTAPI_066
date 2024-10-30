const express = require("express");
const app = express();
const todoRoutes = require('./routes/todo'); // Pastikan ini merujuk ke file yang benar
const port = 8000;

app.use(express.json()); // Middleware untuk parsing JSON

// Route untuk todos
app.use('/todos', todoRoutes);

// Endpoint untuk render halaman utama (jika perlu)
app.get('/', (req, res) => {
    res.send("Selamat datang di API Todo");
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
