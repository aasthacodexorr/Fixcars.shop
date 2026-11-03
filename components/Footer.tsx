"use client";

import React from "react";
import { SiteFooter } from "@/components/home/Sections";

interface FooterProps {
  theme?: "dark" | "light";
}

export default function Footer(_props?: FooterProps) {
  return <SiteFooter />;
}
