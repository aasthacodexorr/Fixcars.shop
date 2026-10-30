"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";

interface GuaranteeSectionProps {
  onOpenQuote: () => void;
}

export default function GuaranteeSection({
  onOpenQuote,
}: GuaranteeSectionProps) {
  return (
    <section id="guarantee" className="w-full bg-white py-14 sm:py-16 px-4 sm:px-8 border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto text-center space-y-8">
        <h2 className="font-anton text-4xl sm:text-5xl lg:text-[54px] uppercase text-[rgba(0,0,0,0.95)] tracking-wide leading-tight max-w-[950px] mx-auto">
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

          <div className="w-full max-w-[430px] text-center pt-1">
            <p className="text-2xl sm:text-[30px] font-bold text-black tracking-tight">
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
