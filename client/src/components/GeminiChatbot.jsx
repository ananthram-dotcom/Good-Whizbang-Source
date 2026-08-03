import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw, User, Volume2 } from 'lucide-react';

export default function GeminiChatbot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am **Whizbang Assistant**, your reactive AI concierge for Good Whizbang pre-construction smart office spaces.\n\nHow can I help you explore our senior-friendly office models, custom floor plans, or automation features today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState(null);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What smart features assist seniors?",
    "What are the office model prices?",
    "How does voice climate control work?",
    "Tell me about zero-barrier entries"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Prevent background body horizontal scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [messages, isOpen]);

  const speakText = (msgId, text) => {
    if ('speechSynthesis' in window) {
      if (speakingMsgId === msgId) {
        window.speechSynthesis.cancel();
        setSpeakingMsgId(null);
      } else {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/\*\*/g, '').replace(/•/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 0.9;
        utterance.onend = () => setSpeakingMsgId(null);
        window.speechSynthesis.speak(utterance);
        setSpeakingMsgId(msgId);
      }
    }
  };

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || input;
    if (!query || !query.trim() || loading) return;

    const userMsg = { id: Date.now().toString(), sender: 'user', text: query.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query.trim(),
          conversationHistory: historyPayload
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessages(prev => [
          ...prev,
          { id: (Date.now() + 1).toString(), sender: 'bot', text: data.reply }
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Good Whizbang pre-construction offices feature zero-threshold sliding doors, auto-tinting smart glass, and voice-governed climate controls! How else can I assist your home search?'
          }
        ]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Thank you for asking about "${query}". Good Whizbang offers senior-accessible office models ranging from $89,000 to $239,000 with 100% zero-barrier entryways and voice environmental controls!`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      
      {/* Centered Floating Modal Widget (Zero Horizontal Scrollbar Risk) */}
      <div 
        className="w-full max-w-xl bg-whizbang-slate text-white rounded-3xl border-2 border-whizbang-cyan shadow-2xl flex flex-col max-h-[90vh] h-[650px] overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-label="Whizbang Gemini AI Assistant"
      >
        {/* Chat Modal Header */}
        <div className="p-4 sm:p-5 bg-whizbang-dark border-b border-whizbang-lightgrey flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-whizbang-cyan to-teal-400 flex items-center justify-center text-whizbang-dark font-black shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-lg sm:text-xl text-white">Whizbang AI Assistant</h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-whizbang-cyan/20 text-whizbang-cyan text-xs font-bold border border-whizbang-cyan/40">
                  <Sparkles className="w-3 h-3" /> Live Reactive AI
                </span>
              </div>
              <p className="text-xs text-gray-300">Senior Accessibility Guide</p>
            </div>
          </div>

          <button
            onClick={() => {
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              setIsOpen(false);
            }}
            className="p-2 text-gray-300 hover:text-white bg-whizbang-slate hover:bg-whizbang-lightgrey rounded-xl border border-whizbang-lightgrey min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close Whizbang Assistant Chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-whizbang-cyan text-whizbang-dark flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-3.5 sm:p-4 rounded-2xl text-base sm:text-lg leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-whizbang-orange text-white rounded-tr-none font-semibold shadow-md'
                    : 'bg-whizbang-dark text-gray-100 border border-whizbang-lightgrey rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-line">
                  {msg.text}
                </div>

                {/* Speak Bot Response Aloud Button */}
                {msg.sender === 'bot' && (
                  <button
                    onClick={() => speakText(msg.id, msg.text)}
                    className={`mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      speakingMsgId === msg.id
                        ? 'bg-teal-500 text-white animate-pulse'
                        : 'bg-whizbang-slate hover:bg-whizbang-lightgrey text-whizbang-cyan border border-whizbang-cyan/30'
                    }`}
                    title="Read answer aloud"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{speakingMsgId === msg.id ? 'Stop Speaking' : 'Read Aloud 🔊'}</span>
                  </button>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-whizbang-orange text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-whizbang-cyan font-bold p-3.5 bg-whizbang-dark/80 rounded-2xl border border-whizbang-cyan/40 animate-pulse">
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Whizbang AI is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2.5 bg-whizbang-dark/90 border-t border-whizbang-lightgrey/40">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Tap Suggested Question:</p>
          <div className="flex flex-wrap gap-1.5">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-xs bg-whizbang-slate hover:bg-whizbang-lightgrey text-whizbang-cyan hover:text-white border border-whizbang-cyan/30 px-2.5 py-1 rounded-lg transition-colors font-medium text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="p-3.5 bg-whizbang-dark border-t border-whizbang-lightgrey">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Whizbang Assistant anything..."
              className="flex-1 bg-whizbang-slate border border-whizbang-lightgrey focus:border-whizbang-cyan text-white px-4 py-2.5 rounded-xl focus:outline-none text-base min-h-[44px]"
              aria-label="Message to Whizbang AI Assistant"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold p-2.5 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center transition-all disabled:opacity-40"
              aria-label="Send Message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
