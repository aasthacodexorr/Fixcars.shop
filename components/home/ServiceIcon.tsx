import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowsLeftRightToLine,
  faAward,
  faCalendarCheck,
  faCompactDisc,
  faGears,
  faLifeRing,
  faOilCan,
  faShieldHalved,
  faSnowflake,
  faSquareParking,
  faStethoscope,
  faTag,
  faTriangleExclamation,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import type { ServiceIconName } from "@/lib/site";

export function FaIcon({
  icon,
  className = "",
}: {
  icon: IconDefinition;
  className?: string;
}) {
  const [width, height, , , path] = icon.icon;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={Array.isArray(path) ? path.join(" ") : path} />
    </svg>
  );
}

const SERVICE_ICONS: Record<ServiceIconName, IconDefinition> = {
  brakes: faCompactDisc,
  tires: faLifeRing,
  alignment: faArrowsLeftRightToLine,
  oil: faOilCan,
  ac: faSnowflake,
  engine: faTriangleExclamation,
};

export const FEATURE_ICONS = {
  scanner: faStethoscope,
  quality: faAward,
  technicians: faUserGear,
  price: faTag,
  parts: faGears,
  warranty: faShieldHalved,
  booking: faCalendarCheck,
  parking: faSquareParking,
};

export function ServiceIcon({
  name,
  className = "",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return <FaIcon icon={SERVICE_ICONS[name]} className={className} />;
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m5 12.500 4.500 4.500L19 7.500" />
    </svg>
  );
}
