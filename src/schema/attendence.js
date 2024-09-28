const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    class_id: Number,
    AttendType: Boolean,
    student_id: Number,
    date: Date
})

module.exports = mongoose.model('Attendance', attendanceSchema)