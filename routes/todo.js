const { Router } = require("express");
const router = Router();


// Mengambil semua todos
router.get('/', (req, res) => {
    res.json(todos);
});

// Menambahkan todo baru
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Menghapus todo berdasarkan ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        todos.splice(index, 1);
        return res.status(200).json({ message: `Tugas dengan ID ${id} telah dihapus.` });
    }

    return res.status(404).json({ error: "Todo tidak ditemukan" });
});

// Memperbarui todo berdasarkan ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        // Memperbarui tugas dan status
        todos[index].task = req.body.task !== undefined ? req.body.task : todos[index].task;
        todos[index].completed = req.body.completed !== undefined ? req.body.completed : todos[index].completed;

        return res.status(200).json({ message: `Tugas dengan ID ${id} telah diperbarui.`, todo: todos[index] });
    }

    return res.status(404).json({ error: "Todo tidak ditemukan" });
});

module.exports = router;
