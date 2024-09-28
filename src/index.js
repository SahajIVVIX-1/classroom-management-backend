const mongoose = require("mongoose");
const Assignment = require("./schema/assignment");
const Notification = require("./schema/notification");
const Student = require("./schema/student");
const Attendence = require("./schema/attendence");
const Classroom = require("./schema/classroom");

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
