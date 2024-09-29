const express = require("express"); // express module
const app = express(); // express app

const mongoose = require("mongoose"); // mongoose module

// Database configuration
mongoose
  .connect(
    "mongodb+srv://23bit092:KN8Zena5bRfZ8npF@cluster0.ut8qk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("🚀 Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Calling ./rest api/Routes/Classes.route.js
const ClassRoute = require("./Routes/Classes.route");
app.use("/school", ClassRoute);

app.listen(8000, () => {
  console.log("We are listening on Port:8000 ...");
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      error: "Not Found",
      message: err.message,
    },
  });
});
