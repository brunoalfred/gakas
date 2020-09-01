const express = require("express")
const router = express.Router();

// Get book Page
router.get('/', (req, res, next) => {
    res.send('Welcome to Book Page')
})

module.exports = router;