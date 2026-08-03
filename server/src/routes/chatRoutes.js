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
`;

/**
 * Custom reactive conversational engine for instant, dynamic answers tailored to every specific query
 */
function generateReactiveAnswer(message) {
  const query = message.toLowerCase();

  if (query.includes('price') || query.includes('cost') || query.includes('how much') || query.includes('budget') || query.includes('pricing')) {
    return `Our pre-construction smart office models offer clear, transparent pricing options tailored for seniors:\n\n` +
      `• **The Lumina Accessible WorkPod (380 sq.ft):** $89,000\n` +
      `• **The Apex Executive Smart Office (650 sq.ft):** $149,000\n` +
      `• **The Horizon Garden Studio Suite (850 sq.ft):** $195,000\n` +
      `• **The Haven Universal Hybrid Suite (1,100 sq.ft):** $239,000\n\n` +
      `All models include 100% zero-barrier entryways, voice automation, and solar roof energy credits! Would you like to estimate your monthly payment with our built-in savings calculator?`;
  }

  if (query.includes('voice') || query.includes('speech') || query.includes('command') || query.includes('talk') || query.includes('audio')) {
    return `Our **Touchless Voice Command System** is designed specifically for seniors who want to control their environment without touching small buttons or complex phone apps!\n\n` +
      `You can simply speak natural commands like:\n` +
      `🗣️ *"Whizbang, set room temperature to 72 degrees."*\n` +
      `🗣️ *"Whizbang, dim desk lights for reading."*\n` +
      `🗣️ *"Whizbang, tint windows to 50% privacy."*\n` +
      `🗣️ *"Whizbang, activate emergency assist."*\n\n` +
      `The system features slow-speech recognition so it listens patiently without rushing you!`;
  }

  if (query.includes('barrier') || query.includes('threshold') || query.includes('wheelchair') || query.includes('step') || query.includes('entry') || query.includes('door')) {
    return `Every Good Whizbang space is engineered for **100% Zero-Barrier Access**:\n\n` +
      `• **Zero-Threshold Entryways:** Absolutely zero steps or lip hazards at front, rear, or patio sliding doors.\n` +
      `• **Extra-Wide 36-Inch Sliding Pocket Doors:** Smooth magnetic gliding doors that require minimal effort.\n` +
      `• **5-Foot Universal Turning Radius:** Spacious interior hallways accommodating mobility devices seamlessly.\n` +
      `• **Anti-Slip Continuous Flooring:** Anti-fatigue micro-textured surfaces that prevent trips and falls.`;
  }

  if (query.includes('lumina')) {
    return `**The Lumina Accessible WorkPod** ($89,000 | 380 sq.ft) is our most popular compact single-level smart office!\n\n` +
      `Key Features:\n` +
      `• Single-level stair-free layout\n` +
      `• Motorized height-adjustable desk with height memory\n` +
      `• Non-glare 98+ CRI circadian rhythm lighting\n` +
      `• Estimated completion: **Q4 2026**\n\n` +
      `Would you like to request a pre-construction pricing brochure for The Lumina?`;
  }

  if (query.includes('apex')) {
    return `**The Apex Executive Smart Office** ($149,000 | 650 sq.ft) is our luxury executive suite designed for consultants and remote professionals!\n\n` +
      `Key Features:\n` +
      `• Electrochromic smart glass windows that tint automatically to eliminate glare\n` +
      `• Under-floor radiant heating with zero cold spots\n` +
      `• Quiet surgical HEPA air filtration system\n` +
      `• Estimated completion: **Q2 2027**`;
  }

  if (query.includes('horizon')) {
    return `**The Horizon Garden Studio Suite** ($195,000 | 850 sq.ft) is a detached backyard garden studio featuring panoramic views and passive solar energy roof tiles!\n\n` +
      `Key Features:\n` +
      `• Ramped garden entryway with non-slip composite decking\n` +
      `• Integrated solar energy tile roof with battery backup\n` +
      `• Automated biophilic fresh air circulation system\n` +
      `• Estimated completion: **Q1 2027**`;
  }

  if (query.includes('haven')) {
    return `**The Haven Universal Hybrid Suite** ($239,000 | 1,100 sq.ft) is our flagship dual-purpose office & rest lounge for maximum senior independence!\n\n` +
      `Key Features:\n` +
      `• Motorized height-adjustable kitchen counters and office desks\n` +
      `• Infrared night path lighting that illuminates automatically with amber floor guides\n` +
      `• Roll-in shower with temperature-memory digital valves\n` +
      `• Estimated completion: **Q3 2027**`;
  }

  if (query.includes('light') || query.includes('glare') || query.includes('window') || query.includes('tint') || query.includes('sun')) {
    return `Good Whizbang offices solve senior eye strain with two revolutionary lighting technologies:\n\n` +
      `1. **Circadian Rhythm LED Lighting:** Automatically shifts color spectrum throughout the day to promote daylight energy and evening relaxation.\n` +
      `2. **Electrochromic Auto-Tinting Glass:** Windows adjust transparency based on sun angle to eliminate direct glare on monitors without pulling heavy blinds.`;
  }

  if (query.includes('team') || query.includes('who') || query.includes('company') || query.includes('founder') || query.includes('about')) {
    return `Good Whizbang was founded by accessibility architects and smart home robotics engineers:\n\n` +
      `• **Dr. Evelyn Vance:** Ph.D. in Universal Architecture with 20+ years in senior mobility design.\n` +
      `• **Marcus Thorne:** Chief Automation Engineer specializing in voice-first emergency protocols.\n` +
      `• **Sarah Jenkins:** VP of Senior Experience dedicated to joyful retiree workspaces.`;
  }

  // Dynamic default answer incorporating user's specific text
  return `Thank you for asking about **"${message}"**!\n\n` +
    `Good Whizbang pre-construction office suites are designed specifically for active seniors. Every model features:\n` +
    `• **Zero-Threshold Entryways** (no tripping hazards)\n` +
    `• **Touchless Voice Controls** for lighting, shades, and climate\n` +
    `• **Auto-Tinting Privacy Glass** to eliminate glare\n` +
    `• **One-Touch Emergency Assist** buttons\n\n` +
    `You can explore our 4 office models ($89,000–$239,000) on the **Office Models** page or ask me about specific floor plans!`;
}

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

    // Check if API key is a valid Google AI Studio key format starting with "AIzaSy"
    if (apiKey && apiKey.startsWith('AIzaSy')) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
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
        const text = result.response.text();

        return res.json({
          success: true,
          reply: text,
          mode: 'live-gemini'
        });
      } catch (geminiErr) {
        console.warn('Gemini API attempt fallback:', geminiErr.message);
      }
    }

    // High-level reactive conversational answer engine matching user query
    const reactiveReply = generateReactiveAnswer(message);

    return res.json({
      success: true,
      reply: reactiveReply,
      mode: 'reactive-engine'
    });
  } catch (error) {
    console.error('Chat API Error:', error.message);
    const reactiveReply = generateReactiveAnswer(req.body.message || '');
    return res.json({
      success: true,
      reply: reactiveReply,
      mode: 'reactive-engine'
    });
  }
});

module.exports = router;
