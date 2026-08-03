import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      
      {/* Bespoke Geometric Brand Emblem (Compact 34x34) */}
      <div className="relative flex-shrink-0">
        <svg 
          width="34" 
          height="34" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_2px_8px_rgba(255,107,0,0.35)] transform transition-transform hover:scale-105"
        >
          <defs>
            <linearGradient id="whizbangGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            <linearGradient id="innerGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>
          </defs>

          <rect 
            x="5" 
            y="5" 
            width="90" 
            height="90" 
            rx="24" 
            fill="#1F2937" 
            stroke="url(#whizbangGradient)" 
            strokeWidth="6"
          />

          <path 
            d="M 28 35 L 50 20 L 72 35 M 28 45 L 38 75 L 50 55 L 62 75 L 72 45" 
            stroke="url(#whizbangGradient)" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          <polygon 
            points="50,38 56,46 50,54 44,46" 
            fill="url(#innerGlow)" 
          />
        </svg>
      </div>

      {/* Brand Typography (Compact & Crisp) */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-serif">
            Good
          </span>
          <span className="font-black text-lg sm:text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-whizbang-orange via-amber-400 to-whizbang-cyan">
            Whizbang
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-whizbang-orange animate-pulse ml-0.5"></span>
        </div>

        <span className="text-[9px] font-extrabold text-whizbang-cyan tracking-[0.18em] uppercase mt-0.5 leading-none">
          Senior Smart Spaces
        </span>
      </div>

    </div>
  );
}
