import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GeminiChatbot from './components/GeminiChatbot';

import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import ModelDetailPage from './pages/ModelDetailPage';
import PodCustomizerPage from './pages/PodCustomizerPage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';

import { AccessibilityProvider } from './context/AccessibilityContext';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-whizbang-dark text-gray-100 flex flex-col justify-between transition-colors duration-200">
        
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-whizbang-orange text-white font-extrabold px-6 py-3 rounded-xl shadow-2xl outline-none focus:ring-4 focus:ring-whizbang-cyan"
        >
          Skip to main content
        </a>

        {/* Accessible Navigation Header */}
        <Header setIsChatOpen={setIsChatOpen} />

        {/* Main Content Landmark Routes */}
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex="-1">
          <Routes>
            <Route path="/" element={<LandingPage setIsChatOpen={setIsChatOpen} />} />
            <Route path="/models" element={<ProductsPage setIsChatOpen={setIsChatOpen} />} />
            <Route path="/models/:slug" element={<ModelDetailPage setIsChatOpen={setIsChatOpen} />} />
            <Route path="/customizer" element={<PodCustomizerPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/about" element={<AboutPage setIsChatOpen={setIsChatOpen} />} />
            <Route path="/terms" element={<TermsPage setIsChatOpen={setIsChatOpen} />} />
            <Route path="*" element={<LandingPage setIsChatOpen={setIsChatOpen} />} />
          </Routes>
        </main>

        {/* Accessible Footer */}
        <Footer />

        {/* Gemini AI Assistant Chatbot Concierge Widget */}
        <GeminiChatbot
          isOpen={isChatOpen}
          setIsOpen={setIsChatOpen}
        />

      </div>
    </AccessibilityProvider>
  );
}
