"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#121319] text-white py-10 px-4 sm:px-8 border-t border-neutral-800 text-[14px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
        {/* Left: Operating Hours */}
        <div className="space-y-1">
          <p className="text-white font-normal">
            Open: Mon - Fri: 08:00AM - 06:00PM
          </p>
          <p className="text-white font-normal">
            Sat: 09:00AM - 04:00PM
          </p>
        </div>

        {/* Center: Legal & Contact */}
        <div className="space-y-2 text-center">
          <div className="space-x-3 text-white font-bold">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Privacy Policy: Cardora respects your privacy. Any information submitted is strictly used for service quotation and scheduling."
                );
              }}
              className="text-white hover:underline transition"
            >
              Privacy Policy
            </a>
            <span className="text-white/60">|</span>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Terms of Service: Standard automotive repair terms and manufacturer warranty conditions apply."
                );
              }}
              className="text-white hover:underline transition"
            >
              Terms Of Service
            </a>
          </div>
          <p className="text-white">
            Phone:{" "}
            <a
              href="tel:(647) 492-2636"
              className="text-white font-medium hover:underline"
            >
              (647) 492-2636
            </a>
          </p>
        </div>

        {/* Right: Copyright */}
        <div className="space-y-1 md:text-right">
          <p className="text-white">Copyright © 2026 Cardora</p>
          <p className="text-white">
            Landing Page by{" "}
            <a
              href="https://www.newlimits.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline"
            >
              New Limits
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
