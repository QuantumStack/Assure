const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true, lowercase: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
}, { autoCreate: true });

module.exports = mongoose.model('User', userSchema);
