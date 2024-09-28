// models/User.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    date: { type: String, required: true },
    announce: { type: String },
    class_id: Number

});

const notification = mongoose.model('notification', notificationSchema);
module.exports = notification;
