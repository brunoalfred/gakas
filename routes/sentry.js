const express = require("express");
const router = express.Router();

router.get("/", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

  module.exports = router;