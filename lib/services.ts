export interface ServiceMeta {
  slug: string;
  name: string;
  headline: string;
  receivedText: string;
  description?: string;
}

// Canonical registry matching user's exact enquiry copy
export const KNOWN_SERVICES: Record<string, ServiceMeta> = {
  "brakes-mechanic-ontario-cda": {
    slug: "brakes-mechanic-ontario-cda",
    name: "Brake Service",
    headline: "Thank You for Your Brake Service Inquiry!",
    receivedText:
      "We’ve received your request for brake service. Our team will reach out to you shortly.",
    description: "Expert brake inspection, repair, pad and rotor replacements in Brampton, ON.",
  },
  "wheel-alignment-experts-ontario-cda": {
    slug: "wheel-alignment-experts-ontario-cda",
    name: "Wheel Service",
    headline: "Thank You for Your Wheel Service Inquiry!",
    receivedText:
      "We’ve received your request for wheel service. Our team will reach out to you shortly.",
    description: "Precision wheel alignment and suspension inspection in Brampton, ON.",
  },
  "tires-ontario-cda": {
    slug: "tires-ontario-cda",
    name: "Tire Service",
    headline: "Thank You for Your Tire Service Inquiry!",
    receivedText:
      "We’ve received your request for tire service. Our team will reach out to you shortly.",
    description: "Quality tire supply, fitting, balancing, and repair services in Brampton, ON.",
  },
  "auto-ac-mechanic-ontario-cda": {
    slug: "auto-ac-mechanic-ontario-cda",
    name: "Auto AC Service",
    headline: "Thank You for Your Auto AC Service Inquiry!",
    receivedText:
      "We’ve received your request for auto AC service. Our team will reach out to you shortly.",
    description: "Automotive air conditioning diagnostics and repair in Brampton, ON.",
  },
  "oil-change-service-ontario-cda": {
    slug: "oil-change-service-ontario-cda",
    name: "Oil Change",
    headline: "Thank You for Your Oil Change Inquiry!",
    receivedText:
      "We’ve received your request for oil change service. Our team will reach out to you shortly.",
    description: "Fast, professional full-synthetic and conventional oil changes.",
  },
  "check-engine-light-repairs-ontario-cda": {
    slug: "check-engine-light-repairs-ontario-cda",
    name: "Engine Light",
    headline: "Thank You for Your Engine Light Inquiry!",
    receivedText:
      "We’ve received your request for engine light service. Our team will reach out to you shortly.",
    description: "Advanced OBD-II computer diagnostics and check engine repairs.",
  },
  "toyota-mechanic-ontario-cda": {
    slug: "toyota-mechanic-ontario-cda",
    name: "Toyota Service",
    headline: "Thank You for Your Toyota Service Inquiry!",
    receivedText:
      "We’ve received your request for Toyota vehicle service. Our team will reach out to you shortly.",
    description: "Certified Toyota maintenance, diagnostics, and repairs in Brampton, ON.",
  },
  "honda-mechanic-ontario-cda": {
    slug: "honda-mechanic-ontario-cda",
    name: "Honda Service",
    headline: "Thank You for Your Honda Service Inquiry!",
    receivedText:
      "We’ve received your request for Honda vehicle service. Our team will reach out to you shortly.",
    description: "Certified Honda maintenance, diagnostics, and repairs in Brampton, ON.",
  },
  "hyundai-mechanic-ontario-cda": {
    slug: "hyundai-mechanic-ontario-cda",
    name: "Hyundai Service",
    headline: "Thank You for Your Hyundai Service Inquiry!",
    receivedText:
      "We’ve received your request for Hyundai vehicle service. Our team will reach out to you shortly.",
    description: "Certified Hyundai maintenance, diagnostics, and repairs in Brampton, ON.",
  },
  "dodge-mechanic-ontario-cda": {
    slug: "dodge-mechanic-ontario-cda",
    name: "Dodge Service",
    headline: "Thank You for Your Dodge Service Inquiry!",
    receivedText:
      "We’ve received your request for Dodge vehicle service. Our team will reach out to you shortly.",
    description: "Certified Dodge maintenance, diagnostics, and repairs in Brampton, ON.",
  },
  "volkswagen-mechanic-ontario-cda": {
    slug: "volkswagen-mechanic-ontario-cda",
    name: "Volkswagen Service",
    headline: "Thank You for Your Volkswagen Service Inquiry!",
    receivedText:
      "We’ve received your request for Volkswagen vehicle service. Our team will reach out to you shortly.",
    description: "Certified Volkswagen maintenance, diagnostics, and repairs in Brampton, ON.",
  },
};

