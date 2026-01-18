// server/models/GlucoseReading.js
const mongoose = require('mongoose');

const GlucoseReadingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  value: {
    type: Number,
    required: true,
    min: 30,
    max: 500
  },
  readingType: {
    type: String,
    enum: [
      'fasting',
      'postBreakfast1hr',
      'postBreakfast2hr',
      'postLunch1hr',
      'postLunch2hr',
      'postDinner1hr',
      'postDinner2hr',
      'bedtime'
    ],
    required: true
  },
  dateTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['low', 'normal', 'high'],
    required: true
  },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('GlucoseReading', GlucoseReadingSchema);