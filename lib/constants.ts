/**
 * Centralized Site & Contact Configuration
 * Update any contact, company, or brand information here to reflect across the entire website.
 */

export const SITE_CONFIG = {
  companyName: "Cardora",
  companyTagline: "A Robinson Motor Company",
  
  // Contact Information
  phone: "(647) 492-2636",
  phoneHref: "tel:(647) 492-2636",
  address: "8050 Dixie Rd, Brampton, ON L6T 4W6",
  addressShort: "8050 Dixie Rd, Brampton, ON",
  
  // Business Hours
  hours: {
    weekday: "Mon - Fri: 08:00AM - 06:00PM",
    saturday: "Sat: 09:00AM - 04:00PM",
    sunday: "Closed",
  },

  // CTA Text & Promotions
  ctaText: "GET A FREE QUOTE",
  discountText: "PLUS 10% OFF FOR NEW CUSTOMERS*",
  
  // Legal
  copyrightYear: 2026,
  agencyName: "New Limits",
  privacyNotice:
    "Privacy Policy: Cardora respects your privacy. Any information submitted is strictly used for service quotation and scheduling.",
  termsNotice:
    "Terms of Service: Standard automotive repair terms and manufacturer warranty conditions apply.",
} as const;
