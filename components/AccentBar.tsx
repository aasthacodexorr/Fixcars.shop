"use client";

import React from "react";

interface AccentBarProps {
  text: string;
  color?: string; // e.g. text-[#ff6603] or text-black
}

export default function AccentBar({
  text,
  color = "text-black",
}: AccentBarProps) {
  return (
    <div className="w-full bg-[#e6f4ff] py-6 sm:py-8 px-4 border-y border-[#d0e8fc]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2
          className={`font-anton italic font-bold text-2xl sm:text-4xl lg:text-[46px] tracking-wide ${color}`}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}
