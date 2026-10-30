"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section
      className="relative w-full text-gray-900 pt-8 pb-14 px-4 sm:px-8 border-b border-gray-200 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 248, 247, 0.40), rgba(248, 248, 247, 0.40)), url('/images/37_cda-bg-hero-2-1-.png')`,
      }}
    >
      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Main H1 Headline */}
        <div className="text-center lg:text-left max-w-[1400px] mx-auto mb-4 lg:mb-6">
          <h1 className="font-anton text-3xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-wide uppercase text-black drop-shadow-sm">
            BRAMPTON’S MOST TRUSTED CAR<br className="hidden sm:inline" /> BRAKES REPAIR SHOP
          </h1>
        </div>

        {/* 2-Column Content Grid: on mobile rotor is order-1 (between headline and copy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Rotor Graphic: order-1 on mobile, order-2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center my-2 lg:my-0">
            <Image
              src="/images/4_NL-Brakes-Subro.png"
              alt="High Performance Car Brake System"
              width={550}
              height={450}
              priority
              className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[480px] h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Copy & CTAs: order-2 on mobile, order-1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            <p className="text-gray-900 text-base sm:text-xl lg:text-[21px] leading-relaxed font-normal">
              The one-stop shop for all your brake repairs &amp; replacements!
            </p>

            <p className="text-gray-900 text-sm sm:text-lg lg:text-[19px] leading-relaxed font-normal">
              We supply and service brakes for cars, vans &amp; 4x4s.
            </p>

            <div className="pt-1 sm:pt-2">
              <p className="text-base sm:text-2xl lg:text-[25px] font-bold text-black flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                <span>📍</span>
                <span>Located at 8050 Dixie Rd, Brampton, ON L6T 4W6</span>
              </p>
            </div>

            {/* Green Hero CTA Button & Google Rating */}
            <div className="pt-2 sm:pt-3 flex flex-col items-center lg:items-start">
              <CtaButton onClick={onOpenQuote} />

              {/* Google Rating Badge centered under button */}
              <div className="w-full max-w-[430px] flex items-center justify-center gap-2 pt-3 text-xl font-bold">
                <span className="font-semibold text-2xl tracking-normal">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-[#FBBC05] text-2xl tracking-wider">
                  ★★★★★
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
