const express = require('express');
const path = require('path');
const { sqlQuery, pool } = require('./db/mysqlUtils'); 
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const games = await sqlQuery('SELECT * FROM games');
        const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
        res.render('home', { title: 'Home', games, genres });  
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/about', async (req, res) => {
    try {
        const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
        res.render('about', { title: 'About', genres });
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/contact', async (req, res) => {
    try {
        const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
        res.render('contact', { title: 'Contact', genres });
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/games/:genre', async (req, res) => {
    try {
        const { genre } = req.params;
        const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
        const games = await sqlQuery(`SELECT * FROM games WHERE LOWER(genre) = '${genre}'`);
        res.render('games', { title: genre, genres, genre, games });  
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/play/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
        const [game] = await sqlQuery(`SELECT * FROM games WHERE id = '${id}'`);
        res.render('play', { title: game.title, genres, game });
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.use((req, res, next) => {
    res.status(404).render('404', { title: '404: Page Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

