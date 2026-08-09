const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// In-memory lead storage fallback when MongoDB is not connected
const localReservations = [];

// POST /api/reservations - Submit pre-construction pod reservation inquiry
router.post('/', async (req, res) => {
  try {
    const { productName, productSlug, name, email, phone, accessibilityPack, solarPack, totalEstimatedPrice } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    const payload = {
      productName: productName || 'Custom Office Pod',
      productSlug,
      name,
      email,
      phone: phone || 'Not provided',
      accessibilityPack,
      solarPack,
      totalEstimatedPrice,
      createdAt: new Date()
    };

    try {
      const reservation = new Reservation(payload);
      await reservation.save();
    } catch (dbErr) {
      console.warn('MongoDB not connected, saving to memory fallback:', dbErr.message);
      localReservations.push({ _id: Date.now().toString(), ...payload });
    }

    return res.status(201).json({
      success: true,
      message: 'Reservation inquiry received successfully! Our senior advisor will contact you within 24 hours.'
    });

  } catch (err) {
    console.error('Reservation API Error:', err);
    return res.status(500).json({ success: false, message: 'Failed to process reservation inquiry.' });
  }
});

// GET /api/reservations - List all reservations
router.get('/', async (req, res) => {
  try {
    let list = [];
    try {
      list = await Reservation.find().sort({ createdAt: -1 });
    } catch (err) {
      list = localReservations;
    }
    return res.json({ success: true, count: list.length, data: list });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error retrieving reservations.' });
  }
});

module.exports = router;
