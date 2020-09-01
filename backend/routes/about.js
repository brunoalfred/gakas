const express = require('express')
const router = express.Router()

// Get About Pages
router.get('/', (req, res, next) => {
    res.send('Welcome to about PAge')
});

module.exports = router; 
