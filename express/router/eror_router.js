const express = require('express')
const app = express()
const router = express.Router()

router.use((req, res) => {
    res.send('Sayfa bulunamadı...');
});

module.exports =router;
