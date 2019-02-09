const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  _id: { type: String, required: true, lowercase: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
}, { autocreate: true });

module.exports = mongoose.model('Donors', donorSchema);
