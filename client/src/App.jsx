import React, { useState } from 'react';
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

  return (
    <div className={`min-h-screen bg-whizbang-dark text-gray-100 flex flex-col justify-between ${extraLargeFont ? 'text-[20px]' : ''}`}>
      
      {/* Accessible Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        extraLargeFont={extraLargeFont}
        setExtraLargeFont={setExtraLargeFont}
        setIsChatOpen={setIsChatOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1">
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
