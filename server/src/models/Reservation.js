const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productSlug: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  accessibilityPack: { type: String },
  solarPack: { type: String },
  totalEstimatedPrice: { type: String },
  status: { type: String, enum: ['Pending', 'Contacted', 'Closed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', reservationSchema);
