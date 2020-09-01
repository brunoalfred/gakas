const express = require("express");
const router = express.Router();
const authenticateToken = require('../middleware/authToken')
/* Get inbox Page */

router.get("/", authenticateToken, (req, res) => {
  res.send("You are authenticated and authorized Nigga");
});

module.exports = router;
