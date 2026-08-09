import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bot, Type, Menu, X, Volume2, Sparkles, Sun, Contrast, SlidersHorizontal } from 'lucide-react';
import Logo from './Logo';
import { useAccessibility } from '../context/AccessibilityContext';

export default function Header({ setIsChatOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    fontScale,
    cycleFontScale,
    useDyslexicFont,
    setUseDyslexicFont,
    contrastTheme,
    cycleContrastTheme,
    speechActive,
    handleSpeakText
  } = useAccessibility();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/models', label: 'Office Models' },
    { path: '/customizer', label: 'Pod Customizer' },
    { path: '/calculator', label: 'Financing Calculator' },
    { path: '/about', label: 'About Us' },
    { path: '/terms', label: 'Terms' }
  ];

  const speechOverviewText = "Welcome to Good Whizbang. We build accessible pre-construction smart offices for active seniors featuring voice climate control, zero threshold entries, and auto tinting glass.";

  return (
    <header className="sticky top-0 z-40 bg-whizbang-dark/95 backdrop-blur-md border-b border-whizbang-lightgrey/60 shadow-xl w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* Brand Logo Link */}
          <Link 
            to="/" 
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-whizbang-cyan rounded-xl p-1 flex-shrink-0"
            aria-label="Good Whizbang Home Page"
          >
            <Logo />
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-xl text-sm font-extrabold transition-all duration-200 min-h-[38px] whitespace-nowrap ${
                    isActive
                      ? 'bg-whizbang-orange text-white shadow-md shadow-whizbang-orange/30'
                      : 'text-gray-300 hover:text-white hover:bg-whizbang-slate'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Accessibility & Action Controls */}
          <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
            
            {/* Audio Assist */}
            <button
              onClick={() => handleSpeakText(speechOverviewText)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-extrabold min-h-[38px] transition-all ${
                speechActive
                  ? 'bg-teal-500/20 border-teal-400 text-teal-300 animate-pulse'
                  : 'bg-whizbang-slate border-whizbang-lightgrey text-gray-300 hover:text-white'
              }`}
              title="Listen to Senior Audio Overview"
            >
              <Volume2 className="w-3.5 h-3.5 text-teal-400" />
              <span>{speechActive ? 'Stop' : 'Listen'}</span>
            </button>

            {/* Font Scale Toggle */}
            <button
              onClick={cycleFontScale}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-whizbang-lightgrey bg-whizbang-slate text-whizbang-cyan text-xs font-extrabold min-h-[38px] hover:text-white"
              title="Change Senior Print Font Size"
            >
              <Type className="w-3.5 h-3.5" />
              <span>Print: {fontScale.toUpperCase()}</span>
            </button>

            {/* Dyslexic Font Toggle */}
            <button
              onClick={() => setUseDyslexicFont(!useDyslexicFont)}
              className={`px-2.5 py-1.5 rounded-xl border text-xs font-extrabold min-h-[38px] transition-colors ${
                useDyslexicFont
                  ? 'bg-whizbang-orange/20 border-whizbang-orange text-whizbang-orange'
                  : 'bg-whizbang-slate border-whizbang-lightgrey text-gray-300 hover:text-white'
              }`}
              title="Toggle Dyslexic-Friendly Font Mode"
            >
              Dyslexic Font
            </button>

            {/* Contrast Mode Toggle */}
            <button
              onClick={cycleContrastTheme}
              className="p-2 rounded-xl border border-whizbang-lightgrey bg-whizbang-slate text-amber-400 min-h-[38px] min-w-[38px] flex items-center justify-center hover:bg-whizbang-lightgrey"
              title="Toggle Contrast Mode"
            >
              <Contrast className="w-4 h-4" />
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-whizbang-cyan to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-whizbang-dark font-black px-3.5 py-1.5 rounded-xl shadow-md min-h-[38px] text-xs whitespace-nowrap transition-all border border-whizbang-cyan"
            >
              <Bot className="w-4 h-4 flex-shrink-0" />
              <span>AI Assistant</span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-1.5">
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-3 py-1.5 bg-whizbang-cyan text-whizbang-dark rounded-xl font-black text-xs min-h-[38px] flex items-center gap-1"
            >
              <Bot className="w-4 h-4" />
              <span>AI</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 bg-whizbang-slate text-white rounded-xl border border-whizbang-lightgrey min-h-[38px] min-w-[38px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-whizbang-slate border-b border-whizbang-lightgrey px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-3 rounded-xl text-xl font-bold min-h-[48px] text-gray-200 hover:bg-whizbang-dark"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-whizbang-lightgrey/50 space-y-2">
            <button
              onClick={() => {
                cycleFontScale();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-lg text-lg font-bold bg-whizbang-dark text-whizbang-cyan flex items-center gap-2"
            >
              <Type className="w-5 h-5" /> Print Size: {fontScale.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
