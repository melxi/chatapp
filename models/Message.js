const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true, maxlength: 500 }
}, {timestamps: true})

module.exports = mongoose.model('Message', messageSchema)