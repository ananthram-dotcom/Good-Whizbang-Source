import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GeminiChatbot from './components/GeminiChatbot';

import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [extraLargeFont, setExtraLargeFont] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Dynamic Document Titles for SEO & Accessibility
  useEffect(() => {
    switch (activeTab) {
      case 'home':
        document.title = "Good Whizbang | Senior-Accessible Smart Offices";
        break;
      case 'products':
        document.title = "Office Models Catalog | Good Whizbang Pre-Construction";
        break;
      case 'about':
        document.title = "About Our Team & Mission | Good Whizbang";
        break;
      case 'terms':
        document.title = "Terms of Service & Accessibility Guarantee | Good Whizbang";
        break;
      default:
        document.title = "Good Whizbang | Senior-Accessible Pre-Construction Spaces";
    }
  }, [activeTab]);

  return (
    <div className={`min-h-screen bg-whizbang-dark text-gray-100 flex flex-col justify-between ${extraLargeFont ? 'text-[20px]' : ''}`}>
      
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-whizbang-orange text-white font-extrabold px-6 py-3 rounded-xl shadow-2xl outline-none focus:ring-4 focus:ring-whizbang-cyan"
      >
        Skip to main content
      </a>

      {/* Accessible Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        extraLargeFont={extraLargeFont}
        setExtraLargeFont={setExtraLargeFont}
        setIsChatOpen={setIsChatOpen}
      />

      {/* Main Content Landmark Area */}
      <main id="main-content" className="flex-1 tab-content-container focus:outline-none" tabIndex="-1">
        {activeTab === 'home' && (
          <LandingPage
            setActiveTab={setActiveTab}
            setIsChatOpen={setIsChatOpen}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            setIsChatOpen={setIsChatOpen}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            setIsChatOpen={setIsChatOpen}
          />
        )}

        {activeTab === 'terms' && (
          <TermsPage
            setIsChatOpen={setIsChatOpen}
          />
        )}
      </main>

      {/* Accessible Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Slide-out Gemini AI Chatbot Concierge Widget */}
      <GeminiChatbot
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />

    </div>
  );
}
