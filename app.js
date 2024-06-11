const express = require('express');
const path = require('path');
const { sqlQuery } = require('./db/mysqlUtils'); 
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/shared', express.static(path.join(__dirname, 'shared')));

app.use(express.json())

const routes = require('./routes');
app.use('/', routes);

async function handleHeader(req, res) {
    form = {genres: null, user: null};
    if (req.session.user) {
        form.user = req.session.user;
    }
    try {
        form.genres = await sqlQuery('SELECT DISTINCT genre FROM games'); 
    } catch (err) {
        console.error('Error:', err);
    }
    return form;
}

app.get('/', async (req, res) => {
    try {
        const games = await sqlQuery('SELECT * FROM games');
        const headerData = await handleHeader(); 
        res.render('home', { title: 'Home GameHub', games, genres: headerData.genres, user: headerData.user});  
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/about', async (req, res) => {
    try {
        const headerData = await handleHeader();
        res.render('about', { title: 'About GameHub', genres: headerData.genres, user: headerData.user});
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/contact', async (req, res) => {
    try {
        const headerData = await handleHeader();
        res.render('contact', { title: 'Contact GameHub', genres: headerData.genres, user: headerData.user});
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/games/:genre', async (req, res) => {
    try {
        const { genre } = req.params;
        const headerData = await handleHeader();
        const games = await sqlQuery(`SELECT * FROM games WHERE LOWER(genre) = '${genre}'`);
        res.render('games', { title: genre, genres: headerData.genres, user: headerData.user, genre, games });  
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/play/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const genres = await handleHeader(); 
        const gamelist = await sqlQuery(`SELECT * FROM games WHERE id = '${id}'`);
        const game = gamelist[0];
        const comments = await sqlQuery(`SELECT * FROM comments WHERE gameid = '${id}' ORDER BY time DESC`);
        res.render('play', { title: game.title, genres: headerData.genres, user: headerData.user, game, comments });
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

