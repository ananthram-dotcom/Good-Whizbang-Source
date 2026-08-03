const express = require('express');
const router = express.Router();

/**
 * @route   POST /api/chat
 * @desc    Proxy route for Gemini AI assistant (Whizbang Assistant)
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a message for Whizbang Assistant.'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey.trim() === '' || apiKey === 'your_free_gemini_api_key_here') {
      // Mock response if GEMINI_API_KEY is not configured yet
      return res.json({
        success: true,
        reply: `Hello! I am **Whizbang Assistant**, your friendly guide to Good Whizbang pre-construction smart office spaces! 

I noticed your Gemini API Key is pending setup in the \`server/.env\` file. Once configured in Step 3, I will connect directly to Google's live Gemini AI model to answer all your questions about automated climate, circadian lighting, zero-barrier entryways, and model pricing!

You asked: "${message}"

How else can I help you explore our senior-friendly office models today?`,
        mode: 'mock'
      });
    }

    // In STEP 3, live Gemini AI SDK call will handle this.
    return res.json({
      success: true,
      reply: `Whizbang Assistant ready for Gemini integration in Step 3! Received: "${message}"`
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    return res.status(500).json({
      success: false,
      message: 'Whizbang Assistant is currently offline. Please try again shortly.'
    });
  }
});

module.exports = router;
