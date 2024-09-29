const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send("getting the list of all Classrooms.....")
})

router.post('/', (req, res, next) => {
    res.send("Creating a new Classroom.....")
    // next(new Error("cannot get a list of all Classrooms"))
})

router.get('/:id', (req, res, next) => {
    res.send(`getting Classroom with id: ${req.params.id}`)
})
router.patch('/:id', (req, res, next) => {
    res.send(`updating a new Classroom with id: ${req.params.id}`)
})
router.delete('/:id', (req, res, next) => {
    res.send(`deleting a Classroom with id: ${req.params.id}`)
})

module.exports = router