const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Getting List of All Classes...");
});

module.exports = router;
