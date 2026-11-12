"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { getServiceInfo } from "@/lib/services";

export interface ThankYouContentProps {
  serviceName?: string;
  serviceSlug?: string;
}

export default function ThankYouContent({
  serviceName: initialName,
  serviceSlug: initialSlug,
}: ThankYouContentProps) {
  const serviceInfo = getServiceInfo(initialSlug || initialName);

  const headline = serviceInfo?.headline || "THANK YOU FOR YOUR Inquiry!";
  const receivedText =
    serviceInfo?.receivedText || "Our team will reach out to you shortly.";

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-[#1cc76a] selection:text-white">
      {/* Top Header with Centered Cardora Logo */}
      <header className="w-full bg-white border-b border-gray-100 py-3 sm:py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center">
          <Link href="/" className="inline-block transition hover:opacity-95">
            <Image
              src="/images/3_imgi_1_Cardora-n.png"
              alt={`${SITE_CONFIG.companyName} ${SITE_CONFIG.companyTagline}`}
              width={200}
              height={50}
              priority
              className="h-auto w-40 sm:w-48 object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Thank You Section with Fixed Background */}
      <main
        className="flex-1 w-full flex flex-col items-center justify-center text-center px-4 py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/thank-you-bg.png')",
        }}
      >
        <div className="max-w-[900px] mx-auto z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-5">
          {/* Main Headline */}
          <h1 className="font-anton text-2xl sm:text-4xl md:text-5xl lg:text-[48px] text-white uppercase tracking-wide leading-tight drop-shadow-md">
            {headline}
          </h1>

          {/* Subheading */}
          <p className="font-poppins font-medium sm:font-semibold text-base sm:text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-sm max-w-[700px]">
            {receivedText}
          </p>

          {/* Urgent Inquiry Phone CTA */}
          <div className="pt-2 space-y-1 sm:space-y-1.5">
            <p className="font-poppins font-medium text-sm sm:text-base md:text-lg text-white/90 drop-shadow-sm">
              If you have an urgent inquiry, please call us at:
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-white hover:text-[#1cc76a] transition hover:underline block drop-shadow-md"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>

          {/* Single Simple "Continue" Action Button */}
          <div className="pt-3 sm:pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center min-w-[200px] px-8 py-3 sm:py-3.5 rounded-full bg-[#1cc76a] hover:bg-[#19b35f] text-white font-poppins font-bold text-base sm:text-lg transition shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue
            </Link>
          </div>
        </div>
      </main>

      {/* Reusable White Footer */}
      <Footer theme="light" />
    </div>
  );
}
