const express = require('express');
const router = express.Router();
const verify = require('../verifyToken');
const User = require('../models/User');

// Get user profile
router.get('/', verify, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update user settings
router.put('/', verify, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          name: req.body.name,
          dueDate: req.body.dueDate,
          preferredUnit: req.body.preferredUnit,
          customTargets: req.body.customTargets
        }
      },
      { new: true }
    ).select('-password');
    res.json(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;