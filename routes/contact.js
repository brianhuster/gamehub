const express = require('express');
const router = express.Router();
const { sqlQuery } = require('../db/mysqlUtils'); 
const { containsBadWords, currentTime } = require('../shared/common.js');

router.post('/contact', async (req, res) => {
    console.log(req.body);
    const { name, email, message } = req.body;

    if (containsBadWords(message)) {
        return res.status(400).send({ message: 'Your message contains inappropriate words and cannot be submitted.' });
    }
    
    const time = currentTime();
    try {
        const query = `
            INSERT INTO contact (name, email, message, time)
            VALUES (?, ?, ?, ?)
        `;

        await sqlQuery(query, [name, email, message, time]);

        res.status(200).send({ message: 'Comment submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to submit the comment. Please try again later.\n' });
    }
});

module.exports = router;

