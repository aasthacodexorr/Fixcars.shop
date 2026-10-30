"use client";

import React from "react";

interface CtaButtonProps {
  onClick: () => void;
  className?: string;
}

export default function CtaButton({ onClick, className = "" }: CtaButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full max-w-[530px] h-[66px] sm:h-[68px] bg-[#1cc76a] hover:bg-[#17a858] active:scale-[0.98] text-white rounded-full btn-pulse-glow btn-glimmer shadow-[0_4px_18px_rgba(28,199,106,0.38)] transition-all duration-200 cursor-pointer flex flex-col items-center justify-center px-4 select-none ${className}`}
    >
      <div className="font-poppins font-extrabold text-[19px] sm:text-[21px] tracking-wide uppercase flex items-center justify-center gap-2.5 text-white leading-none">
        {/* Crisp Pure White Lightning Bolt SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0 drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span>GET A FREE QUOTE</span>
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0 drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <div className="font-poppins font-bold text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-white/95 mt-1 leading-none">
        PLUS 10% OFF FOR NEW CUSTOMERS*
      </div>
    </button>
  );
}
