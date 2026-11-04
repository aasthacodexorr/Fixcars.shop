import React from "react";

export interface OfferPerk {
  highlight: string;
  text: string;
}

export interface ServiceCardItem {
  img: string;
  title: string;
  alt: string;
}

export interface WhyUsFeatureItem {
  img: string;
  title: string;
}

export interface LandingPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    headline: React.ReactNode;
    subheading1: string;
    subheading2: string;
    subheading3:string;
    imageSrc: string;
    imageAlt: string;
  };
  offers: {
    title: React.ReactNode;
    perks: OfferPerk[];
    imageSrc?: string;
  };
  technicians: {
    title: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
  };
  accentBar2Text: string;
  services: {
    title: string;
    items: ServiceCardItem[];
  };
  whyUs: {
    title: string;
    features: WhyUsFeatureItem[];
  };
}

// ----------------------------------------------------
// 1. Brakes Page Data (Default / Homepage)
// ----------------------------------------------------
export const BRAKES_PAGE_DATA: LandingPageData = {
  slug: "brakes-mechanic-ontario-cda",
  metaTitle: "Brake Repairs Brampton, Ontario | Cardora",
  metaDescription:
    "The one-stop shop for all your brake repairs & replacements in Brampton, ON. We supply and service brakes for cars, vans & 4x4s.",
  hero: {
    headline: (
      <>
        Brampton's most trusted car
        <br className="hidden sm:inline" /> Brakes repair shop
      </>
    ),
    subheading1: "The one-stop shop for all your brake repairs & replacements!",
    subheading2: "We supply and service brakes for cars, vans & 4x4s.",
    subheading3:"",
    imageSrc: "/images/4_NL-Brakes-Subro.png",
    imageAlt: "High Performance Car Brake System",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR BRAKES REPAIR WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "Tire Rotation With A Brake Job" },
      { highlight: "FREE", text: "15-min Inspection & 2nd Opinion" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR BRAKES REPAIRED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/7_Brakes-gen-nw.png",
    imageAlt: "Brake Pad and Rotor Repair by Certified Mechanics",
  },
  accentBar2Text: "Specialized Brake Technicians",
  services: {
    title: "OUR BRAKES SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Brake Servicing",
        alt: "Brake Servicing & Inspection",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Brake Repairs",
        alt: "Car Brake Repairs & Replacements",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "Brake Changes",
        alt: "Brake Pad and Rotor Changes",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR BRAKES FIXED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Brake Repairs",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Customization For Brake Systems",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Skilled Brake Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Range Of Brake Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine Brake Parts & Accessories",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Customer Satisfaction Guaranteed",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 2. Wheel Alignment Page Data
// ----------------------------------------------------
export const WHEEL_ALIGNMENT_PAGE_DATA: LandingPageData = {
  slug: "wheel-alignment-experts-ontario-cda",
  metaTitle: "Wheel Alignment Brampton, Ontario | Cardora",
  metaDescription:
    "Precision wheel alignment, tire balancing and steering suspension checks in Brampton, Ontario. Professional service for all cars, vans & 4x4s.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED WHEEL
        <br className="hidden sm:inline" /> ALIGNMENT EXPERTS
      </>
    ),
    subheading1:
      "Your one-stop solution for precise wheel alignment! ",
    subheading2:
      "We service all vehicle types using cutting-edge technology and certified expertise.",
    subheading3:"Get back on the road fast with our efficient service, manufacturer-approved adjustments, and satisfaction guarantee.",
    imageSrc: "/images/Wheel-hero.png",
    imageAlt: "Precision Wheel Alignment and Tire Balancing",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR WHEEL ALIGNMENT WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "Tire Rotation With A Brake Job" },
      { highlight: "FREE", text: "15-min Inspection & 2nd Opinion" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        Get Your Wheel Alignment Done By Fully
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/Wheel-service.png",
    imageAlt: "Computerized Wheel Alignment by Certified Mechanics",
  },
  accentBar2Text: "We Restore Your Vehicle's Handling And Tire Life To Peak Performance! ",
  services: {
    title: "OUR WHEEL ALIGNMENT SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Wheel Alignment",
        alt: "Computerized 4-Wheel Alignment",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Tire Balancing",
        alt: "High Precision Tire Balancing",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "Suspension Check",
        alt: "Suspension and Steering Component Check",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR WHEELS ALIGNED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Wheel Alignment",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Precision Computerized Alignment",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Skilled Alignment Specialists",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Steering & Suspension Care",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine OEM Replacement Parts",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Customer Satisfaction Guaranteed",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 3. Auto AC Mechanic Page Data
// ----------------------------------------------------
export const AUTO_AC_PAGE_DATA: LandingPageData = {
  slug: "auto-ac-mechanic-ontario-cda",
  metaTitle: "Auto AC Repairs Brampton, Ontario | Cardora",
  metaDescription:
    "Professional car air conditioning servicing, leak repairs, and AC regassing in Brampton, Ontario. Certified mechanics for cars, vans & 4x4s.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED AUTO AC
         MECHANIC & REPAIR SHOP
      </>
    ),
    subheading1:
      "One-stop shop for all your auto air conditioning & heating repairs!",
    subheading2:
      "We diagnose, recharge and service AC systems for cars, vans & 4x4s.",
      subheading3:"",
    imageSrc: "/images/Wheel-hero.png",
    imageAlt: "Car Air Conditioning and Climate Control Repair",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR AUTO AC REPAIR WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "AC Vent Temperature Check" },
      { highlight: "FREE", text: "15-min Leak Inspection & 2nd Opinion" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR AC SYSTEM SERVICED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/AC-service.png",
    imageAlt: "Auto Air Conditioning Repair by Certified Mechanics",
  },
  accentBar2Text: "Specialized Auto AC Technicians",
  services: {
    title: "OUR AUTO AC SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "A/C Servicing",
        alt: "Car Air Conditioning Servicing & Inspection",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "A/C Repairs",
        alt: "Compressor, Condenser & Hose Leak Repairs",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "A/C Regassing",
        alt: "R134a & R1234yf Refrigerant Recharge",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR AUTO AC REPAIRED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Auto AC Repairs",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Advanced Leak Detection & Diagnostics",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Certified Climate Control Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Range Of AC Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "OEM Refrigerants & Genuine Parts",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Customer Satisfaction Guaranteed",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 4. Oil Change Service Page Data
// ----------------------------------------------------
export const OIL_CHANGE_PAGE_DATA: LandingPageData = {
  slug: "oil-change-service-ontario-cda",
  metaTitle: "Oil Change in Brampton, Ontario | Cardora",
  metaDescription:
    "Fast, warranty-approved oil changes and filter replacements in Brampton, Ontario. High quality synthetic oils & multi-point inspections for all vehicles.",
  hero: {
    headline: (
      <>
        NO APPOINTMENT OIL
        <br className="hidden sm:inline" /> CHANGE IN Brampton 
      </>
    ),
    subheading1:
      "The one-stop shop for fast, professional oil & filter changes!",
    subheading2:
      "We supply and change motor oils & filters for cars, vans & 4x4s.",
    subheading3:"",
    imageSrc: "/images/oil-hero.png",
    imageAlt: "Professional Engine Oil Change & Filter Replacement",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR OIL CHANGE WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "Tire Rotation With A Brake Job" },
      { highlight: "FREE", text: "15-min Inspection & 2nd Opinion" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR OIL CHANGED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/Oil-service.png",
    imageAlt: "Certified Oil Change and Maintenance Mechanics",
  },
  accentBar2Text: "Specialized Oil & Lube Technicians",
  services: {
    title: "OUR OIL CHANGE SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Oil Change",
        alt: "Full Synthetic & Conventional Oil Change",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Routine Servicing",
        alt: "Manufacturer Scheduled Maintenance & Lube Service",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "Oil Filter Replacement",
        alt: "OEM Oil Filter & Engine Protection Check",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR OIL CHANGED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Latest Scanners, Machinery & Diagnostic Tools",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Quality you Can Trust",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Fully Qualified Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Affordable Oil Change Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Quality Oil & Filter",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Satisfaction Guaranteed",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Fast Bookings And Services",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Trusted Local Auto Repair Shop",
      },
    ],
  },
};

