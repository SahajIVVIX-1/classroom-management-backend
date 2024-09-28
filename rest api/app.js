const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.send("Welcome to the Home Page!");
});

app.post("/", (req, res, next) => {});

app.delete("/", (req, res, next) => {});

app.listen(8000, () => {
  console.log("We are listening on Port:8000 ...");
});
