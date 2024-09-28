const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to the ClassDashboard!");
});

router.post("/", (req, res, next) => {
  res.send("All classes will be Listed here!");
});

router.get("/class", (req, res, next) => {
  res.send("Printing Id ...");
});

router.patch("/:class", (req, res, next) => {
  res.send("Patching Id ...");
});

router.delete("/:class", (req, res, next) => {
  res.send("Deleting Id ...");
});

// router.get((req, res, next) => {});

module.exports = router;
