// Business details and homepage content, taken from the Cardora landing pages.

export const PHONE_DISPLAY = "(905) 234-3313";
export const PHONE_HREF = "tel:+19052343313";
export const ADDRESS = "8050 Dixie Rd, Brampton, ON L6T 4W6";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=8050+Dixie+Rd%2C+Brampton%2C+ON+L6T+4W6";
export const HOURS = [
  { days: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
  { days: "Saturday", time: "9:00 AM – 4:00 PM" },
];

// Landing pages still hosted on the existing site. Update this one value if
// those pages move onto this app or to another domain.
const LANDING_PAGES = "https://cardora.fixcars.shop";

// Footer links, shared with the main Cardora site.
const MAIN_SITE = "https://cardora-2-0.vercel.app";
export const PRIVACY_URL = `${MAIN_SITE}/privacy-policy`;
export const TERMS_URL = `${MAIN_SITE}/terms-conditions`;
export const SITEMAP_URL = `${MAIN_SITE}/sitemap`;
export const ZOP_DEALER_URL = "https://www.zopdealer.com/";

export const FACEBOOK_URL = "https://www.facebook.com/cardorahq";
export const INSTAGRAM_URL = "https://www.instagram.com/cardora.ca/";
export const EMAIL = "info@cardora.ca";

export type ServiceIconName =
  | "alignment"
  | "ac"
  | "oil"
  | "brakes"
  | "tires"
  | "engine";

export interface Service {
  name: string;
  href: string;
  icon: ServiceIconName;
  blurb: string;
  includes: string[];
}

export const SERVICES: Service[] = [
  {
    name: "Brake Repairs",
    href: "/brakes-mechanic-ontario-cda",
    icon: "brakes",
    blurb: "The one-stop shop for all your brake repairs and replacements.",
    includes: ["Brake Servicing", "Brake Repairs", "Brake Changes"],
  },
  {
    name: "Tires",
    href: `${LANDING_PAGES}/tires-ontario-cda`,
    icon: "tires",
    blurb: "We supply and repair tires for cars, vans and 4x4s.",
    includes: ["Wheel Alignments", "Tire Repairs", "Tire Changes"],
  },
  {
    name: "Wheel Alignment",
    href: `${LANDING_PAGES}/wheel-alignment-experts-ontario-cda`,
    icon: "alignment",
    blurb: "Restore your vehicle’s handling and tire life to peak performance.",
    includes: ["Wheel Alignment", "Tire Balancing", "Suspension Check"],
  },
  {
    name: "Oil Change",
    href: `${LANDING_PAGES}/oil-change-service-ontario-cda`,
    icon: "oil",
    blurb: "Fast, professional, no-appointment oil changes with quality oils.",
    includes: ["Oil Change", "Routine Oil Change", "Oil Filter Replacement"],
  },
  {
    name: "Auto AC Repairs",
    href: `${LANDING_PAGES}/auto-ac-mechanic-ontario-cda`,
    icon: "ac",
    blurb: "We service and repair AC systems for cars, vans and 4x4s.",
    includes: ["A/C Servicing", "A/C Repairs", "A/C Regassing"],
  },
  {
    name: "Check Engine Light",
    href: `${LANDING_PAGES}/check-engine-light-repairs-ontario-cda`,
    icon: "engine",
    blurb: "Expert auto repairs for “check engine” light warnings.",
    includes: ["Light Assessment", "Light Diagnostic", "Light Repairs"],
  },
];

// Extra detail for the pinned wheel section, from each service's landing page.
export const WHEEL_STEPS = [
  {
    service: "Tires",
    headline: "Repaired, replaced or aligned",
    text: "Get your tires looked after by experienced and fully qualified technicians. We supply and repair tires for cars, vans and 4x4s.",
    reasons: [
      "Extensive Tire Selection",
      "Quality Guaranteed",
      "Competitive Pricing",
      "Keep Intact Your Manufacturer Warranty",
    ],
  },
  {
    service: "Wheel Alignment",
    headline: "Precision you can feel",
    text: "We service all vehicle types using cutting-edge technology and certified expertise, with manufacturer-approved adjustments to get you back on the road fast.",
    reasons: [
      "Free Alignment Checks",
      "Latest Wheel Alignment Equipment",
      "Comprehensive Vehicle Health Reports",
      "Satisfaction Guarantee With All Alignments",
    ],
  },
  {
    service: "Brake Repairs",
    headline: "Stop with confidence",
    text: "The one-stop shop for all your brake repairs and replacements. We supply and service brakes for cars, vans and 4x4s.",
    reasons: [
      "Skilled Brake Technicians",
      "Genuine Brake Parts & Accessories",
      "Quick Turnaround Time",
      "Customer Satisfaction Guaranteed",
    ],
  },
];

// The Volkswagen photo is "26 Volkswagen Atlas SE 4Motion.jpg" from Wikimedia
// Commons, released under CC0.
export const MAKES = [
  {
    name: "Dodge",
    model: "Durango",
    image: "/images/makes/dodge-durango.webp",
    href: `${LANDING_PAGES}/dodge-mechanic-ontario-cda`,
  },
  {
    name: "Toyota",
    model: "RAV4",
    image: "/images/makes/toyota-rav4.webp",
    href: `${LANDING_PAGES}/toyota-mechanic-ontario-cda`,
  },
  {
    name: "Volkswagen",
    model: "Atlas",
    image: "/images/makes/volkswagen-atlas.webp",
    href: `${LANDING_PAGES}/volkswagen-mechanic-ontario-cda`,
  },
  {
    name: "Hyundai",
    model: "Tucson",
    image: "/images/makes/hyundai-tucson.webp",
    href: `${LANDING_PAGES}/hyundai-mechanic-ontario-cda`,
  },
  {
    name: "Honda",
    model: "CR-V",
    image: "/images/makes/honda-crv.webp",
    href: `${LANDING_PAGES}/honda-mechanic-ontario-cda`,
  },
];

export const MAKE_SERVICES = [
  "General Mechanics",
  "Log Book Servicing",
  "Minor & Major Repairs",
];

export const PERKS = [
  { highlight: "10% OFF", text: "For New Customers*" },
  { highlight: "FREE", text: "Pick Up And Drop Off*" },
  { highlight: "FREE", text: "Exterior Wash (Value $50)" },
  { highlight: "FREE", text: "Tire Rotation With A Brake Job" },
  { highlight: "FREE", text: "15-min Inspection & 2nd Opinion" },
];

export const FEATURES = [
  { icon: "scanner", title: "Latest Scanners, Machinery & Diagnostic Tools" },
  { icon: "quality", title: "Quality You Can Trust" },
  { icon: "technicians", title: "Fully Qualified Technicians" },
  { icon: "price", title: "Less Expensive Than Dealerships" },
  { icon: "parts", title: "Genuine Parts Or Equivalents" },
  { icon: "warranty", title: "Keep Intact Your Manufacturer Warranty" },
  { icon: "booking", title: "Fast Bookings & Service" },
  { icon: "parking", title: "Convenient Location & Parking" },
] as const;

// Service reviews carried over from the existing brakes page. The live landing
// pages' reviews describe an unrelated funnel-building contractor, so they are
// deliberately not used here.
export const REVIEWS = [
  {
    name: "Gurpreet D.",
    photo: "/images/23_cda-gurpreet-d..png",
    text: "Got my tire alignment done here recently and honestly had a really good experience. The whole place is clean, organized, and the staff was easy to deal with. They explained everything properly, got the job done on time, and the pricing was fair too.",
  },
  {
    name: "Virtual F.",
    photo: "/images/22_cda-Virtual-F..png",
    text: "6 out of 5 stars. Excellent service Quick Detailed Honest Friendly.",
  },
  {
    name: "Lynn M.",
    photo: "/images/20_cda-lynn-m.png",
    text: "Thank you so much Sam service was above and beyond made for a great experience.",
  },
  {
    name: "CK M.",
    photo: "/images/28_cda-ck-m.png",
    text: "Awesome service ! Sam was very helpful, he did what others couldn’t do. 100 % recommended this dealership.",
  },
  {
    name: "Elmi I.",
    photo: "/images/24_cda-Elmi-I..png",
    text: "The service was exceptional and he was patient throughout the entire process. Would definitely recommend him.",
  },
];
