"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  DIRECTIONS_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";
import { QuoteButton } from "./QuoteContext";
import { ChevronIcon, FaIcon } from "./ServiceIcon";
import { ServiceMenu } from "./ServiceMenu";
import { useDismissable } from "./useDismissable";

function Logo({ className }: { className: string }) {
  return (
    <Link href="/" aria-label="Cardora home" className="shrink-0">
      <Image
        src="/images/brand/cardora-logo.png"
        alt="Cardora, a Robinson Motor Company"
        width={330}
        height={138}
        loading="eager"
        className={className}
      />
    </Link>
  );
}

export default function SiteNav() {
  const {
    isOpen: servicesOpen,
    setIsOpen: setServicesOpen,
    ref: servicesRef,
  } = useDismissable<HTMLDivElement>();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <header className="fixed top-0 z-40 hidden w-full bg-white px-8 shadow-[0_2px_10px_rgba(0,0,0,0.05)] lg:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 py-3">
          <div className="flex items-center gap-6">
            <Logo className="h-auto w-[165px]" />
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="nav-services"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex h-[46px] cursor-pointer items-center gap-2 rounded-[12px] border border-brand2 bg-white px-5 text-[16px] font-bold text-brand2 transition-colors hover:bg-pale"
              >
                Services
                <ChevronIcon
                  className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div
                  id="nav-services"
                  className="absolute left-0 top-full w-[600px] pt-3"
                >
                  <div className="rounded-[12px] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                    <ServiceMenu onNavigate={() => setServicesOpen(false)} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-[5px] whitespace-nowrap text-[20px] font-semibold text-brand"
            >
              <Image
                src="/images/brand/call.svg"
                alt=""
                width={22}
                height={22}
                className="size-[22px]"
              />
              {PHONE_DISPLAY}
            </a>
            <QuoteButton className="btn-green h-[46px] cursor-pointer whitespace-nowrap rounded-[12px] px-6 text-[15px] font-medium text-white transition-opacity hover:opacity-90" />
          </div>
        </div>
      </header>

      {/* Mobile: same two-row layout as the main Cardora header */}
      <header className="fixed left-0 top-0 z-40 w-full bg-[#f9f9f9] lg:hidden">
        <div className="flex h-[62px] items-center justify-between border-b border-gray-200 px-3">
          <Logo className="h-auto w-[124px]" />
          <div className="flex items-center gap-5 pr-1">
            <a href={FACEBOOK_URL} aria-label="Cardora on Facebook">
              <Image
                src="/images/brand/facebook.png"
                alt=""
                width={32}
                height={32}
              />
            </a>
            <a href={INSTAGRAM_URL} aria-label="Cardora on Instagram">
              <Image
                src="/images/brand/instagram.png"
                alt=""
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
        <div className="flex h-[67px] items-center justify-between bg-white px-3">
          <div className="flex gap-5">
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="grid h-[42px] w-[90px] place-items-center rounded-[5px] bg-brand text-white"
            >
              <FaIcon icon={faPhone} className="size-[17px]" />
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions"
              className="grid h-[42px] w-[90px] place-items-center rounded-[5px] bg-brand text-white"
            >
              <FaIcon icon={faLocationDot} className="size-[17px]" />
            </a>
          </div>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close services" : "Open services"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid size-9 cursor-pointer place-items-center text-black"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="size-6"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="max-h-[calc(100dvh-129px)] overflow-y-auto border-t border-gray-200 bg-white p-3">
            <ServiceMenu onNavigate={() => setMobileOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
}
