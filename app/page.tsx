"use client"

import { QuoteProvider, useQuote } from "@/components/home/QuoteContext";
import {
  Contact,
  Guarantee,
  Makes,
  Offer,
  Reviews,
  ServicePills,
  Services,
  SiteFooter,
  WheelJourney,
  WhyUs,
} from "@/components/home/Sections";
import SiteNav from "@/components/home/SiteNav";
import TestimonialsSection from "@/components/TestimonialsSection";

function HomeContent() {
  const handleOpenQuote = useQuote();
  return (
    <>
      <SiteNav />
      <main className="overflow-x-clip pt-[var(--header-h)]">
        <WheelJourney />
        <ServicePills />
        <Services />
        <Makes />
        <Offer />
        <WhyUs />
        <TestimonialsSection onOpenQuote={handleOpenQuote}/>
        <Guarantee />
      </main>
      <SiteFooter />
    </>
  );
}

export default function Home() {
  return (
    <div className="font-site">
      <QuoteProvider>
        <HomeContent />
      </QuoteProvider>
    </div>
  );
}