// Aliases mapping common keywords/short slugs to canonical keys
const SLUG_ALIASES: Record<string, string> = {
  brakes: "brakes-mechanic-ontario-cda",
  "brake-repairs": "brakes-mechanic-ontario-cda",
  "brake-service": "brakes-mechanic-ontario-cda",
  tires: "tires-ontario-cda",
  "tire-repair": "tires-ontario-cda",
  "tire-service": "tires-ontario-cda",
  "wheel-alignment": "wheel-alignment-experts-ontario-cda",
  wheels: "wheel-alignment-experts-ontario-cda",
  alignment: "wheel-alignment-experts-ontario-cda",
  "wheel-service": "wheel-alignment-experts-ontario-cda",
  "oil-change": "oil-change-service-ontario-cda",
  oil: "oil-change-service-ontario-cda",
  "auto-ac": "auto-ac-mechanic-ontario-cda",
  ac: "auto-ac-mechanic-ontario-cda",
  "ac-repairs": "auto-ac-mechanic-ontario-cda",
  "auto-ac-service": "auto-ac-mechanic-ontario-cda",
  "check-engine-light": "check-engine-light-repairs-ontario-cda",
  "check-engine": "check-engine-light-repairs-ontario-cda",
  engine: "check-engine-light-repairs-ontario-cda",
  "engine-light": "check-engine-light-repairs-ontario-cda",
  dodge: "dodge-mechanic-ontario-cda",
  toyota: "toyota-mechanic-ontario-cda",
  volkswagen: "volkswagen-mechanic-ontario-cda",
  vw: "volkswagen-mechanic-ontario-cda",
  hyundai: "hyundai-mechanic-ontario-cda",
  honda: "honda-mechanic-ontario-cda",
};

/**
 * Normalizes any slug, URL path, or service name to a ServiceMeta object.
 * Returns null if empty, "/" (home), or unrecognized arbitrary text.
 */
export function getServiceInfo(input?: string | null): ServiceMeta | null {
  if (!input) return null;

  // Clean string: remove leading/trailing slashes, decode URI components
  let clean = decodeURIComponent(input).trim().toLowerCase();
  clean = clean.replace(/^\/+|\/+$/g, "");
  clean = clean.replace(/\/thank-you$/i, "");

  if (!clean) return null;

  if (KNOWN_SERVICES[clean]) {
    return KNOWN_SERVICES[clean];
  }

  if (SLUG_ALIASES[clean]) {
    return KNOWN_SERVICES[SLUG_ALIASES[clean]];
  }

  // Check matching against canonical service names or slugs
  for (const item of Object.values(KNOWN_SERVICES)) {
    if (
      item.name.toLowerCase() === clean ||
      item.slug.toLowerCase() === clean
    ) {
      return item;
    }
  }

  // Check partial matches on exact aliases only
  for (const [alias, canonicalSlug] of Object.entries(SLUG_ALIASES)) {
    if (clean === alias || clean.startsWith(`${alias}-`) || clean.endsWith(`-${alias}`)) {
      return KNOWN_SERVICES[canonicalSlug];
    }
  }

  // Dynamic formatting fallback only for unlisted service landing-page slugs ending with -ontario-cda
  if (clean.includes("-ontario-cda")) {
    const humanReadable = clean
      .replace(/-ontario-cda$/i, "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      slug: clean,
      name: `${humanReadable} Service`,
      headline: `Thank You for Your ${humanReadable} Service Inquiry!`,
      receivedText: `We’ve received your request for ${humanReadable.toLowerCase()} service. Our team will reach out to you shortly.`,
      description: `Professional ${humanReadable} services in Brampton, Ontario.`,
    };
  }

  return null;
}

/**
 * Returns list of static params for SSG pre-rendering all service thank-you pages.
 */
export function getAllServiceSlugs(): { slug: string }[] {
  return Object.keys(KNOWN_SERVICES).map((slug) => ({ slug }));
}
