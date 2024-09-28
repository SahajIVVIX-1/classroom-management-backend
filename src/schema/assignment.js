const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  subname: String,
  assingmentName: String,
  dueDate: Date,
});

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
