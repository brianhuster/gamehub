const express = require('express');
const session = require('express-session');
const router = express.Router();
const authRoutes = require('./auth');
const commentsRoutes = require('./comments');
const adminRoutes = require('./admin');
const contactRoutes = require('./contact');

router.use(
    session({
        secret: "session-password", 
        resave: false,
        saveUninitialized: true,
    })
);

router.use('/', authRoutes);
router.use('/', commentsRoutes);
router.use('/', adminRoutes);
router.use('/', contactRoutes);

module.exports = router;
