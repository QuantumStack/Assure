const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema({
  donor_id: { type: String, required: true, lowercase: true },
  user_id: { type: String, required: true, lowercase: true },
  item_id: { type: ObjectId, required: true },
  last_message_sent: { type: Date },
  messages: [{
    timestamp: { type: Date, required: true },
    message: { type: String, required: true },
    sender_type: { type: String, required: true },
  }],
}, { autocreate: true });

module.exports = mongoose.model('Chat', chatSchema);
