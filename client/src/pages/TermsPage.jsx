import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

export default function TermsPage({ setIsChatOpen }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center space-y-4 border-b border-whizbang-lightgrey/60 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-whizbang-cyan/20 border border-whizbang-cyan text-whizbang-cyan font-extrabold text-sm uppercase">
          <ShieldCheck className="w-4 h-4" /> Senior-Accessible Legal Policy
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms of Service & Accessibility Guarantee
        </h1>
        <p className="text-xl text-gray-200">
          Last Updated: August 2026. Written in clear, large-print plain language for maximum transparency.
        </p>
      </div>

      {/* Senior Summary Callout */}
      <div className="bg-whizbang-slate border-2 border-whizbang-orange rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <h2 className="text-2xl font-extrabold text-whizbang-orange flex items-center gap-3">
          <CheckCircle2 className="w-7 h-7" /> Quick 3-Point Senior Summary:
        </h2>
        <ul className="space-y-3 text-xl text-gray-100 font-medium">
          <li className="flex items-start gap-3">
            <span className="text-whizbang-cyan font-bold">•</span>
            <span><strong>1. Pre-Construction Pricing:</strong> All deposit holds placed on pre-construction office suites are 100% refundable within 30 business days.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-whizbang-cyan font-bold">•</span>
            <span><strong>2. Universal Accessibility Guarantee:</strong> Every Good Whizbang model guarantees 100% zero-barrier doorways, non-slip flooring, and voice automation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-whizbang-cyan font-bold">•</span>
            <span><strong>3. Data Privacy:</strong> Your personal data and newsletter email are never sold or shared with third-party advertisers.</span>
          </li>
        </ul>
      </div>

      {/* Detailed Legal Sections */}
      <div className="bg-whizbang-slate border border-whizbang-lightgrey rounded-3xl p-8 sm:p-12 space-y-10 shadow-2xl text-gray-200 text-lg leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-3 border-b border-whizbang-lightgrey/50 pb-8">
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-whizbang-cyan" /> 1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Good Whizbang website, requesting pre-construction brochures, or interacting with our Gemini AI Assistant, you agree to comply with these Terms of Service. If you have any difficulty reading or navigating this document, please use the <strong>"Print: XL"</strong> toggle at the top of the screen or ask our AI Concierge to read key terms aloud.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 border-b border-whizbang-lightgrey/50 pb-8">
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-whizbang-cyan" /> 2. Pre-Construction Space Reservations
          </h2>
          <p>
            All office and home models listed on our platform represent pre-construction architectural concepts. Starting prices (e.g. $89,000 for The Lumina WorkPod) represent base modular unit costs and do not include optional local foundation work or custom interior upgrades requested during final engineering design.
          </p>
          <p>
            Pre-construction priority reservations require a fully refundable reservation deposit. You may cancel your reservation at any time prior to signing the final construction execution agreement without penalty.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 border-b border-whizbang-lightgrey/50 pb-8">
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-whizbang-cyan" /> 3. Smart Home Automation & AI Assistant
          </h2>
          <p>
            Whizbang smart offices feature embedded voice environmental controls (heating, cooling, circadian lighting, and window shading). While these systems include fall-prevention guidance and emergency one-touch alerts, they are intended as supportive ambient features and are not a substitute for professional medical monitoring services.
          </p>
          <p>
            Our embedded <strong>Whizbang Assistant</strong> is powered by Google Gemini AI to assist you with floor plan questions. AI responses are for informational purposes only.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-whizbang-cyan" /> 4. Contact & Legal Enquiries
          </h2>
          <p>
            If you have questions regarding these terms, accessibility support, or pre-construction contract details, please call our toll-free line at <strong>1-800-WHIZBANG</strong> or email us at <strong>legal@goodwhizbang.com</strong>.
          </p>
        </section>

      </div>

    </div>
  );
}
