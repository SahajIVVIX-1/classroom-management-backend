const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  subname: String,
  assingmentname: String,
  duedate: Date,
});

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
