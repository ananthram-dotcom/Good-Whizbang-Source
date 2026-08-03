import React, { useState } from 'react';
import { Calculator, DollarSign, Zap, Sun, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function MortgageSavingsCalculator() {
  const [modelPrice, setModelPrice] = useState(149000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTermYears, setLoanTermYears] = useState(15);
  const [includeSolarSavings, setIncludeSolarSavings] = useState(true);

  // Mortgage Math Calculation
  const downPayment = (modelPrice * downPaymentPercent) / 100;
  const principal = modelPrice - downPayment;
  const interestRate = 0.055; // 5.5% estimated senior buyer rate
  const monthlyInterestRate = interestRate / 12;
  const totalMonths = loanTermYears * 12;

  const monthlyMortgage = (
    (principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths))) /
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
  ).toFixed(0);

  const solarMonthlySavings = includeSolarSavings ? 165 : 0;
  const netEstimatedMonthly = Math.max(0, monthlyMortgage - solarMonthlySavings);

  return (
    <div className="bg-gradient-to-br from-whizbang-slate via-gray-900 to-whizbang-dark border-2 border-whizbang-cyan/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
      
      {/* Background Subtle Glow Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-whizbang-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-whizbang-lightgrey/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whizbang-cyan/20 border border-whizbang-cyan text-whizbang-cyan font-bold text-xs uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" /> Interactive Senior Finance Estimator
          </div>
          <h3 className="text-3xl font-extrabold text-white">Pre-Construction Savings Calculator</h3>
          <p className="text-lg text-gray-300">Estimate your net monthly investment with built-in solar tile energy credits.</p>
        </div>

        <div className="flex items-center gap-2 bg-whizbang-dark p-2 rounded-2xl border border-whizbang-lightgrey">
          {[{ price: 89000, label: 'Lumina ($89k)' }, { price: 149000, label: 'Apex ($149k)' }, { price: 195000, label: 'Horizon ($195k)' }].map((m) => (
            <button
              key={m.price}
              onClick={() => setModelPrice(m.price)}
              className={`px-3 py-2 rounded-xl text-sm font-extrabold transition-all min-h-[44px] ${
                modelPrice === m.price
                  ? 'bg-whizbang-orange text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-whizbang-slate'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Area */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Down Payment Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-gray-300">Down Payment ({downPaymentPercent}%):</span>
              <span className="text-whizbang-cyan">${downPayment.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-3 bg-whizbang-dark rounded-lg appearance-none cursor-pointer accent-whizbang-cyan"
            />
          </div>

          {/* Loan Term Selection */}
          <div className="space-y-2">
            <label className="block text-lg font-bold text-gray-300">Target Financing Term:</label>
            <div className="grid grid-cols-3 gap-3">
              {[10, 15, 20].map((years) => (
                <button
                  key={years}
                  onClick={() => setLoanTermYears(years)}
                  className={`py-3 rounded-xl font-extrabold text-base min-h-[48px] border transition-all ${
                    loanTermYears === years
                      ? 'bg-whizbang-cyan text-whizbang-dark border-whizbang-cyan shadow-md'
                      : 'bg-whizbang-dark text-gray-300 border-whizbang-lightgrey hover:text-white'
                  }`}
                >
                  {years} Years
                </button>
              ))}
            </div>
          </div>

          {/* Solar Energy Credit Toggle */}
          <div className="p-4 bg-whizbang-dark/80 rounded-2xl border border-whizbang-lightgrey flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-white block">Solar Tile Net Energy Return</span>
                <span className="text-sm text-gray-400">Subtracts approx. $165/mo utility bill savings</span>
              </div>
            </div>

            <button
              onClick={() => setIncludeSolarSavings(!includeSolarSavings)}
              className={`px-4 py-2 rounded-xl text-sm font-bold min-h-[44px] transition-colors ${
                includeSolarSavings ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-400'
              }`}
            >
              {includeSolarSavings ? 'Applied ✓' : 'Disabled'}
            </button>
          </div>

        </div>

        {/* Calculation Result Display Box */}
        <div className="lg:col-span-5 bg-whizbang-dark p-6 sm:p-8 rounded-3xl border-2 border-whizbang-orange/60 text-center space-y-4 shadow-2xl relative">
          <span className="text-xs font-bold text-whizbang-orange uppercase tracking-wider block">Estimated Monthly Out-of-Pocket</span>
          
          <div className="text-5xl font-black text-white tracking-tight">
            ${netEstimatedMonthly} <span className="text-xl font-semibold text-gray-400">/mo</span>
          </div>

          <div className="pt-2 border-t border-whizbang-lightgrey/60 space-y-1 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Gross Principal & Interest:</span>
              <span className="font-bold text-white">${monthlyMortgage}/mo</span>
            </div>
            {includeSolarSavings && (
              <div className="flex justify-between text-emerald-400">
                <span>Solar Utility Credit:</span>
                <span className="font-bold">-$165/mo</span>
              </div>
            )}
          </div>

          <div className="pt-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-whizbang-cyan font-bold bg-whizbang-cyan/10 px-3 py-1.5 rounded-full border border-whizbang-cyan/30">
              <ShieldCheck className="w-4 h-4" /> Locked Pre-Construction Rate
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
