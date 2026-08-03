const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');
const { getDBStatus } = require('../config/db');

// In-memory fallback subscribers list for mock mode
const mockSubscribers = [];

/**
 * @route   POST /api/newsletter
 * @desc    Subscribe an email address to Good Whizbang updates
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Basic email validation regex
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address format. Please check and try again.'
      });
    }

    if (getDBStatus()) {
      // MongoDB Atlas mode
      const existing = await Subscriber.findOne({ email: cleanEmail });
      if (existing) {
        return res.status(409).json({
          success: false,
          message: 'Thank you! This email is already subscribed to Good Whizbang updates.'
        });
      }

      const subscriber = new Subscriber({ email: cleanEmail });
      await subscriber.save();
    } else {
      // Mock Data mode
      if (mockSubscribers.includes(cleanEmail)) {
        return res.status(409).json({
          success: false,
          message: 'Thank you! This email is already subscribed to Good Whizbang updates.'
        });
      }
      mockSubscribers.push(cleanEmail);
    }

    return res.status(201).json({
      success: true,
      message: 'Welcome to Good Whizbang! You have successfully subscribed to our newsletter.',
      email: cleanEmail
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while processing subscription. Please try again later.'
    });
  }
});

module.exports = router;
