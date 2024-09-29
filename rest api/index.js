const express = require('express')
const mongoose = require('mongoose')
const Classroom = require('./src/schema/classroom')

const app = express()
mongoose.connect("mongodb+srv://23bit092:KN8Zena5bRfZ8npF@cluster0.ut8qk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ).then(() => {
        console.log("🚀 Connected")
    }).catch((err) => {
        console.log(err)
    })
                
    const PORT = 8000

const ClassRoomRouter = require('./routes/classroom.route')
app.use('/classroom',ClassRoomRouter)

app.use((req,res,next) => {
    const err = new Error("Jay Swaminarayan page is Not Founde")
    err.status = 404
    next(err)
})

//error handler
app.use((err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message:err.message
        }
    })
})

app.listen(PORT, () => {
    console.log("Jay Swaminarayan")
    console.log(`This server is running at PORT: ${PORT}`)
})