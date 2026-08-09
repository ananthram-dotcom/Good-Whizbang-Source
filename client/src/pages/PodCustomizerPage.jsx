import React, { useState } from 'react';
import { CATALOG_PRODUCTS } from '../data/catalogData';
import { Zap, Check, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, Sun, Heart, Calculator, Send } from 'lucide-react';

const ACCESSIBILITY_PACKAGES = [
  { id: 'standard', name: 'Standard Zero-Barrier Package', price: 0, desc: 'Includes 36" sliding doors, stair-free flooring, and high contrast LED lighting.' },
  { id: 'tactile-voice', name: 'Tactile & Voice Automation Pack', price: 4500, desc: 'Adds 48" low-reach tactile switch array, slow-speech mic system, and voice zone thermostat.' },
  { id: 'hydro-wellness', name: 'Hydrotherapy & Night Care Suite', price: 12500, desc: 'Includes digital hydrotherapy bath, infrared amber night floor lights, and non-intrusive fall telemetry.' }
];

const SOLAR_PACKAGES = [
  { id: 'grid', name: 'Standard Grid Connection', price: 0, desc: 'Standard pre-construction utility connection.' },
  { id: 'solar-lite', name: 'Solar Tile Roof (5kW Peak)', price: 8500, desc: 'Integrated solar tiles reducing monthly energy bills by ~ $110/mo.' },
  { id: 'solar-max', name: 'Solar Roof + 72-Hour Power Battery Storage', price: 16800, desc: 'Full off-grid resiliency with integrated battery storage & $165/mo bill return.' }
];

