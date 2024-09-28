const mongoose = require("mongoose");
let Assignment = require("./schema/assignment");

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
