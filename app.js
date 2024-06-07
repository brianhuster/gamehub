const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const mysql = require('mysql2');

// Database configuration
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'brianhuster',
    password: 'password',
    database: 'gamehub',
};
let db;
function connectToDatabase() {
  try {
    db = mysql.createConnection(dbConfig);
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
    db.query('SELECT * FROM games', (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.sendStatus(500);
        }
        else {
            res.render('home', { title: 'Home', games: results });
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
