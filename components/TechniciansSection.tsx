"use client";

import React from "react";
import Image from "next/image";

export default function TechniciansSection() {
  return (
    <section className="w-full bg-black text-white py-14 sm:py-18 px-4 sm:px-8 border-y border-neutral-800">
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        <h2 className="font-anton text-2xl sm:text-5xl lg:text-[54px] uppercase text-white tracking-wide max-w-[1000px] mx-auto leading-tight">
          GET YOUR BRAKES REPAIRED BY FULLY<br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
        </h2>

        {/* White Rounded Container containing 8-photo grid */}
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-3 sm:p-6 shadow-2xl max-w-[1100px] mx-auto">
          <Image
            src="/images/7_Brakes-gen-nw.png"
            alt="Brake Pad and Rotor Repair by Certified Mechanics"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-xl sm:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
