const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    priceFormatted: { type: String, required: true },
    sqft: { type: Number, required: true },
    bedrooms: { type: Number, default: 0 },
    bathrooms: { type: Number, default: 1 },
    estCompletion: { type: String, required: true },
    category: { type: String, required: true },
    badge: { type: String, default: 'Pre-Construction' },
    imageUrl: { type: String, required: true },
    accessibilityFeatures: [{ type: String }],
    smartFeatures: [
      {
        name: { type: String },
        description: { type: String },
        icon: { type: String },
        enabledByDefault: { type: Boolean, default: true }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
