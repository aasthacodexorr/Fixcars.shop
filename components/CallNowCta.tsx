"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

interface CallNowCtaProps {
  textColor?: "black" | "white";
  className?: string;
}

export default function CallNowCta({
  textColor = "black",
  className = "",
}: CallNowCtaProps) {
  const textColorClass = textColor === "white" ? "text-white" : "text-black";

  return (
    <div className={`w-full max-w-[430px] text-center pt-1 ${className}`}>
      <p className={`text-2xl sm:text-[30px] font-bold ${textColorClass} tracking-tight`}>
        CALL NOW{" "}
        <a
          href={SITE_CONFIG.phoneHref}
          className="text-[#1cc76a] font-bold hover:underline"
        >
          {SITE_CONFIG.phone}
        </a>
      </p>
    </div>
  );
}
