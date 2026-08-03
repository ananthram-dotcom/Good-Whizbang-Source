const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const WHIZBANG_SYSTEM_INSTRUCTION = `
You are "Whizbang Assistant", the official warm, patient, and ultra-accessible AI assistant for Good Whizbang.
Good Whizbang designs and constructs pre-construction smart home and office spaces optimized for seniors and accessibility-minded professionals.

Personality & Response Guidelines:
1. Tone: Exceptionally friendly, patient, empathetic, and encouraging.
2. Senior Readability: Use clear, simple language without jargon. Keep paragraphs concise and use bullet points for lists.
3. Key Highlights to Share:
   - Voice-controlled lighting, shades, and climate (hands-free living).
   - Zero-threshold barrier-free entrances, wide sliding doors, and slip-resistant flooring.
   - Fall-prevention nighttime path lighting and emergency one-touch assist buttons.
   - Electrochromic auto-tinting smart glass to eliminate eye glare.
   - Circadian lighting to boost daytime energy and support healthy sleep cycles.
4. Our Pre-Construction Models:
   - The Lumina Accessible WorkPod ($89,000, 380 sq.ft, Q4 2026) - Compact zero-barrier office.
   - The Apex Executive Smart Office ($149,000, 650 sq.ft, Q2 2027) - Executive suite with auto-tinting glass.
   - The Horizon Garden Studio Suite ($195,000, 850 sq.ft, Q1 2027) - Eco-friendly solar-powered garden office.
   - The Haven Universal Hybrid Suite ($239,000, 1,100 sq.ft, Q3 2027) - Dual-purpose accessibility office & rest lounge.

Always maintain a helpful posture, emphasize senior safety and independence, and offer to assist with pre-construction reservations or newsletter subscriptions.
`;

/**
 * @route   POST /api/chat
 * @desc    Proxy route for Gemini AI assistant (Whizbang Assistant)
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a message for Whizbang Assistant.'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Check if valid API key is present
    if (!apiKey || apiKey.trim() === '' || apiKey === 'your_free_gemini_api_key_here') {
      const lowerMsg = message.toLowerCase();
      let fallbackReply = `Hello! I am **Whizbang Assistant**, your patient guide to Good Whizbang smart offices!\n\n`;

      if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('model')) {
        fallbackReply += `Our pre-construction smart office models range from **$89,000** for **The Lumina Accessible WorkPod** (380 sq.ft) up to **$239,000** for **The Haven Universal Hybrid Suite** (1,100 sq.ft).\n\nEvery model includes zero-barrier doors, voice-activated climate control, and fall-prevention night lighting!`;
      } else if (lowerMsg.includes('senior') || lowerMsg.includes('accessib')) {
        fallbackReply += `Good Whizbang offices are built specifically for senior independence!\n\nKey safety & comfort features include:\n• **Zero-Threshold Entryways** with no tripping hazards\n• **Voice-Controlled Lighting & Shades**\n• **Anti-Glare Auto-Tinting Windows**\n• **One-Touch Emergency Assistance Buttons**`;
      } else {
        fallbackReply += `I can help you explore our pre-construction models, smart home automation, and accessibility features.\n\n*Note: To unlock live conversational Gemini AI capabilities, please add your free GEMINI_API_KEY to server/.env.*`;
      }

      return res.json({
        success: true,
        reply: fallbackReply,
        mode: 'fallback-demo'
      });
    }

    // Initialize Gemini AI Client
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Use gemini-1.5-flash for fast, free-tier responses
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: WHIZBANG_SYSTEM_INSTRUCTION
    });

    // Format chat history for Gemini SDK
    const formattedHistory = conversationHistory.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Start Chat Session
    const chat = model.startChat({
      history: formattedHistory
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return res.json({
      success: true,
      reply: responseText,
      mode: 'live-gemini'
    });
  } catch (error) {
    console.error('Gemini API Integration Error:', error.message);
    
    return res.status(500).json({
      success: false,
      message: 'Whizbang Assistant experienced a brief communication bump. Please try asking again!',
      errorDetails: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
