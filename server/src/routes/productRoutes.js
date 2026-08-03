const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const seedProducts = require('../data/seedProducts');
const { getDBStatus } = require('../config/db');

/**
 * @route   GET /api/products
 * @desc    Get all pre-construction office models
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    if (getDBStatus()) {
      const products = await Product.find({}).sort({ startingPrice: 1 });
      if (products && products.length > 0) {
        return res.json({ success: true, count: products.length, data: products });
      }
    }

    // Fallback to seed products if DB is empty or in mock mode
    return res.json({
      success: true,
      count: seedProducts.length,
      data: seedProducts,
      source: getDBStatus() ? 'seed-fallback' : 'mock'
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve products. Serving offline catalog.',
      data: seedProducts
    });
  }
});

/**
 * @route   GET /api/products/:id
 * @desc    Get single office model by MongoDB ID or slug
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      const isMongoId = id.match(/^[0-9a-fA-F]{24}$/);
      const query = isMongoId ? { _id: id } : { slug: id };
      const product = await Product.findOne(query);
      if (product) {
        return res.json({ success: true, data: product });
      }
    }

    // Fallback search in seed products
    const seedItem = seedProducts.find(
      (item) => item._id === id || item.slug === id
    );

    if (seedItem) {
      return res.json({ success: true, data: seedItem });
    }

    return res.status(404).json({
      success: false,
      message: `Product with identifier '${id}' was not found.`
    });
  } catch (error) {
    console.error(`Error fetching product ${req.params.id}:`, error);
    return res.status(500).json({
      success: false,
      message: 'Server error retrieving product details.'
    });
  }
});

module.exports = router;
