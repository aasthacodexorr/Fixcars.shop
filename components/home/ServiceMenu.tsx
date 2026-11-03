import Link from "next/link";
import { MAKES, SERVICES } from "@/lib/site";
import { ChevronIcon, ServiceIcon } from "./ServiceIcon";

export function ServiceLink({
  href,
  className,
  onClick,
  "aria-label": ariaLabel,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
  children: React.ReactNode;
}) {
  // Pages in this app use client navigation; the rest are on the landing site.
  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

const HEADING =
  "mb-2 px-3 text-[13px] font-bold uppercase tracking-[1px] text-gray-500";
const ROW =
  "group flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[16px] font-bold text-black transition-colors hover:bg-pale hover:text-brand";

// The full list of 11 pages, shared by the nav dropdown and the hero picker.
export function ServiceMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid gap-5 sm:grid-cols-[1.2fr_1fr]">
      <div>
        <ul>
          {SERVICES.map((service) => (
            <li key={service.name}>
              <ServiceLink
                href={service.href}
                onClick={onNavigate}
                className={ROW}
              >
                <ServiceIcon
                  name={service.icon}
                  className="size-[18px] shrink-0 text-brand2"
                />
                {service.name}
              </ServiceLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {MAKES.map((make) => (
            <li key={make.name}>
              <ServiceLink
                href={make.href}
                onClick={onNavigate}
                className={`${ROW} justify-between`}
              >
                {make.name} Mechanic
              </ServiceLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
