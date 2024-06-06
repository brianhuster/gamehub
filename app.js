const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
    host: 'localhost:3306',
    user: 'brianhuster',
    password: '123456',
    database: 'gamehub'
};

// Connect to the database
let db;
async function connectToDatabase() {
  try {
    db = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL database!');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
}
connectToDatabase();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    try {
        const [rows] = db.execute('SELECT * FROM games');
        res.render('pages/home', { games: rows });
    } catch (err) {
        console.error('Error fetching games:', err);
        res.status(500).send('Error fetching games');
  }
});

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
