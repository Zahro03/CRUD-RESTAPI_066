const express = require('express');
const todoRoutes = require('./routes/todo');
const app = express();

app.use(express.json()); // Untuk parsing JSON
app.use('/todos', todoRoutes); // Menggunakan router todos

const PORT = 8000; // Pastikan port sesuai dengan yang Anda inginkan
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
