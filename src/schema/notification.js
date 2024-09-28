// models/User.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    date: { type: String, required: true },
    announce: { type: String },

});

const notification = mongoose.model('notification', notificationSchema);
module.exports = notification;
