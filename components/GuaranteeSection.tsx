"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import CallNowCta from "./CallNowCta";

interface GuaranteeSectionProps {
  onOpenQuote: () => void;
}

export default function GuaranteeSection({
  onOpenQuote,
}: GuaranteeSectionProps) {
  return (
    <section id="guarantee" className="w-full bg-white py-14 sm:py-16 px-4 sm:px-8 border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto text-center space-y-8">
        <h2 className="font-anton text-2xl sm:text-5xl lg:text-[43px] uppercase text-[rgba(0,0,0,0.95)] tracking-wide leading-tight max-w-[950px] mx-auto">
          FEEL AT EASE WITH OUR UNBEATABLE ‘PEACE OF MIND’ GUARANTEE
        </h2>

        {/* Guarantee bullet items matching screenshot */}
        <div className="max-w-[480px] mx-auto space-y-4 text-left px-5">
          <div className="flex items-center gap-3.5 text-base sm:text-[21px] font-bold text-gray-900">
            <Image
              src="/images/crossed-tools.png"
              alt="Guarantee"
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
            />
            <span>
              Next Day Appointment{" "}
              <span className="text-[#1cc76a] font-extrabold">GUARANTEE</span>
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-base sm:text-[21px] font-bold text-gray-900">
            <Image
              src="/images/crossed-tools.png"
              alt="Guarantee"
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
            />
            <span>
              Price Beat{" "}
              <span className="text-[#1cc76a] font-extrabold">GUARANTEE</span>
              {" "}Over Dealerships*
            </span>
          </div>
        </div>

        {/* Green CTA Button & Phone */}
        <div className="pt-4 flex flex-col items-center space-y-3">
          <CtaButton onClick={onOpenQuote} />
          <CallNowCta />
        </div>
      </div>
    </section>
  );
}
