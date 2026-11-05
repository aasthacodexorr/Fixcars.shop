
"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { SITE_CONFIG } from "@/lib/constants";

interface HeroProps {
  onOpenQuote: () => void;
  headline?: React.ReactNode;
  subheading1?: string;
  subheading2?: string;
  subheading3?:string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  onOpenQuote,
  headline = (
    <>
      BRAMPTON’S MOST TRUSTED HONDA
      <br className="hidden sm:inline" /> REPAIR SHOP
    </>
  ),
  subheading1 = "We supply and service Honda cars, SUVs, vans & hybrids.",
  subheading2 = "",
  subheading3="",
  imageSrc = "/images/honda-hero.png",
  imageAlt = "Honda vehicle",
}: HeroProps) {
  return (
    <section
      className="relative w-full text-gray-900 px-4 sm:px-8 py-8 sm:py-12 border-b border-gray-200 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(248,248,247,0.45), rgba(248,248,247,0.45)), url('/images/37_cda-bg-hero-2-1-.png')`,
      }}
    >
      <div className="relative max-w-[1150px] mx-auto z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">

        {/* Main Heading */}
        <div className="min-w-0 lg:flex-1 max-w-[850px] mb-5 lg:mb-0 text-center lg:text-left">
          <h1 className="font-anton text-2xl sm:text-5xl max-w-[700px] lg:text-[42px] uppercase leading-[1.08] tracking-wide text-black drop-shadow-sm">
            {headline}
          </h1>
          {/* Content and CTA */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-3 text-center lg:text-left">

            <div className="space-y-2">
              <p className="text-gray-900 text-base max-w-[650px] sm:text-xl lg:text-[22px] leading-relaxed pt-3">
                {subheading1}
              </p>

              {subheading2 && (
                <p className="text-gray-900 text-sm max-w-[650px] sm:text-xl lg:text-[22px] leading-relaxed">
                  {subheading2}
                </p>
              )}

              {subheading3 && (
                <p className="text-gray-900 text-sm sm:text-lg max-w-[650px] lg:text-[22px] leading-relaxed">
                  {subheading3}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="pt-1">
              <p className="text-base sm:text-2xl max-w-[380px] lg:text-[25px] font-bold text-black flex items-start justify-start gap-2">
                <span>📍</span>
                <span>{SITE_CONFIG.address}</span>
              </p>
            </div>

            {/* CTA and Google Rating */}
            <div className="pt-2 sm:pt-3 flex flex-col items-center lg:items-start">
              <CtaButton onClick={onOpenQuote} />

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

        {/* Hero image: every page shares one box, so images match in size and stay centered */}
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] lg:w-[38%] aspect-[13/10] mx-auto lg:mx-0 shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            preload
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 320px"
            className="object-contain object-center drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
