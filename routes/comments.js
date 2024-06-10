const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

const badWords = ["fuck", "fvck", "viet cong", "nigger", "ching chong", "son of a bitch"];

function containsBadWords(comment) {
    const lowercaseComment = comment.toLowerCase();
    return badWords.some((word) => lowercaseComment.includes(word));
}

const pool = mysql.createPool({
    host: 'localhost',
    user: 'brianhuster',
    password: 'password',
    database: 'gamehub',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

router.post('/submit-comment', async (req, res) => {
    const { name, email, comment, rating, time, gameid } = req.body;

    // Server-side validation for bad words
    if (containsBadWords(comment)) {
        return res.status(400).send({ message: 'Your comment contains inappropriate words and cannot be submitted.' });
    }

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO comments (name, email, comment, rating, time, gameid)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await connection.execute(query, [name, email, comment, rating, time, gameid]);

        connection.release();

        res.status(200).send({ message: 'Comment submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to submit the comment. Please try again later.' });
    }
});

module.exports = router;

