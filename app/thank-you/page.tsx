"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-[#1cc76a] selection:text-white">
      {/* Top Header with Centered Cardora Logo */}
      <header className="w-full bg-white border-b border-gray-100 py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center">
          <Link href="/" className="inline-block transition hover:opacity-95">
            <Image
              src="/images/3_imgi_1_Cardora-n.png"
              alt={`${SITE_CONFIG.companyName} ${SITE_CONFIG.companyTagline}`}
              width={240}
              height={60}
              priority
              className="h-auto w-48 sm:w-56 object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Thank You Section with Fixed Parallax Background */}
      <main
        className="flex-1 w-full flex flex-col items-center justify-center text-center px-4 py-20 sm:py-28 bg-fixed bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/thank-you-bg.png')",
        }}
      >
        <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-[88px] text-white uppercase tracking-wide leading-none drop-shadow-lg">
            THANK YOU!
          </h1>

          {/* Subheading */}
          <p className="font-poppins font-bold text-2xl sm:text-3xl lg:text-[38px] text-white leading-snug drop-shadow-md max-w-[900px]">
            Our team will reach out to you shortly.
          </p>

          {/* Urgent Inquiry Phone CTA */}
          <div className="pt-2 sm:pt-4 space-y-2">
            <p className="font-poppins font-bold text-xl sm:text-2xl lg:text-[32px] text-white leading-snug drop-shadow-md">
              If you have an urgent inquiry, please call us at:
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="font-poppins font-bold text-2xl sm:text-3xl lg:text-[38px] text-white hover:underline block drop-shadow-md"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </main>

      {/* Reusable White Footer */}
      <Footer theme="light" />
    </div>
  );
}
