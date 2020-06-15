const messagesRouter =  require('express').Router()
const Message = require('../models/Message')

messagesRouter.get('/', async (req, res) => {
    try {
        const messages = await Message.find({})
        res.status(200).json(messages)
    } catch (error) {
        res.status(404).json({msg: 'Messages not found'})
    }
})

messagesRouter.post('/', async (req, res) => {
    const { name, content } = req.body;

    const message = Message({
        name,
        content
    })

    
    try {
        const savedMessage = await message.save();
        res.status(201).json(savedMessage)
    } catch (error) {
        res.status(400).json({msg: 'Failed to send a message'})
    }
    
})

module.exports = messagesRouter