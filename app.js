const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise'); // Use mysql2/promise for async/await

const app = express();
const PORT = 3000;

// Database configuration
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'brianhuster',
    password: 'password',
    database: 'gamehub',
};

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

async function sqlQuery(query) {
    try {
        const [results] = await db.execute(query); // Use execute instead of query
        return results;
    } catch (err) {
        console.error('Error querying', query, 'from MySQL database:', err);
        throw err;
        return [];
    }
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const games = await sqlQuery('SELECT * FROM games');
        const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
        res.render('home', { title: 'Home', games: games, genres: genres });
    } catch (err) {
        res.sendStatus(500);
    }
});

app.get('/about', async (req, res) => {
    const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
    res.render('about', { title: 'About' , genres: genres});
});

app.get('/contact', async (req, res) => {
    const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
    res.render('contact', { title: 'Contact' , genres: genres});
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

