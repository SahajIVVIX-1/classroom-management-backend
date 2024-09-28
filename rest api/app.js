const express = require("express");
const app = express();

//Calling ./rest api/Routes/Classes.route.js
const ClassRoute = require("./Routes/Classes.route.js");
app.use("/school", ClassRoute);

app.listen(8000, () => {
  console.log("We are listening on Port:8000 ...");
});
