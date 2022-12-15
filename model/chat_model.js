const mongoose = require('mongoose');
const db = require('../config/db');

const chatSchema = new mongoose.Schema({
  name: {
    type: String
  },
  message: {
    type: String
  }
});

const chatModel = db.model('chats', chatSchema);
module.exports = chatModel;