const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { connectDB } = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate Limiting Protection for Public Endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per 15 minutes
  message: { success: false, message: 'Too many requests from this IP, please try again later.' }
});

const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 40,
  message: { success: false, message: 'Chat limit reached for this session. Please try again shortly.' }
});

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Apply rate limiting to API routes
app.use('/api/', apiLimiter);
app.use('/api/chat', chatLimiter);

// Database Connection
connectDB();

// API Routes
app.use('/api/newsletter', require('./routes/newsletterRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/reservations', require('./routes/reservationRoutes'));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Good Whizbang Express API Server',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
});

// Root route handler
app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: system-ui, sans-serif; padding: 2rem; max-width: 600px; margin: 0 auto; line-height: 1.6;">
      <h1 style="color: #FF6B00; font-size: 2rem;">⚡ Good Whizbang Backend Server</h1>
      <p style="font-size: 1.1rem; color: #374151;">The API server is running smoothly!</p>
      <ul style="background: #F3F4F6; padding: 1rem 2rem; border-radius: 8px;">
        <li><strong>Health Check:</strong> <a href="/api/health">/api/health</a></li>
        <li><strong>Products Catalog API:</strong> <a href="/api/products">/api/products</a></li>
        <li><strong>Reservations Lead API:</strong> POST /api/reservations</li>
        <li><strong>Newsletter API:</strong> POST /api/newsletter</li>
        <li><strong>Gemini Chat API:</strong> POST /api/chat</li>
      </ul>
    </div>
  `);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found.` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 [Good Whizbang Server] Running on http://localhost:${PORT}`);
  console.log(`🔗 API Endpoints: http://localhost:${PORT}/api/products & http://localhost:${PORT}/api/reservations\n`);
});