// ----------------------------------------------------
// 5. Tires Page Data
// ----------------------------------------------------
export const TIRES_PAGE_DATA: LandingPageData = {
  slug: "tires-ontario-cda",
  metaTitle: "Tires Brampton, Ontario | Cardora",
  metaDescription:
    "We supply and repair tires for cars, vans and 4x4s in Brampton, Ontario. Extensive tire selection, certified installation & puncture repairs.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED CAR
        <br className="hidden sm:inline" /> TIRE WORKSHOP 
      </>
    ),
    subheading1: "The one-stop shop for all your Tire repairs & changes!",
    subheading2: "We supply and service tires for cars, vans & 4x4s.",
    subheading3:"",
    imageSrc: "/images/tires-hero.png",
    imageAlt: "Car Tire Sales and Puncture Repairs",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR TIRES REPAIR WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "Tire Rotation With A Brake Job" },
      { highlight: "FREE", text: "15-min Inspection & 2nd Opinion" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        Get Your Tires Repaired, Replaced Or Aligned
        <br className="hidden sm:inline" /> By Experienced And Fully Qualified Technicians 
      </>
    ),
    imageSrc: "/images/tires-services.png",
    imageAlt: "Tire Repair and Installation by Certified Mechanics",
  },
  accentBar2Text: "Experience The Excellence",
  services: {
    title: "OUR TIRES SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Wheel Alignments",
        alt: "Wheel Alignments & Inspection",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Tire Repairs",
        alt: "Tire Puncture & Patch Repairs",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "Tire Changes",
        alt: "Seasonal Tire Changes & Fitting",
      },
    ],
  },
  whyUs: {
    title: "WHY BRING YOUR car TO US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Extensive Tire Selection",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Quality Guaranteed",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Fully Qualified & skilled Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Competitive Pricing",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine Parts Or better Equivalents",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Keep Intact Your Manufacturer Warranty",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Fast Bookings & reliable Service",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Trusted Local Auto Repair Shop",
      },
    ],
  },
};

