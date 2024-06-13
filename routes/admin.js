const express = require('express');
const router = express.Router();
const { sqlQuery } = require('../db/mysqlUtils'); 

router.post('/admin/game/add', async (req, res) => {
    try {
        let {id, link, name, description, genre, thumbnail} = req.body;
        const query = `INSERT INTO games (link, name, description, genre, thumbnail, id) VALUES (?, ?, ?, ?, ?, ?) `;
        await sqlQuery(query, [link, name, description, genre, thumbnail, id]);

        res.redirect('/admin/game');
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to submit the game. Please try again later.\n' });
    }
});

router.post('/admin/game/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let {link, name, description, genre, thumbnail} = req.body;
        const query = (`UPDATE games SET link = ?, name = ?, description = ? , genre = ?, thumbnail = ?, id = ? WHERE id = '${id}'`);
        await sqlQuery(query, [link, name, description, genre, thumbnail, id]);

        res.redirect(`/admin/game`);
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

router.get('/admin/game/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await sqlQuery(`DELETE  FROM games where id = '${id}'`);
        res.redirect(`/admin/game`);
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

router.get('/admin/comment/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await sqlQuery(`DELETE  FROM comments where id = ${id}`);
        res.redirect(`/admin/comment`);
    } catch (err) {
        console.error('Error:', err);
        res.sendStatus(500);
    }
});

module.exports = router;

