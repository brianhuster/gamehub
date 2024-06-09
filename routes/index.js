const express = require('express');
const router = express.Router();

const commentsRoutes = require('./comments');

// Mount routes
router.use('/comments', commentsRoutes);

module.exports = router;