// ----------------------------------------------------
// 6. Check Engine Light Repairs Page Data
// ----------------------------------------------------
export const CHECK_ENGINE_LIGHT_PAGE_DATA: LandingPageData = {
  slug: "check-engine-light-repairs-ontario-cda",
  metaTitle: "Check Engine Light Diagnostics Brampton, Ontario | Cardora",
  metaDescription:
    "Expert auto repairs and computer diagnostics for check engine light warnings in Brampton, Ontario. Fast diagnostics and certified repairs.",
  hero: {
    headline: (
      <>
        Expert Auto Repairs for 'Check
        <br className="hidden sm:inline" />Engine' Light Warnings in Brampton 
      </>
    ),
    subheading1:
      "The one-stop shop for all your engine diagnostic & repairs!",
    subheading2:
      "We diagnose and repair engines for cars, vans & 4x4s.",
    subheading3:"",
    imageSrc: "/images/Engine-hero.png",
    imageAlt: "Car Check Engine Light Diagnostic Tool",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR ENGINE DIAGNOSTIC WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "OBD2 Engine Code Scan" },
      { highlight: "FREE", text: "15-min Inspection & 2nd Opinion" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR ENGINE CHECKED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/Engine-service.png",
    imageAlt: "Engine Diagnostics by Certified Mechanics",
  },
  accentBar2Text: "Specialized Engine Diagnostic Technicians",
  services: {
    title: "OUR ENGINE SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Light Assessment",
        alt: "Computer Code Scan & Assessment",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Light Diagnostic",
        alt: "Comprehensive Sensor & Engine Diagnostic",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "Light Repairs",
        alt: "Engine Component & Sensor Repairs",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR ENGINE CHECKED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Engine Diagnostics",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Latest Diagnostic Scanners & Tools",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Certified Diagnostic Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Range Of Engine Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine Sensors & Parts",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Customer Satisfaction Guaranteed",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 7. Dodge Mechanic Page Data
// ----------------------------------------------------
export const DODGE_PAGE_DATA: LandingPageData = {
  slug: "dodge-mechanic-ontario-cda",
  metaTitle: "Dodge Mechanic Brampton, Ontario | Cardora",
  metaDescription:
    "Brampton's trusted Dodge auto repair shop. Minor & major repairs, log book servicing, and general mechanics by certified Dodge specialists.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED DODGE
        <br className="hidden sm:inline" /> REPAIR SHOP
      </>
    ),
    subheading1: " ",
    subheading2: "We supply and service Dodge cars, vans, trucks & 4x4s.",
    subheading3:"",
    imageSrc: "/images/A_durango (1).png",
    imageAlt: "Dodge Auto Repair and Maintenance",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR DODGE REPAIRS WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "15-min Dodge Inspection & 2nd Opinion" },
      { highlight: "FREE", text: "Multi-Point Safety Check" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR DODGE REPAIRED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/Dodge-service.png",
    imageAlt: "Dodge Maintenance by Certified Technicians",
  },
  accentBar2Text: "Specialized Dodge Technicians",
  services: {
    title: "OUR DODGE SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Minor & Major Repairs",
        alt: "Dodge Minor & Major Repairs",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Log Book Servicing",
        alt: "Dodge Log Book Servicing",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "General Mechanics",
        alt: "Dodge General Mechanics",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR DODGE FIXED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Dodge Repairs",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Certified Brand Experience",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Skilled Dodge Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Dodge Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine Dodge Parts Or Equivalents",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Keep Intact Your Manufacturer Warranty",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 8. Toyota Mechanic Page Data
// ----------------------------------------------------
export const TOYOTA_PAGE_DATA: LandingPageData = {
  slug: "toyota-mechanic-ontario-cda",
  metaTitle: "Toyota Mechanic Brampton, Ontario | Cardora",
  metaDescription:
    "Brampton's trusted Toyota auto repair shop. Minor & major repairs, log book servicing, and warranty-safe maintenance by certified Toyota specialists.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED TOYOTA
        <br className="hidden sm:inline" /> REPAIR SHOP
      </>
    ),
    subheading1: "",
    subheading2: "We supply and service Toyota cars, vans, SUVs & hybrids.",
    subheading3:"",
    imageSrc: "/images/A_toyota.png",
    imageAlt: "Toyota Auto Repair and Maintenance",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR TOYOTA REPAIRS WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "15-min Toyota Inspection & 2nd Opinion" },
      { highlight: "FREE", text: "Multi-Point Safety Check" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR TOYOTA REPAIRED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/Toyota-service.png",
    imageAlt: "Toyota Maintenance by Certified Technicians",
  },
  accentBar2Text: "Specialized Toyota Technicians",
  services: {
    title: "OUR TOYOTA SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Minor & Major Repairs",
        alt: "Toyota Minor & Major Repairs",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Log Book Servicing",
        alt: "Toyota Log Book Servicing",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "General Mechanics",
        alt: "Toyota General Mechanics",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR TOYOTA FIXED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Toyota Repairs",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Certified Brand Experience",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Skilled Toyota Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Range Of Toyota Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine Toyota Parts Or Equivalents",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Keep Intact Your Manufacturer Warranty",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 9. Volkswagen Mechanic Page Data
// ----------------------------------------------------
export const VOLKSWAGEN_PAGE_DATA: LandingPageData = {
  slug: "volkswagen-mechanic-ontario-cda",
  metaTitle: "Volkswagen Mechanic Brampton, Ontario | Cardora",
  metaDescription:
    "Brampton's trusted Volkswagen auto repair shop. Expert European diagnostics, log book servicing, and certified VW repairs.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED VOLKSWAGEN REPAIR SHOP
      </>
    ),
    subheading1:
      "",
    subheading2:
      "We supply and service Volkswagen cars, wagons & SUVs.",
    subheading3:'',
    imageSrc: "/images/A_Volkswagon.png",
    imageAlt: "Volkswagen Auto Repair and Maintenance",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR VOLKSWAGEN REPAIRS WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "15-min Volkswagen Inspection & 2nd Opinion" },
      { highlight: "FREE", text: "Multi-Point Safety Check" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR VOLKSWAGEN REPAIRED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/7_Brakes-gen-nw.png",
    imageAlt: "Volkswagen Maintenance by Certified Technicians",
  },
  accentBar2Text: "Specialized Volkswagen Technicians",
  services: {
    title: "OUR VOLKSWAGEN SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Minor & Major Repairs",
        alt: "Volkswagen Minor & Major Repairs",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Log Book Servicing",
        alt: "Volkswagen Log Book Servicing",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "General Mechanics",
        alt: "Volkswagen General Mechanics",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR VOLKSWAGEN FIXED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Volkswagen Repairs",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Specialized European Vehicle Diagnostics",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Skilled Volkswagen Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Range Of VW Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine OEM Parts Or Equivalents",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Keep Intact Your Manufacturer Warranty",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 10. Hyundai Mechanic Page Data
// ----------------------------------------------------
export const HYUNDAI_PAGE_DATA: LandingPageData = {
  slug: "hyundai-mechanic-ontario-cda",
  metaTitle: "Hyundai Mechanic Brampton, Ontario | Cardora",
  metaDescription:
    "Brampton's trusted Hyundai auto repair shop. Minor & major repairs, log book servicing, and general mechanics by certified Hyundai specialists.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED HYUNDAI
        <br className="hidden sm:inline" /> REPAIR SHOP
      </>
    ),
    subheading1: "",
    subheading2: "We supply and service Hyundai cars, SUVs & hybrids.",
    subheading3:"",
    imageSrc: "/images/A_Hyundai.png",
    imageAlt: "Hyundai Auto Repair and Maintenance",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR HYUNDAI REPAIRS WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "15-min Hyundai Inspection & 2nd Opinion" },
      { highlight: "FREE", text: "Multi-Point Safety Check" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR HYUNDAI REPAIRED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/Hyundai-service.png",
    imageAlt: "Hyundai Maintenance by Certified Technicians",
  },
  accentBar2Text: "Specialized Hyundai Technicians",
  services: {
    title: "OUR HYUNDAI SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Minor & Major Repairs",
        alt: "Hyundai Minor & Major Repairs",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Log Book Servicing",
        alt: "Hyundai Log Book Servicing",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "General Mechanics",
        alt: "Hyundai General Mechanics",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR HYUNDAI FIXED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Hyundai Repairs",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Certified Brand Experience",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Skilled Hyundai Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Range Of Hyundai Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine Hyundai Parts Or Equivalents",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Keep Intact Your Manufacturer Warranty",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

// ----------------------------------------------------
// 11. Honda Mechanic Page Data
// ----------------------------------------------------
export const HONDA_PAGE_DATA: LandingPageData = {
  slug: "honda-mechanic-ontario-cda",
  metaTitle: "Honda Mechanic Brampton, Ontario | Cardora",
  metaDescription:
    "Brampton's trusted Honda auto repair shop. Minor & major repairs, log book servicing, and warranty-safe maintenance by certified Honda specialists.",
  hero: {
    headline: (
      <>
        BRAMPTON’S MOST TRUSTED HONDA
        <br className="hidden sm:inline" /> REPAIR SHOP
      </>
    ),
    subheading1: "",
    subheading2: "We supply and service Honda cars, SUVs, vans & hybrids.",
    subheading3:"",
    imageSrc: "/images/A_Honda.png",
    imageAlt: "Honda Auto Repair and Maintenance",
  },
  offers: {
    title: (
      <>
        SAVE ON YOUR HONDA REPAIRS WITH
        <br className="hidden sm:inline" /> OUR NEW CUSTOMER OFFER
      </>
    ),
    perks: [
      { highlight: "FREE", text: "Pick Up And Drop Off*" },
      { highlight: "10% OFF", text: "For New Customers*" },
      { highlight: "FREE", text: "Exterior Wash (Value $50)" },
      { highlight: "FREE", text: "15-min Honda Inspection & 2nd Opinion" },
      { highlight: "FREE", text: "Multi-Point Safety Check" },
    ],
    imageSrc: "/images/6_cda-Offers-v2-n-4-1-.png",
  },
  technicians: {
    title: (
      <>
        GET YOUR HONDA REPAIRED BY FULLY
        <br className="hidden sm:inline" /> QUALIFIED TECHNICIANS
      </>
    ),
    imageSrc: "/images/Honda-service.png",
    imageAlt: "Honda Maintenance by Certified Technicians",
  },
  accentBar2Text: "Specialized Honda Technicians",
  services: {
    title: "OUR HONDA SERVICES",
    items: [
      {
        img: "/images/8_Minor-Major-Repairs.png",
        title: "Minor & Major Repairs",
        alt: "Honda Minor & Major Repairs",
      },
      {
        img: "/images/9_Log-Book-Servicing.png",
        title: "Log Book Servicing",
        alt: "Honda Log Book Servicing",
      },
      {
        img: "/images/10_General-Mechanics.png",
        title: "General Mechanics",
        alt: "Honda General Mechanics",
      },
    ],
  },
  whyUs: {
    title: "WHY GET YOUR HONDA FIXED BY US?",
    features: [
      {
        img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
        title: "Expert Honda Repairs",
      },
      {
        img: "/images/12_15-Years-of-Experience.png",
        title: "Certified Brand Experience",
      },
      {
        img: "/images/13_Fully-Qualified-Technicians2.png",
        title: "Skilled Honda Technicians",
      },
      {
        img: "/images/14_Less-Expensive-Than-Dealerships3.png",
        title: "Comprehensive Range Of Honda Services",
      },
      {
        img: "/images/15_Genuine-Parts-Or-Equivalents.png",
        title: "Genuine Honda Parts Or Equivalents",
      },
      {
        img: "/images/16_Maintain-Your-Warranty2.png",
        title: "Keep Intact Your Manufacturer Warranty",
      },
      {
        img: "/images/17_Fast-Bookings-Service.png",
        title: "Quick Turnaround Time",
      },
      {
        img: "/images/18_Convenient-Location-Parking3.png",
        title: "Convenient Location & Parking",
      },
    ],
  },
};

export const ALL_LANDING_PAGES: Record<string, LandingPageData> = {
  "brakes-mechanic-ontario-cda": BRAKES_PAGE_DATA,
  "wheel-alignment-experts-ontario-cda": WHEEL_ALIGNMENT_PAGE_DATA,
  "auto-ac-mechanic-ontario-cda": AUTO_AC_PAGE_DATA,
  "oil-change-service-ontario-cda": OIL_CHANGE_PAGE_DATA,
  "tires-ontario-cda": TIRES_PAGE_DATA,
  "check-engine-light-repairs-ontario-cda": CHECK_ENGINE_LIGHT_PAGE_DATA,
  "dodge-mechanic-ontario-cda": DODGE_PAGE_DATA,
  "toyota-mechanic-ontario-cda": TOYOTA_PAGE_DATA,
  "volkswagen-mechanic-ontario-cda": VOLKSWAGEN_PAGE_DATA,
  "hyundai-mechanic-ontario-cda": HYUNDAI_PAGE_DATA,
  "honda-mechanic-ontario-cda": HONDA_PAGE_DATA,
};
