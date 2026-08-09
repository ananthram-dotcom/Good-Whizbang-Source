import React, { createContext, useContext, useState } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  // Font scale: 'normal' (100%), 'large' (115%), 'xl' (130%), 'xxl' (145%)
  const [fontScale, setFontScale] = useState('normal');
  // Font style: 'default' | 'dyslexic'
  const [useDyslexicFont, setUseDyslexicFont] = useState(false);
  // Theme: 'default' | 'high-contrast-dark' | 'warm-paper'
  const [contrastTheme, setContrastTheme] = useState('default');
  // Speech audio state
  const [speechActive, setSpeechActive] = useState(false);

  const cycleFontScale = () => {
    setFontScale(prev => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xl';
      if (prev === 'xl') return 'xxl';
      return 'normal';
    });
  };

  const cycleContrastTheme = () => {
    setContrastTheme(prev => {
      if (prev === 'default') return 'high-contrast-dark';
      if (prev === 'high-contrast-dark') return 'warm-paper';
      return 'default';
    });
  };

  const handleSpeakText = (text) => {
    if ('speechSynthesis' in window) {
      if (speechActive) {
        window.speechSynthesis.cancel();
        setSpeechActive(false);
      } else {
        window.speechSynthesis.cancel();
        const clean = text.replace(/\*\*/g, '').replace(/#/g, '');
        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.rate = 0.88;
        utterance.onend = () => setSpeechActive(false);
        window.speechSynthesis.speak(utterance);
        setSpeechActive(true);
      }
    }
  };

  const getFontSizeClass = () => {
    switch (fontScale) {
      case 'large': return 'text-[110%]';
      case 'xl': return 'text-[125%]';
      case 'xxl': return 'text-[140%]';
      default: return '';
    }
  };

  const getThemeClass = () => {
    switch (contrastTheme) {
      case 'high-contrast-dark':
        return 'bg-black text-yellow-300 contrast-125';
      case 'warm-paper':
        return 'bg-[#FDFBF7] text-[#1A1A1A] contrast-100';
      default:
        return 'bg-whizbang-dark text-gray-100';
    }
  };

  return (
    <AccessibilityContext.Provider value={{
      fontScale,
      setFontScale,
      cycleFontScale,
      useDyslexicFont,
      setUseDyslexicFont,
      contrastTheme,
      setContrastTheme,
      cycleContrastTheme,
      speechActive,
      handleSpeakText,
      getFontSizeClass,
      getThemeClass
    }}>
      <div className={`${getFontSizeClass()} ${useDyslexicFont ? 'font-sans tracking-wide space-y-1' : ''}`}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
