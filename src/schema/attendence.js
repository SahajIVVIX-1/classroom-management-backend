const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    classID: Number,
    AttendType: Boolean,
    studentID: Number,
    date: Date
})

module.exports = mongoose.model('Attendance', attendanceSchema)