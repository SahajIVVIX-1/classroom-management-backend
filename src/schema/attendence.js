const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    class_id: Number,
    Attend_type: Boolean,
    student_id: Number,
    date: Date
})

module.exports = mongoose.model('Attendance', attendanceSchema)