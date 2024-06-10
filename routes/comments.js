const express = require('express');
const router = express.Router();
const { sqlQuery } = require('../db/mysqlUtils'); 
const { containsBadWords, currentTime } = require('../shared/common.js');

router.post('/submit-comment', async (req, res) => {
    console.log(req.body);
    const { name, email, comment, rating, gameid } = req.body;

    if (containsBadWords(comment)) {
        return res.status(400).send({ message: 'Your comment contains inappropriate words and cannot be submitted.' });
    }
    
    const time = currentTime();
    try {
        const query = `
            INSERT INTO comments (name, email, comment, rating, time, gameid)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await sqlQuery(query, [name, email, comment, rating, time, gameid]);

        res.status(200).send({ message: 'Comment submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to submit the comment. Please try again later.\n' });
    }
});

module.exports = router;

