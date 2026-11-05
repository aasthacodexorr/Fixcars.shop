
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
  slug?: string;
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
  slug = "",
}: HeroProps) {
  // Check if this is an AC or Engine page
  const isAcOrEnginePage = slug?.includes("auto-ac-mechanic") || slug?.includes("check-engine-light");
  
  // Set image dimensions based on page type
  const imageWidth = isAcOrEnginePage ? 700 : 600;
  const imageHeight = isAcOrEnginePage ? 550 : 450;
  const maxWidth = isAcOrEnginePage ? "lg:max-w-[620px]" : "lg:max-w-[520px]";

  return (
    <section
      className="relative w-full text-gray-900 px-4 sm:px-8 py-8 sm:py-12 border-b border-gray-200 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(248,248,247,0.45), rgba(248,248,247,0.45)), url('/images/37_cda-bg-hero-2-1-.png')`,
      }}
    >
      <div className="relative max-w-[1400px] mx-auto z-10 flex gap-10">

        {/* Main Heading */}
        <div className="max-w-[850px] mb-5 text-center lg:text-left">
          <h1 className="font-anton text-3xl sm:text-5xl lg:text-[42px] uppercase leading-[1.08] tracking-wide text-black drop-shadow-sm">
            {headline}
          </h1>
          {/* Content and CTA */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-3 text-center lg:text-left">

            <div className="space-y-2">
              <p className="text-gray-900 text-base sm:text-xl lg:text-[28px] leading-[84px]">
                {subheading1}
              </p>

              {subheading2 && (
                <p className="text-gray-900 text-sm sm:text-lg lg:text-[29px] leading-relaxed">
                  {subheading2}
                </p>
              )}

              {subheading3 && (
                <p className="text-gray-900 text-sm sm:text-lg lg:text-[29px] leading-relaxed">
                  {subheading3}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="pt-1">
              <p className="text-base sm:text-2xl lg:text-[25px] font-bold text-black flex items-center justify-center lg:justify-start gap-2">
                <span>📍</span>
                <span>Located at {SITE_CONFIG.address}</span>
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

        {/* Honda Vehicle Image */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-end items-end">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              priority
              className={`w-full max-w-[280px] sm:max-w-[400px] ${maxWidth} h-auto object-contain drop-shadow-xl`}
            />
          </div>
      </div>
    </section>
  );
}
