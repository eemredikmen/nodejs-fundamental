const express = require('express');
const {getAllQuestions} = require('../controllers/questions.js')
const router = express.Router();

router.get('/', getAllQuestions);

router.get('/delete', (req, res) => {
    res.send('Questions Delete Page');
});



module.exports = router;