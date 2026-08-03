import React, { useState } from 'react';
import { Sun, Mic, Thermometer, Eye, Moon, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function SmartFeatureToggle() {
  const [activeFeature, setActiveFeature] = useState('lighting');
  const [lightingMode, setLightingMode] = useState('Circadian Day');
  const [temperature, setTemperature] = useState(72);
  const [voiceAssistActive, setVoiceAssistActive] = useState(true);
  const [tintLevel, setTintLevel] = useState(40);

  return (
    <div className="bg-whizbang-slate border-2 border-whizbang-lightgrey rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whizbang-cyan/20 border border-whizbang-cyan text-whizbang-cyan font-bold text-sm uppercase mb-3">
          <Sparkles className="w-4 h-4" /> Live Interactive Demonstration
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          Test Senior Smart Office Controls
        </h3>
        <p className="text-xl text-gray-300 mt-2">
          Experience how our pre-construction office features adapt instantly without complex smartphone menus.
        </p>
      </div>

      {/* Feature Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <button
          onClick={() => setActiveFeature('lighting')}
          className={`flex items-center justify-center gap-2 p-4 rounded-xl font-bold text-lg min-h-[56px] transition-all ${
            activeFeature === 'lighting'
              ? 'bg-whizbang-orange text-white shadow-lg shadow-whizbang-orange/30'
              : 'bg-whizbang-dark text-gray-300 hover:text-white border border-whizbang-lightgrey'
          }`}
        >
          <Sun className="w-6 h-6" /> Lighting
        </button>

        <button
          onClick={() => setActiveFeature('climate')}
          className={`flex items-center justify-center gap-2 p-4 rounded-xl font-bold text-lg min-h-[56px] transition-all ${
            activeFeature === 'climate'
              ? 'bg-whizbang-cyan text-whizbang-dark shadow-lg shadow-whizbang-cyan/30'
              : 'bg-whizbang-dark text-gray-300 hover:text-white border border-whizbang-lightgrey'
          }`}
        >
          <Thermometer className="w-6 h-6" /> Climate
        </button>

        <button
          onClick={() => setActiveFeature('voice')}
          className={`flex items-center justify-center gap-2 p-4 rounded-xl font-bold text-lg min-h-[56px] transition-all ${
            activeFeature === 'voice'
              ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
              : 'bg-whizbang-dark text-gray-300 hover:text-white border border-whizbang-lightgrey'
          }`}
        >
          <Mic className="w-6 h-6" /> Voice Access
        </button>

        <button
          onClick={() => setActiveFeature('windows')}
          className={`flex items-center justify-center gap-2 p-4 rounded-xl font-bold text-lg min-h-[56px] transition-all ${
            activeFeature === 'windows'
              ? 'bg-amber-500 text-whizbang-dark shadow-lg shadow-amber-500/30'
              : 'bg-whizbang-dark text-gray-300 hover:text-white border border-whizbang-lightgrey'
          }`}
        >
          <Eye className="w-6 h-6" /> Auto Glass
        </button>
      </div>

      {/* Interactive Control Canvas */}
      <div className="bg-whizbang-dark border border-whizbang-lightgrey rounded-2xl p-6 sm:p-8">
        
        {/* Lighting Controls */}
        {activeFeature === 'lighting' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Sun className="w-6 h-6 text-whizbang-orange" /> Circadian Rhythm Lighting
                </h4>
                <p className="text-lg text-gray-300">Automatic color spectrum adjustment to reduce eye fatigue.</p>
              </div>
              <span className="px-4 py-2 rounded-xl bg-whizbang-orange/20 text-whizbang-orange border border-whizbang-orange font-extrabold text-lg">
                Mode: {lightingMode}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Circadian Day', 'Focus Amber', 'Evening Warm'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setLightingMode(mode)}
                  className={`p-4 rounded-xl font-extrabold text-lg min-h-[56px] border text-center transition-all ${
                    lightingMode === mode
                      ? 'bg-whizbang-orange text-white border-whizbang-orange shadow-md'
                      : 'bg-whizbang-slate text-gray-300 border-whizbang-lightgrey hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="p-4 bg-whizbang-slate rounded-xl border border-whizbang-lightgrey flex items-center gap-3">
              <Check className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-lg text-gray-200">
                High contrast non-glare LED diffusion rated 98+ CRI for maximum senior visual clarity.
              </span>
            </div>
          </div>
        )}

        {/* Climate Controls */}
        {activeFeature === 'climate' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-whizbang-cyan" /> Voice Zone Climate
                </h4>
                <p className="text-lg text-gray-300">Set room temperature verbally or via large tactile buttons.</p>
              </div>
              <span className="text-4xl font-extrabold text-whizbang-cyan">
                {temperature}°F
              </span>
            </div>

            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => setTemperature(prev => Math.max(65, prev - 1))}
                className="w-16 h-16 bg-whizbang-slate hover:bg-whizbang-lightgrey text-whizbang-cyan text-3xl font-extrabold rounded-2xl border-2 border-whizbang-cyan flex items-center justify-center"
              >
                -
              </button>
              <span className="text-2xl font-extrabold text-white">Target Comfort</span>
              <button
                onClick={() => setTemperature(prev => Math.min(80, prev + 1))}
                className="w-16 h-16 bg-whizbang-slate hover:bg-whizbang-lightgrey text-whizbang-orange text-3xl font-extrabold rounded-2xl border-2 border-whizbang-orange flex items-center justify-center"
              >
                +
              </button>
            </div>

            <div className="p-4 bg-whizbang-slate rounded-xl border border-whizbang-lightgrey flex items-center gap-3">
              <Check className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-lg text-gray-200">
                Integrated ultra-quiet HEPA filter cleans indoor air every 12 minutes automatically.
              </span>
            </div>
          </div>
        )}

        {/* Voice Access Controls */}
        {activeFeature === 'voice' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Mic className="w-6 h-6 text-teal-400" /> Touchless Voice Automation
                </h4>
                <p className="text-lg text-gray-300">Simply say "Whizbang, open shades" or "Whizbang, call emergency".</p>
              </div>
              <button
                onClick={() => setVoiceAssistActive(!voiceAssistActive)}
                className={`px-5 py-2.5 rounded-xl font-bold min-h-[48px] text-lg transition-colors ${
                  voiceAssistActive ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                {voiceAssistActive ? 'Voice: Active 🎙️' : 'Voice: Paused 🔇'}
              </button>
            </div>

            <div className="p-5 bg-whizbang-slate rounded-xl border border-whizbang-lightgrey space-y-3">
              <p className="text-lg font-bold text-teal-300">Example Senior Voice Commands:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-gray-200">
                <div className="p-3 bg-whizbang-dark rounded-lg">🗣️ "Whizbang, set desk height for sitting."</div>
                <div className="p-3 bg-whizbang-dark rounded-lg">🗣️ "Whizbang, turn on night path lighting."</div>
                <div className="p-3 bg-whizbang-dark rounded-lg">🗣️ "Whizbang, lock front zero-step entry."</div>
                <div className="p-3 bg-whizbang-dark rounded-lg">🗣️ "Whizbang, alert my family contact."</div>
              </div>
            </div>
          </div>
        )}

        {/* Electrochromic Glass Controls */}
        {activeFeature === 'windows' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Eye className="w-6 h-6 text-amber-400" /> Auto-Tinting Electrochromic Glass
                </h4>
                <p className="text-lg text-gray-300">Eliminates window glares and UV heat without pulling heavy blinds.</p>
              </div>
              <span className="text-3xl font-extrabold text-amber-400">{tintLevel}% Tint</span>
            </div>

            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={tintLevel}
                onChange={(e) => setTintLevel(e.target.value)}
                className="w-full h-3 bg-whizbang-slate rounded-lg appearance-none cursor-pointer accent-whizbang-orange"
              />
              <div className="flex justify-between text-sm font-bold text-gray-400">
                <span>0% Clear (Maximum View)</span>
                <span>50% Balanced</span>
                <span>100% Full Privacy Shield</span>
              </div>
            </div>

            <div className="p-4 bg-whizbang-slate rounded-xl border border-whizbang-lightgrey flex items-center gap-3">
              <Check className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-lg text-gray-200">
                Responds automatically to sunlight angles to preserve eye comfort for seniors.
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
