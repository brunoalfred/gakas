const express = require("express");
const { storeBook, listBooks } = require("../controllers/bookController");
const router = express.Router();



// Get books Page
router.get("/",listBooks);
router.post("/",storeBook);


module.exports = router;
