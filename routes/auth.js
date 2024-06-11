const express = require("express");
const router = express.Router();
const { sqlQuery } = require("../db/mysqlUtils");
const session = require("express-session");

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = "SELECT * FROM users WHERE username = ?";
        const [rows] = await sqlQuery(query, [username]);

        if (rows.length > 0 && rows[0].password === password) {
            req.session.user = { username: rows[0].username };
            res.redirect("/");
        } else {
            res.render("login", { error: "Invalid username or password." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Failed to authenticate. Please try again later.",
        });
    }
});

router.get("/logout", (req, res) => {
    // Clear the session and log out the user
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
