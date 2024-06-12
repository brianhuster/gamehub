const express = require("express");
const router = express.Router();
const { sqlQuery } = require("../db/mysqlUtils");
const session = require("express-session");

router.post("/login", async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    console.log(username, password);

    try {
        const query = "SELECT * FROM accounts WHERE username = ? AND password = ?";
        const rows = await sqlQuery(query, [username, password]);
        console.log(rows);

        if (rows.length) {
            req.session.user = { username: rows[0].username, role: rows[0].role};
            res.redirect("/");
        } else {
            res.status(401).send({
                message: "Invalid username or password. Please try again.",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Failed to authenticate due to server error. Please try again later.",
        });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const {username, password, repeatPassword} = req.body;
        console.log(username, password, repeatPassword);
        const checkQuery = `SELECT * FROM accounts WHERE username = ?`;
        const rows = await sqlQuery(checkQuery, [username]);
        if (rows.length) {
            res.status(400).send({message: 'Username already exists. Please choose another username.'});
            return;
        }
        if (password !== repeatPassword) {
            res.status(400).send({message: 'Password and repeated password do not match'});
            return;
        }
        const query = `INSERT INTO accounts (username, password, role) VALUES (?, ?, ?) `;
        await sqlQuery(query, [username, password, 'user']);
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to create account. Please try again later.' });
    }
});

router.get("/logout", (req, res) => {
    // Clear the session and log out the user
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
