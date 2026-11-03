import Image from "next/image";
import Link from "next/link";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  DIRECTIONS_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICES,
} from "@/lib/site";
import { QuoteButton } from "./QuoteContext";
import { FaIcon } from "./ServiceIcon";
import { ServiceLink } from "./ServiceMenu";

// A short line between links, drawn separately so the whole link stays clickable.
const DIVIDER =
  "relative before:absolute before:left-0 before:top-1/2 before:h-5 before:w-px before:-translate-y-1/2 before:bg-gray-300 first:before:hidden";

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
  return (
    <>
      {/* Desktop */}
      <header className="fixed top-0 z-40 hidden w-full bg-white px-8 shadow-[0_2px_10px_rgba(0,0,0,0.05)] lg:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 py-3">
          <Logo className="h-auto w-[165px]" />

          <nav aria-label="Services" className="flex items-center">
            {SERVICES.map((service) => (
              <ServiceLink
                key={service.name}
                href={service.href}
                aria-label={service.name}
                className={`${DIVIDER} px-3 py-2 text-[15px] font-bold text-black transition-colors hover:text-brand xl:px-5 xl:text-[17px]`}
              >
                {service.short}
              </ServiceLink>
            ))}
          </nav>

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

      {/* Mobile: contact links on top, then the six services in one row */}
      <header className="fixed left-0 top-0 z-40 w-full bg-[#f9f9f9] lg:hidden">
        <div className="flex h-[62px] items-center justify-between gap-2 border-b border-gray-200 px-3">
          <Logo className="h-auto w-[112px] sm:w-[124px]" />
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="grid size-9 place-items-center rounded-[8px] bg-brand text-white"
            >
              <FaIcon icon={faPhone} className="size-[16px]" />
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions"
              className="grid size-9 place-items-center rounded-[8px] bg-brand text-white"
            >
              <FaIcon icon={faLocationDot} className="size-[16px]" />
            </a>
            <a href={FACEBOOK_URL} aria-label="Cardora on Facebook">
              <Image
                src="/images/brand/facebook.png"
                alt=""
                width={30}
                height={30}
              />
            </a>
            <a href={INSTAGRAM_URL} aria-label="Cardora on Instagram">
              <Image
                src="/images/brand/instagram.png"
                alt=""
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
        <nav
          aria-label="Services"
          className="grid h-[44px] grid-cols-6 bg-white px-1 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
        >
          {SERVICES.map((service) => (
            <ServiceLink
              key={service.name}
              href={service.href}
              aria-label={service.name}
              className={`${DIVIDER} flex items-center justify-center text-[13px] font-bold text-black active:text-brand sm:text-[15px]`}
            >
              {service.short}
            </ServiceLink>
          ))}
        </nav>
      </header>
    </>
  );
}
