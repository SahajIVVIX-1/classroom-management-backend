const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: String,
    class_id: Number
})

module.exports = mongoose.model("Student", studentSchema)