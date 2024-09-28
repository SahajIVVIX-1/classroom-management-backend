const mongoose = require('mongoose')

const classroomSchema = new mangoose.Schema({
  className: String
})

module.exports = mongoose.model('Classroom',classroomSchema)