export default function PodCustomizerPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedModel, setSelectedModel] = useState(CATALOG_PRODUCTS[0]);
  const [selectedAcc, setSelectedAcc] = useState(ACCESSIBILITY_PACKAGES[1]);
  const [selectedSolar, setSelectedSolar] = useState(SOLAR_PACKAGES[1]);
  const [submitted, setSubmitted] = useState(false);
  const [lead, setLead] = useState({ name: '', email: '', phone: '', comments: '' });

  const totalPrice = selectedModel.startingPrice + selectedAcc.price + selectedSolar.price;
  const priceFormatted = `$${totalPrice.toLocaleString()}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: selectedModel.name,
          accessibilityPack: selectedAcc.name,
          solarPack: selectedSolar.name,
          totalEstimatedPrice: priceFormatted,
          ...lead
        })
      });
    } catch (err) {
      console.warn('Backend server offline, showing local confirmation:', err);
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Banner Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-whizbang-orange/20 border border-whizbang-orange text-whizbang-orange font-extrabold text-sm uppercase tracking-wide">
          <Sparkles className="w-4 h-4 fill-whizbang-orange" /> 3-Step Interactive Customizer
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Build Your Custom Senior Smart Workspace
        </h1>
        <p className="text-xl text-gray-200">
          Tailor your floor plan, accessibility features, and energy independence with instant price calculation.
        </p>
      </div>

      {/* Progress Wizard Steps Header */}
      <div className="grid grid-cols-3 gap-3 bg-whizbang-slate p-3 rounded-2xl border border-whizbang-lightgrey max-w-3xl mx-auto">
        {[
          { step: 1, label: '1. Select Office Model' },
          { step: 2, label: '2. Accessibility Pack' },
          { step: 3, label: '3. Solar & Resiliency' }
        ].map((s) => (
          <button
            key={s.step}
            onClick={() => setCurrentStep(s.step)}
            className={`py-3 px-2 rounded-xl text-xs sm:text-base font-extrabold transition-all text-center ${
              currentStep === s.step
                ? 'bg-whizbang-orange text-white shadow-lg shadow-whizbang-orange/30'
                : currentStep > s.step
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : 'bg-whizbang-dark text-gray-400 border border-whizbang-lightgrey/40'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Main Wizard Area with Live Price Sidebar */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Wizard Main Content Column */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* STEP 1: MODEL SELECTION */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-2xl font-extrabold text-white">Step 1: Choose Your Base Pre-Construction Model</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {CATALOG_PRODUCTS.map((m) => (
                  <div
                    key={m._id}
                    onClick={() => setSelectedModel(m)}
                    className={`bg-whizbang-slate border-2 rounded-2xl p-5 cursor-pointer transition-all space-y-3 relative overflow-hidden ${
                      selectedModel._id === m._id
                        ? 'border-whizbang-orange bg-whizbang-orange/10 shadow-xl scale-[1.01]'
                        : 'border-whizbang-lightgrey hover:border-whizbang-cyan'
                    }`}
                  >
                    {selectedModel._id === m._id && (
                      <div className="absolute top-3 right-3 bg-whizbang-orange text-white p-1 rounded-full">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                    <img src={m.imageUrl} alt={m.name} className="w-full h-36 object-cover rounded-xl" />
                    <h3 className="text-xl font-bold text-white">{m.name}</h3>
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-whizbang-cyan">{m.priceFormatted}</span>
                      <span className="text-gray-400">{m.sqft} sq.ft</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-lg px-8 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
                >
                  Continue to Step 2: Accessibility <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: ACCESSIBILITY SELECTION */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-2xl font-extrabold text-white">Step 2: Choose Senior Accessibility Package</h2>
              
              <div className="space-y-4">
                {ACCESSIBILITY_PACKAGES.map((acc) => (
                  <div
                    key={acc.id}
                    onClick={() => setSelectedAcc(acc)}
                    className={`bg-whizbang-slate border-2 rounded-2xl p-6 cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      selectedAcc.id === acc.id
                        ? 'border-whizbang-cyan bg-whizbang-cyan/10 shadow-xl'
                        : 'border-whizbang-lightgrey hover:border-whizbang-cyan'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{acc.name}</h3>
                        {selectedAcc.id === acc.id && (
                          <span className="px-2 py-0.5 bg-whizbang-cyan text-whizbang-dark font-extrabold text-xs rounded-md">Selected</span>
                        )}
                      </div>
                      <p className="text-base text-gray-300">{acc.desc}</p>
                    </div>

                    <span className="text-2xl font-black text-whizbang-cyan whitespace-nowrap">
                      {acc.price === 0 ? 'Included' : `+$${acc.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-whizbang-slate hover:bg-whizbang-lightgrey text-gray-200 font-extrabold text-lg px-6 py-3.5 rounded-xl border border-whizbang-lightgrey flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back to Model Selection
                </button>

                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-lg px-8 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
                >
                  Continue to Step 3: Solar & Battery <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SOLAR & BATTERY SELECTION */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-2xl font-extrabold text-white">Step 3: Energy Independence & Battery Storage</h2>
              
              <div className="space-y-4">
                {SOLAR_PACKAGES.map((sp) => (
                  <div
                    key={sp.id}
                    onClick={() => setSelectedSolar(sp)}
                    className={`bg-whizbang-slate border-2 rounded-2xl p-6 cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      selectedSolar.id === sp.id
                        ? 'border-amber-400 bg-amber-500/10 shadow-xl'
                        : 'border-whizbang-lightgrey hover:border-amber-400'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{sp.name}</h3>
                        {selectedSolar.id === sp.id && (
                          <span className="px-2 py-0.5 bg-amber-400 text-whizbang-dark font-extrabold text-xs rounded-md">Selected</span>
                        )}
                      </div>
                      <p className="text-base text-gray-300">{sp.desc}</p>
                    </div>

                    <span className="text-2xl font-black text-amber-400 whitespace-nowrap">
                      {sp.price === 0 ? 'Included' : `+$${sp.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="bg-whizbang-slate hover:bg-whizbang-lightgrey text-gray-200 font-extrabold text-lg px-6 py-3.5 rounded-xl border border-whizbang-lightgrey flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back to Accessibility
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Live Calculation & Inquiry Summary Sidebar */}
        <div className="lg:col-span-4 bg-whizbang-slate border-2 border-whizbang-orange rounded-3xl p-6 space-y-6 shadow-2xl sticky top-24">
          <div className="border-b border-whizbang-lightgrey/60 pb-4">
            <span className="text-xs font-extrabold text-whizbang-orange uppercase tracking-wider block">Configured Estimate</span>
            <h3 className="text-3xl font-black text-white mt-1">{priceFormatted}</h3>
            <span className="text-xs text-gray-400">Includes pre-construction price lock</span>
          </div>

          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Model:</span>
              <strong className="text-white">{selectedModel.name}</strong>
            </div>
            <div className="flex justify-between">
              <span>Accessibility:</span>
              <strong className="text-whizbang-cyan">{selectedAcc.name}</strong>
            </div>
            <div className="flex justify-between">
              <span>Solar Resiliency:</span>
              <strong className="text-amber-400">{selectedSolar.name}</strong>
            </div>
          </div>

          {/* Form */}
          <div className="pt-4 border-t border-whizbang-lightgrey/60 space-y-4">
            <h4 className="text-lg font-extrabold text-white">Reserve Custom Quote</h4>

            {submitted ? (
              <div className="p-4 bg-emerald-950 border border-emerald-500 rounded-xl text-emerald-300 font-bold text-sm">
                ✅ Reservation Quote Submitted! Our senior architecture team will send your customized blueprint layout shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={lead.name}
                  onChange={e => setLead({ ...lead, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-whizbang-dark border border-whizbang-lightgrey text-white rounded-xl text-sm min-h-[44px]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={lead.email}
                  onChange={e => setLead({ ...lead, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-whizbang-dark border border-whizbang-lightgrey text-white rounded-xl text-sm min-h-[44px]"
                />
                <button
                  type="submit"
                  className="w-full bg-whizbang-orange hover:bg-orange-600 text-white font-extrabold text-base py-3.5 rounded-xl shadow-lg min-h-[48px] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Request Custom Blueprint Quote
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
