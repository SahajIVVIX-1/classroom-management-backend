const mongoose = require('mongoose')

const classroomSchema = new mangoose.Schema({
  className: String
})

const Classroom =mongoose.model('Classroom',classroomSchema)

module.exports = Classroom