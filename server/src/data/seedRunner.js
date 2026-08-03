const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');

try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {}

const Product = require('../models/Product');
const seedProducts = require('./seedProducts');

dotenv.config({ path: __dirname + '/../../.env' });

const seedDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error('❌ MONGO_URI missing in server/.env');
      process.exit(1);
    }

    console.log('Connecting to live MongoDB Atlas cluster...');
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log('✅ Connected to MongoDB Atlas!');

    await Product.deleteMany({});
    console.log('Cleared existing product records.');

    const inserted = await Product.insertMany(seedProducts);
    console.log(`\n🎉 Successfully seeded ${inserted.length} pre-construction models into your live MongoDB Atlas database!`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDB();
