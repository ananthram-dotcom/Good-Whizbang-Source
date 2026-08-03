import React, { useState } from 'react';
import { Zap, Bot, Type, Menu, X, Sun, Volume2 } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, extraLargeFont, setExtraLargeFont, setIsChatOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Office Models' },
    { id: 'about', label: 'About Us' },
    { id: 'terms', label: 'Terms of Service' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-whizbang-dark/95 backdrop-blur-md border-b border-whizbang-lightgrey/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-whizbang-cyan rounded-lg p-1"
            aria-label="Good Whizbang Home Page"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-whizbang-orange via-amber-500 to-whizbang-cyan flex items-center justify-center shadow-md shadow-whizbang-orange/20">
              <Zap className="w-7 h-7 text-white fill-white" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-white block leading-none">
                Good <span className="text-whizbang-orange">Whizbang</span>
              </span>
              <span className="text-xs font-semibold text-whizbang-cyan tracking-wider uppercase block mt-1">
                Senior Smart Spaces
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 rounded-lg text-lg font-semibold transition-all duration-200 min-h-[48px] ${
                  activeTab === item.id
                    ? 'bg-whizbang-orange text-white shadow-md shadow-whizbang-orange/30'
                    : 'text-gray-200 hover:text-white hover:bg-whizbang-slate'
                }`}
                aria-current={activeTab === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Accessibility & Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Font Size Toggle for Senior Readability */}
            <button
              onClick={() => setExtraLargeFont(!extraLargeFont)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border min-h-[48px] text-sm font-bold transition-colors ${
                extraLargeFont
                  ? 'bg-whizbang-cyan/20 border-whizbang-cyan text-whizbang-cyan'
                  : 'bg-whizbang-slate border-whizbang-lightgrey text-gray-300 hover:text-white'
              }`}
              title="Toggle Large Senior Print Mode"
              aria-label="Toggle Senior Extra Large Font Size Mode"
            >
              <Type className="w-5 h-5" />
              <span>{extraLargeFont ? 'Print: XL' : 'Print: Normal'}</span>
            </button>

            {/* AI Concierge Slide-Out Trigger */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-whizbang-cyan to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-whizbang-dark font-extrabold px-5 py-2.5 rounded-xl shadow-md min-h-[48px] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Open Whizbang Gemini AI Assistant"
            >
              <Bot className="w-6 h-6" />
              <span>AI Assistant</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsChatOpen(true)}
              className="p-2.5 bg-whizbang-cyan text-whizbang-dark rounded-lg font-bold min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Open AI Chatbot"
            >
              <Bot className="w-6 h-6" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-whizbang-slate text-white rounded-lg border border-whizbang-lightgrey min-h-[48px] min-w-[48px] flex items-center justify-center"
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
              className={`w-full text-left px-4 py-3 rounded-lg text-xl font-bold min-h-[48px] flex items-center ${
                activeTab === item.id
                  ? 'bg-whizbang-orange text-white'
                  : 'text-gray-200 hover:bg-whizbang-dark'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-whizbang-lightgrey/50">
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
