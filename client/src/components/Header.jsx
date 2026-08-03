import React, { useState } from 'react';
import { Zap, Bot, Type, Menu, X, Volume2 } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, extraLargeFont, setExtraLargeFont, setIsChatOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [speechActive, setSpeechActive] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Office Models' },
    { id: 'about', label: 'About Us' },
    { id: 'terms', label: 'Terms of Service' }
  ];

  const handleSpeakOverview = () => {
    if ('speechSynthesis' in window) {
      if (speechActive) {
        window.speechSynthesis.cancel();
        setSpeechActive(false);
      } else {
        const text = "Welcome to Good Whizbang. We build accessible pre-construction smart offices for active seniors featuring voice climate control, zero threshold entries, and auto tinting glass.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.onend = () => setSpeechActive(false);
        window.speechSynthesis.speak(utterance);
        setSpeechActive(true);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-whizbang-dark/95 backdrop-blur-md border-b border-whizbang-lightgrey/60 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-whizbang-cyan rounded-xl p-1 group flex-shrink-0"
            aria-label="Good Whizbang Home Page"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-whizbang-orange via-amber-500 to-whizbang-cyan flex items-center justify-center shadow-md shadow-whizbang-orange/30 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-2xl tracking-tight text-white block leading-none">
                Good <span className="text-whizbang-orange">Whizbang</span>
              </span>
              <span className="text-[11px] font-semibold text-whizbang-cyan tracking-wider uppercase block mt-1">
                Senior Smart Spaces
              </span>
            </div>
          </button>

          {/* Center Navigation Links - Clean, Unboxed & Seamless */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-xl text-base font-extrabold transition-all duration-200 min-h-[44px] whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-whizbang-orange text-white shadow-lg shadow-whizbang-orange/30'
                    : 'text-gray-300 hover:text-white hover:bg-whizbang-slate'
                }`}
                aria-current={activeTab === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action & Accessibility Controls */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            
            {/* Voice Read-Aloud Assist */}
            <button
              onClick={handleSpeakOverview}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-bold min-h-[44px] whitespace-nowrap transition-all ${
                speechActive
                  ? 'bg-teal-500/20 border-teal-400 text-teal-300 animate-pulse'
                  : 'bg-whizbang-slate border-whizbang-lightgrey text-gray-300 hover:text-white'
              }`}
              title="Listen to Senior Audio Overview"
              aria-label="Listen to Senior Audio Overview"
            >
              <Volume2 className="w-4 h-4 text-teal-400" />
              <span>{speechActive ? 'Stop Voice 🔊' : 'Listen Audio 🎙️'}</span>
            </button>

            {/* Senior Print Size Toggle */}
            <button
              onClick={() => setExtraLargeFont(!extraLargeFont)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-bold min-h-[44px] whitespace-nowrap transition-colors ${
                extraLargeFont
                  ? 'bg-whizbang-cyan/20 border-whizbang-cyan text-whizbang-cyan'
                  : 'bg-whizbang-slate border-whizbang-lightgrey text-gray-300 hover:text-white'
              }`}
              title="Toggle Large Senior Print Mode"
              aria-label="Toggle Senior Extra Large Font Size Mode"
            >
              <Type className="w-4 h-4" />
              <span>{extraLargeFont ? 'Print: XL' : 'Print: Normal'}</span>
            </button>

            {/* Gemini AI Assistant Button */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-whizbang-cyan to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-whizbang-dark font-extrabold px-4 py-2 rounded-xl shadow-md min-h-[44px] whitespace-nowrap transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Open Whizbang Gemini AI Assistant"
            >
              <Bot className="w-5 h-5" />
              <span>AI Assistant</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsChatOpen(true)}
              className="p-2.5 bg-whizbang-cyan text-whizbang-dark rounded-xl font-bold min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open AI Chatbot"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-whizbang-slate text-white rounded-xl border border-whizbang-lightgrey min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-whizbang-slate border-b border-whizbang-lightgrey px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xl font-bold min-h-[48px] flex items-center ${
                activeTab === item.id
                  ? 'bg-whizbang-orange text-white'
                  : 'text-gray-200 hover:bg-whizbang-dark'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-whizbang-lightgrey/50 space-y-2">
            <button
              onClick={() => {
                handleSpeakOverview();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-lg font-bold bg-whizbang-dark text-teal-300 min-h-[48px] flex items-center gap-2"
            >
              <Volume2 className="w-5 h-5" />
              <span>Senior Voice Read-Aloud Assist</span>
            </button>
            <button
              onClick={() => {
                setExtraLargeFont(!extraLargeFont);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-lg font-bold bg-whizbang-dark text-whizbang-cyan min-h-[48px] flex items-center gap-2"
            >
              <Type className="w-5 h-5" />
              <span>Senior Print Size: {extraLargeFont ? 'Extra Large' : 'Standard'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
