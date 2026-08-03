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
 * @desc    Proxy route for live Gemini AI chatbot assistant
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

    if (!apiKey || apiKey.trim() === '') {
      return res.json({
        success: true,
        reply: "Hello! I am Whizbang Assistant. Please ensure your GEMINI_API_KEY is configured in server/.env to unlock live conversational AI.",
        mode: 'mock'
      });
    }

    // Initialize Google Gemini AI client with user API key
    const genAI = new GoogleGenerativeAI(apiKey);

    // Try primary models: gemini-1.5-flash or gemini-2.0-flash with fallback
    let responseText = '';

    try {
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: WHIZBANG_SYSTEM_INSTRUCTION
      });

      const formattedHistory = conversationHistory
        .filter(m => m.text && m.text.trim())
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        }));

      const chat = model.startChat({ history: formattedHistory });
      const result = await chat.sendMessage(message);
      responseText = result.response.text();
    } catch (modelErr) {
      console.warn('Primary Gemini model attempt fallback:', modelErr.message);
      
      // Fallback model attempt: gemini-1.5-pro
      const fallbackModel = genAI.getGenerativeModel({
        model: 'gemini-1.5-pro',
        systemInstruction: WHIZBANG_SYSTEM_INSTRUCTION
      });
      const result = await fallbackModel.generateContent(`${WHIZBANG_SYSTEM_INSTRUCTION}\n\nUser Question: ${message}`);
      responseText = result.response.text();
    }

    return res.json({
      success: true,
      reply: responseText,
      mode: 'live-gemini'
    });
  } catch (error) {
    console.error('Gemini Chatbot API Error:', error.message);

    // Friendly senior fallback response if API key fails authentication or quota limit
    const lower = req.body.message ? req.body.message.toLowerCase() : '';
    let fallbackReply = `Hello! I am **Whizbang Assistant**, your patient guide to Good Whizbang smart offices!\n\n`;

    if (lower.includes('price') || lower.includes('cost') || lower.includes('model')) {
      fallbackReply += `Our pre-construction smart office models range from **$89,000** for **The Lumina Accessible WorkPod** (380 sq.ft) up to **$239,000** for **The Haven Universal Hybrid Suite** (1,100 sq.ft).\n\nEvery model includes zero-barrier doors, voice-activated climate control, and fall-prevention night lighting!`;
    } else if (lower.includes('senior') || lower.includes('accessib')) {
      fallbackReply += `Good Whizbang offices are built specifically for senior independence!\n\nKey safety & comfort features include:\n• **Zero-Threshold Entryways** with no tripping hazards\n• **Voice-Controlled Lighting & Shades**\n• **Anti-Glare Auto-Tinting Windows**\n• **One-Touch Emergency Assistance Buttons**`;
    } else {
      fallbackReply += `I can help you explore our pre-construction models, smart home automation, and accessibility features! How can I assist your home search today?`;
    }

    return res.json({
      success: true,
      reply: fallbackReply,
      mode: 'fallback'
    });
  }
});

module.exports = router;
