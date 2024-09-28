const mongoose = require("mongoose");
const Assignment = require("./schema/assignment");
const Notification = require("./schema/notification");
const Student = require("./schema/student");
const Attendence = require("./schema/attendence");
const Classroom = require("./schema/classroom");

mongoose
  .connect(
    "mongodb+srv://23bit092:KN8Zena5bRfZ8npF@cluster0.ut8qk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const Assignment = require("./schema/assignment");
const Notification = require("./schema/notification");
const Student = require("./schema/student");
const Attendence = require("./schema/attendence");

mongoose.connect(
    "mongodb+srv://23bit092:KN8Zena5bRfZ8npF@cluster0.ut8qk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("🚀 Connected");
  })
  .catch((err) => {
    console.log(err);
  });

  const student = new Student({name:"Hil Kalathiya",class:"1-A"})
  student.save().then(()=>console.log("Student saved"))

  const attendance = new Attendence({class_id:2,Attend_type:true,student_id:1,date: new Date})
  attendance.save().then(()=>console.log("Attendance saved"))