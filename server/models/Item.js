const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  // _id not explcitly defined
  name: { type: String, default: false, required: true },
  description: { type: String },
  pictures: { type: [String] },
  donor_id: { type: String, required: true, lowercase: true },
  category: { type: String, required: true, lowercase: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  blacklisted_by: { type: [String] },
  available: { type: Boolean, default: true },
  donated_to: { type: String },
  donated_on: { type: Date },
}, { autoCreate: true });

itemSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Item', itemSchema);
