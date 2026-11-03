"use client";

import React from "react";
import SiteNav from "@/components/home/SiteNav";

interface HeaderProps {
  onOpenQuote?: () => void;
}

export default function Header(_props?: HeaderProps) {
  return <SiteNav />;
}
