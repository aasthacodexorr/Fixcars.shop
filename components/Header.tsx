"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { SITE_CONFIG } from "@/lib/constants";

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-4 sm:px-8 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/3_imgi_1_Cardora-n.png"
            alt={`${SITE_CONFIG.companyName} ${SITE_CONFIG.companyTagline}`}
            width={240}
            height={60}
            priority
            className="h-auto w-44 sm:w-56 object-contain"
          />
        </div>

        {/* Center: Phone Call */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1">
          <span className="text-gray-900 text-base sm:text-xl font-bold flex items-center gap-1.5">
            <span>☎</span>
            <span>CALL US NOW AT:</span>
          </span>
          <a
            href={SITE_CONFIG.phoneHref}
            className="text-[#1cc76a] font-bold text-lg sm:text-2xl hover:underline whitespace-nowrap"
          >
            {SITE_CONFIG.phone}
          </a>
        </div>

        {/* Right: Get A Free Quote Button */}
        <div className="w-full md:w-auto flex justify-center">
          <CtaButton variant="header" onClick={onOpenQuote} />
        </div>
      </div>
    </header>
  );
}
