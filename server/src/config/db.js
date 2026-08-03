const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.trim() === '' || uri.includes('<username>')) {
    console.warn('\n⚠️ [MongoDB Warning] MONGO_URI is missing or unconfigured in server/.env.');
    console.warn('⚠️ Server running in Mock Database Mode. Data will be served from seed models.\n');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri);
    isConnected = true;
    console.log(`\n✅ [MongoDB Atlas Connected] Host: ${conn.connection.host}\n`);
    return true;
  } catch (error) {
    console.error(`❌ [MongoDB Connection Error] ${error.message}`);
    console.warn('⚠️ Falling back to Mock Data mode.\n');
    return false;
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };
