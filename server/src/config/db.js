const mongoose = require('mongoose');
const dns = require('dns');

// Fallback to Google & Cloudflare public DNS if local ISP/router blocks SRV records
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  // Ignore if custom DNS set fails in restricted environments
}

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.trim() === '' || uri.includes('<username>')) {
    console.warn('\n⚠️ [MongoDB Warning] MONGO_URI is unconfigured in server/.env.');
    console.warn('⚠️ Server running in Mock Database Mode. Data will be served from seed models.\n');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    isConnected = true;
    console.log(`\n✅ [MongoDB Atlas Connected] Host: ${conn.connection.host}\n`);
    return true;
  } catch (error) {
    console.error(`❌ [MongoDB Connection Error] ${error.message}`);
    console.warn('⚠️ Server seamlessly operating in Mock Data mode.\n');
    return false;
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };
