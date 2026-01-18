const express = require('express');
const Reading = require('../models/Reading'); // import your model
const router = express.Router();

// GET all readings
router.get('/', async (req, res) => {
  try {
    const readings = await Reading.find();
    res.json(readings); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new reading

router.post('/', async (req, res) => {
  const newReading = new Reading({
    value: req.body.value,
    readingType: req.body.readingType,
    dateTime: req.body.dateTime,
    notes: req.body.notes
  });

  try {
    const savedReading = await newReading.save();
    res.status(201).json(savedReading);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a reading
router.delete('/:id', async (req, res) => {
  try {
    const deletedReading = await Reading.findByIdAndDelete(req.params.id);
    res.json(deletedReading);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;