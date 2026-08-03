import React from 'react';

export default function Logo({ size = 'medium', className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      
      {/* Bespoke Geometric Brand Emblem */}
      <div className="relative flex-shrink-0">
        <svg 
          width="44" 
          height="44" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_4px_12px_rgba(255,107,0,0.35)] transform transition-transform hover:scale-105"
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

          {/* Outer Rounded Architectural Frame */}
          <rect 
            x="5" 
            y="5" 
            width="90" 
            height="90" 
            rx="24" 
            fill="#1F2937" 
            stroke="url(#whizbangGradient)" 
            strokeWidth="5"
          />

          {/* Stylized Architectural W / House Roof Apex */}
          <path 
            d="M 28 35 L 50 20 L 72 35 M 28 45 L 38 75 L 50 55 L 62 75 L 72 45" 
            stroke="url(#whizbangGradient)" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Glowing Center Smart Energy Diamond */}
          <polygon 
            points="50,38 56,46 50,54 44,46" 
            fill="url(#innerGlow)" 
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white font-serif">
            Good
          </span>
          <span className="font-black text-2xl sm:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-whizbang-orange via-amber-400 to-whizbang-cyan">
            Whizbang
          </span>
          <span className="w-2 h-2 rounded-full bg-whizbang-orange animate-pulse ml-0.5"></span>
        </div>

        <span className="text-[10px] sm:text-[11px] font-bold text-whizbang-cyan tracking-[0.22em] uppercase mt-1 leading-none">
          Senior Smart Spaces
        </span>
      </div>

    </div>
  );
}
