import React, { useState } from 'react';
import { Bot, Type, Menu, X, Volume2 } from 'lucide-react';
import Logo from './Logo';

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
    <header className="sticky top-0 z-40 bg-whizbang-dark/95 backdrop-blur-md border-b border-whizbang-lightgrey/60 shadow-xl w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 gap-2">
          
          {/* Elegant Brand Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-whizbang-cyan rounded-xl p-1 flex-shrink-0"
            aria-label="Good Whizbang Home Page"
          >
            <Logo />
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-xl text-sm sm:text-base font-extrabold transition-all duration-200 min-h-[38px] whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-whizbang-orange text-white shadow-md shadow-whizbang-orange/30'
                    : 'text-gray-300 hover:text-white hover:bg-whizbang-slate'
                }`}
                aria-current={activeTab === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action & Accessibility Controls */}
          <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
            
            {/* Senior Voice Read-Aloud Assist */}
            <button
              onClick={handleSpeakOverview}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-extrabold min-h-[38px] whitespace-nowrap transition-all ${
                speechActive
                  ? 'bg-teal-500/20 border-teal-400 text-teal-300 animate-pulse'
                  : 'bg-whizbang-slate border-whizbang-lightgrey text-gray-300 hover:text-white'
              }`}
              title="Listen to Senior Audio Overview"
              aria-label="Listen to Senior Audio Overview"
            >
              <Volume2 className="w-3.5 h-3.5 text-teal-400" />
              <span>{speechActive ? 'Stop' : 'Listen'}</span>
            </button>

            {/* Senior Print Size Toggle */}
            <button
              onClick={() => setExtraLargeFont(!extraLargeFont)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-extrabold min-h-[38px] whitespace-nowrap transition-colors ${
                extraLargeFont
                  ? 'bg-whizbang-cyan/20 border-whizbang-cyan text-whizbang-cyan'
                  : 'bg-whizbang-slate border-whizbang-lightgrey text-gray-300 hover:text-white'
              }`}
              title="Toggle Large Senior Print Mode"
              aria-label="Toggle Senior Extra Large Font Size Mode"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{extraLargeFont ? 'Print: XL' : 'Print: Normal'}</span>
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-whizbang-cyan to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-whizbang-dark font-black px-3.5 py-1.5 rounded-xl shadow-md min-h-[38px] text-xs whitespace-nowrap transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-whizbang-cyan ml-1"
              aria-label="Open Whizbang Gemini AI Assistant"
            >
              <Bot className="w-4 h-4 flex-shrink-0" />
              <span>AI Assistant</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-3 py-1.5 bg-whizbang-cyan text-whizbang-dark rounded-xl font-black text-xs min-h-[38px] flex items-center gap-1"
              aria-label="Open AI Chatbot"
            >
              <Bot className="w-4 h-4" />
              <span>AI Assistant</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 bg-whizbang-slate text-white rounded-xl border border-whizbang-lightgrey min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="w-full text-left px-4 py-3 rounded-lg text-lg font-bold bg-whizbang-dark text-teal-300 min-h-[48px] flex items-center gap-2"
            >
              <Volume2 className="w-5 h-5" />
              <span>Senior Voice Read-Aloud Assist</span>
            </button>
            <button
              onClick={() => {
                setExtraLargeFont(!extraLargeFont);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-lg text-lg font-bold bg-whizbang-dark text-whizbang-cyan min-h-[48px] flex items-center gap-2"
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
