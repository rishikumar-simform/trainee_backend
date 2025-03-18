require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: ", err);
        return;
    }
    console.log("Connected to MySQL Database!");
});

// Create Books Table (Run once)
db.query(`
    CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL
    )
`, err => {
    if (err) console.error("Error creating table: ", err);
});

// Routes

// GET: Fetch all books
app.get("/books", (req, res) => {
    db.query("SELECT * FROM books", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// POST: Add a new book
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    db.query("INSERT INTO books (title, author) VALUES (?, ?)", [title, author], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, title, author });
    });
});

// PUT: Update book details by ID
app.put("/books/:id", (req, res) => {
    const { title, author } = req.body;
    db.query("UPDATE books SET title = ?, author = ? WHERE id = ?", [title, author, req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Book updated successfully" });
    });
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});

