"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

interface FooterProps {
  theme?: "dark" | "light";
}

export default function Footer({ theme = "dark" }: FooterProps) {
  const isLight = theme === "light";
  const bgClass = isLight ? "bg-white text-gray-900 border-gray-100" : "bg-[#121319] text-white border-neutral-800";
  const textClass = isLight ? "text-gray-900" : "text-white";
  const linkClass = isLight ? "text-gray-900 hover:underline" : "text-white hover:underline";
  const dividerClass = isLight ? "text-gray-400" : "text-white/60";

  return (
    <footer className={`w-full py-8 sm:py-10 px-4 sm:px-8 border-t text-[14px] ${bgClass}`}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
        {/* Left: Operating Hours */}
        <div className="space-y-1">
          <p className={`${textClass} font-normal`}>
            Open: {SITE_CONFIG.hours.weekday}
          </p>
          <p className={`${textClass} font-normal`}>
            {SITE_CONFIG.hours.saturday}
          </p>
        </div>

        {/* Center: Legal & Contact */}
        <div className="space-y-1.5 text-center">
          <div className="space-x-3 font-bold">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert(SITE_CONFIG.privacyNotice);
              }}
              className={`${linkClass} transition`}
            >
              Privacy Policy
            </a>
            <span className={dividerClass}>|</span>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                alert(SITE_CONFIG.termsNotice);
              }}
              className={`${linkClass} transition`}
            >
              Terms Of Service
            </a>
          </div>
          <p className={textClass}>
            Phone:{" "}
            <a
              href={SITE_CONFIG.phoneHref}
              className={`${linkClass} font-medium`}
            >
              {SITE_CONFIG.phone}
            </a>
          </p>
        </div>

        {/* Right: Copyright */}
        <div className="space-y-1 md:text-right">
          <p className={`${textClass} font-normal`}>
            Copyright &copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.companyName}
          </p>
          <p className={`${textClass} font-normal`}>
            Landing Page by {SITE_CONFIG.agencyName}
          </p>
        </div>
      </div>
    </footer>
  );
}
