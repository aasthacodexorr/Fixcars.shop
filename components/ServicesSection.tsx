"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export default function ServicesSection({
  onOpenQuote,
}: ServicesSectionProps) {
  const services = [
    {
      img: "/images/8_Minor-Major-Repairs.png",
      title: "Brake Servicing",
      alt: "Brake Servicing & Inspection",
    },
    {
      img: "/images/9_Log-Book-Servicing.png",
      title: "Brake Repairs",
      alt: "Car Brake Repairs & Replacements",
    },
    {
      img: "/images/10_General-Mechanics.png",
      title: "Brake Changes",
      alt: "Brake Pad and Rotor Changes",
    },
  ];

  return (
    <section id="services" className="w-full bg-black text-white pt-14 pb-12 px-4 sm:px-0 overflow-hidden">
      <div className="max-w-[1800px] mx-auto text-center">
        <h2 className="font-anton text-3xl sm:text-5xl lg:text-[54px] uppercase text-white tracking-wide mb-12">
          OUR BRAKES SERVICES
        </h2>

        {/* 3 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-18">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center lg:p-6 lg:bg-neutral-900/60 rounded-2xl lg:border border-neutral-800 hover:border-[#1cc76a] transition group cursor-pointer"
              onClick={onOpenQuote}
            >
              <div className="w-full max-w-[280px] h-[220px] relative flex items-center justify-center lg:mb-6">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={280}
                  height={220}
                  className="max-h-[220px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-lato text-2xl font-bold text-white group-hover:text-[#1cc76a] transition">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Continuous Infinite Auto-Scrolling Brands/Car Image Ticker */}
        <div className="w-full max-w-full overflow-hidden my-8 relative border-y-4 border-green-500 bg-neutral-950/40">
          <div className="animate-marquee-scroll flex items-center">
            {/* First Copy */}
            <div className="flex-shrink-0 flex items-center pr-8">
              <img
                src="/images/Infinit-slider-min.png"
                alt="Cardora Automotive Infinite Service Showcase"
                className="h-44 sm:h-44 w-auto max-w-none object-contain"
              />
            </div>
            {/* Duplicate Copy for Seamless Infinite Loop */}
            <div className="flex-shrink-0 flex items-center pr-8">
              <img
                src="/images/Infinit-slider-min.png"
                alt="Cardora Automotive Infinite Service Showcase"
                className="h-44 sm:h-44 w-auto max-w-none object-contain"
              />
            </div>
          </div>
        </div>

        {/* Green CTA in Services Section */}
        <div className="pt-6 pb-2 flex flex-col items-center space-y-3">
          <CtaButton onClick={onOpenQuote} />
          <div className="w-full max-w-[430px] text-center pt-1">
            <p className="text-2xl sm:text-[30px] font-bold text-white tracking-tight">
              CALL NOW{" "}
              <a
                href="tel:(647) 492-2636"
                className="text-[#1cc76a] font-bold hover:underline"
              >
                (647) 492-2636
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
