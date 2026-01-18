const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  readingType: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Reading', readingSchema);
