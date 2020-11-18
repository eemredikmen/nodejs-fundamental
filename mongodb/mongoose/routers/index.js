const express = require('express');
const router = express.Router();
const questions = require('./questions');
const auth = require('./auth');

router.use("/auth", auth);
router.use("/questions", questions);

module.exports = router;
