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
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
app.use('/', routes);

async function handleHeader(req, res) {
    let form = {genres: null, user: null, views: 0};
    let row = await sqlQuery('SELECT * FROM visits');
    form.views = row[0].views;
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
        let row = sqlQuery('UPDATE visits SET views = views + 1');
        const games = await sqlQuery('SELECT * FROM games');
        const headerData = await handleHeader(req, res); 
        res.render('home', { title: 'Home GameHub', games, headerData});  
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/about', async (req, res) => {
    try {
        const headerData = await handleHeader(req, res);
        res.render('about', { title: 'About GameHub', headerData});
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/contact', async (req, res) => {
    try {
        const headerData = await handleHeader(req, res);
        res.render('contact', { title: 'Contact GameHub', headerData});
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/games/:genre', async (req, res) => {
    try {
        const { genre } = req.params;
        const headerData = await handleHeader(req, res);
        const games = await sqlQuery(`SELECT * FROM games WHERE LOWER(genre) = '${genre}'`);
        res.render('games', { title: genre, headerData, genre, games});  
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/play/:id', async (req, res) => {
    try {
        const headerData = await handleHeader(req, res);
        const id = req.params.id;
        const genres = await handleHeader(req, res); 
        const gamelist = await sqlQuery(`SELECT * FROM games WHERE id = '${id}'`);
        const game = gamelist[0];
        const comments = await sqlQuery(`SELECT * FROM comments WHERE gameid = '${id}' ORDER BY time DESC`);
        res.render('play', { title: game.title, headerData, game, comments});
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get("/login", async (req, res) => {
    const headerData = await handleHeader(req, res);
    res.render("login", { title: "Login", headerData});
});

app.get("/signup", async (req, res) => {
    const headerData = await handleHeader(req, res);
    res.render("signup", { title: "Sign Up", headerData});
});

app.get('/admin/game', async (req, res) => {
    try {
        const headerData = await handleHeader(req, res);
        const games = await sqlQuery(`SELECT * FROM games `);
        res.render('admin/game/index', { title: 'List game', games: games, headerData});
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to fetch games' });
    }
});

app.get('/admin/game/add', async (req, res) => {
    try {
        const headerData = await handleHeader(req, res);
        res.render('admin/game/add', { title: 'Add game', headerData});
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to add game. Please try again' });
    }
});

app.get('/admin/game/edit/:id', async (req, res) => {
    try {
        const headerData = await handleHeader(req, res);
        const id = req.params.id;
        const games = await sqlQuery(`SELECT * FROM games where id = '${id}'`);
        const game = games[0];
        res.render('admin/game/edit', { title: game.title, game, headerData});
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

app.get('/admin/comments', async (req, res) => {
    try {
        const headerData = await handleHeader(req, res);
        const comments = await sqlQuery(`SELECT * FROM comments `);
        res.render('admin/comments/index', { title: 'List comments', comments: comments, headerData});
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to submit the comment. Please try again later.\n' });
    }
});

app.use(async (req, res, next) => {
    const headerData = await handleHeader(req, res);
    res.status(404).render('404', { title: '404: Page Not Found', headerData});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

