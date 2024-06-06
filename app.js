const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
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

// Use ejs as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' });
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
