const express = require('express');
const session = require('express-session');
const router = express.Router();
const authRoutes = require('./auth');
const commentsRoutes = require('./comments');

router.use(
    session({
        secret: "session-password", 
        resave: false,
        saveUninitialized: true,
    })
);

router.use('/', authRoutes);
router.use('/', commentsRoutes);

module.exports = router;
