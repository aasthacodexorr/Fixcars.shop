"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";

interface CustomerOffersProps {
  onOpenQuote: () => void;
}

export default function CustomerOffers({ onOpenQuote }: CustomerOffersProps) {
  const perks = [
    { highlight: "FREE", text: "Pick Up And Drop Off*" },
    { highlight: "10% OFF", text: "For New Customers*" },
    { highlight: "FREE", text: "Exterior Wash (Value $50)" },
    { highlight: "FREE", text: "Tire Rotation With A Brake Job" },
    { highlight: "FREE", text: "15-min Inspection & 2nd Opinion" },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 border-b border-gray-100">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-[950px] mx-auto mb-12">
          <h2 className="font-anton text-3xl sm:text-5xl lg:text-[54px] leading-tight uppercase text-black tracking-wide">
            SAVE ON YOUR BRAKES REPAIR WITH<br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
          </h2>
        </div>

        {/* 2 Columns: on mobile, circular badge image is order-1 (top), perks & CTA is order-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Circular dealership photo with green border: order-1 on mobile, order-2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <Image
              src="/images/6_cda-Offers-v2-n-4-1-.png"
              alt="Cardora Automotive Workshop Facility"
              width={600}
              height={650}
              className="w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px] h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Perks & CTA: order-2 on mobile, order-1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-center lg:text-left">
            <ul className="space-y-4 max-w-[550px] mx-auto lg:mx-0 text-left px-8">
              {perks.map((perk, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3.5 text-base sm:text-[21px] font-bold text-gray-900"
                >
                  {/* Crossed Tools Icon from uploaded asset */}
                  <Image
                    src="/images/crossed-tools.png"
                    alt="Offer perk"
                    width={28}
                    height={28}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
                  />
                  <div>
                    <span className="text-[#1cc76a] font-extrabold mr-1.5">
                      {perk.highlight}
                    </span>
                    <span>{perk.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Green CTA Button & Phone */}
            <div className="pt-2 flex flex-col items-center lg:items-start space-y-3">
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
        </div>
      </div>
    </section>
  );
}
