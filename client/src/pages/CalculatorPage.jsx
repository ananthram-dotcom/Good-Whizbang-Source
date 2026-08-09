import React from 'react';
import MortgageSavingsCalculator from '../components/MortgageSavingsCalculator';
import { Calculator, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-whizbang-cyan/20 border border-whizbang-cyan text-whizbang-cyan font-extrabold text-sm uppercase">
          <Calculator className="w-4 h-4" /> Pre-Construction Investment Estimator
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Senior Office Financing & Utility Savings Calculator
        </h1>
        <p className="text-xl text-gray-200">
          Estimate your net out-of-pocket investment with built-in solar tile energy credits and locked pre-construction interest rates.
        </p>
      </div>

      <MortgageSavingsCalculator />

      {/* Financing Guarantee Badges */}
      <div className="grid md:grid-cols-3 gap-6 pt-6">
        <div className="bg-whizbang-slate border border-whizbang-lightgrey p-6 rounded-2xl space-y-2">
          <ShieldCheck className="w-8 h-8 text-whizbang-cyan" />
          <h3 className="text-xl font-bold text-white">Pre-Construction Price Lock</h3>
          <p className="text-sm text-gray-300">Your quoted model price is locked upon reservation deposit—zero cost escalation during build.</p>
        </div>

        <div className="bg-whizbang-slate border border-whizbang-lightgrey p-6 rounded-2xl space-y-2">
          <Zap className="w-8 h-8 text-whizbang-orange" />
          <h3 className="text-xl font-bold text-white">Solar Energy Offset</h3>
          <p className="text-sm text-gray-300">Solar roof tile technology generates clean power, cutting monthly utility overhead by up to $165/mo.</p>
        </div>

        <div className="bg-whizbang-slate border border-whizbang-lightgrey p-6 rounded-2xl space-y-2">
          <Sparkles className="w-8 h-8 text-teal-400" />
          <h3 className="text-xl font-bold text-white">Tax Credit Eligible</h3>
          <p className="text-sm text-gray-300">Qualifies for federal renewable energy credits & accessible medical home modification incentives.</p>
        </div>
      </div>
    </div>
  );
}
