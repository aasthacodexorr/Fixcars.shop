"use client";

import React from "react";
import Hero from "@/components/Hero";
import AccentBar from "@/components/AccentBar";
import CustomerOffers from "@/components/CustomerOffers";
import TechniciansSection from "@/components/TechniciansSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { LandingPageData } from "@/lib/landingPages";
import { QuoteProvider, useQuote } from "@/components/home/QuoteContext";
import SiteNav from "@/components/home/SiteNav";
import { SiteFooter } from "@/components/home/Sections";

interface ServiceLandingPageProps {
  data: LandingPageData;
}

function ServiceLandingContent({ data }: ServiceLandingPageProps) {
  const handleOpenQuote = useQuote();

  return (
    <div className="font-site">
      {/* Homepage Top Navigation Header with Services dropdown */}
      <SiteNav />

      {/* Main Content with top padding for fixed header */}
      <main className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-[#1cc76a] selection:text-white pt-[var(--header-h)]">
        {/* Hero Section */}
        <Hero
          onOpenQuote={handleOpenQuote}
          headline={data.hero.headline}
          subheading1={data.hero.subheading1}
          subheading2={data.hero.subheading2}
          imageSrc={data.hero.imageSrc}
          imageAlt={data.hero.imageAlt}
        />

        {/* Blue Accent Bar 1 */}
        <AccentBar text="Providing Exceptional Service And Personalized Attention" />

        {/* New Customer Offer */}
        <CustomerOffers
          onOpenQuote={handleOpenQuote}
          title={data.offers.title}
          perks={data.offers.perks}
          imageSrc={data.offers.imageSrc}
        />

        {/* Qualified Technicians Section */}
        <TechniciansSection
          title={data.technicians.title}
          imageSrc={data.technicians.imageSrc}
          imageAlt={data.technicians.imageAlt}
        />

        {/* Peace of Mind Guarantee */}
        <GuaranteeSection onOpenQuote={handleOpenQuote} />

        {/* Blue Accent Bar 2 */}
        <AccentBar text={data.accentBar2Text} />

        {/* Services Section */}
        <ServicesSection
          onOpenQuote={handleOpenQuote}
          title={data.services.title}
          services={data.services.items}
        />

        {/* Blue Accent Bar 3 */}
        <AccentBar text="5 Star Rated Service" />

        {/* Why Choose Us 8 Features */}
        <WhyUsSection
          title={data.whyUs.title}
          features={data.whyUs.features}
        />

        {/* Blue Accent Bar 4 */}
        <AccentBar text="Trustworthy & Reliable Advice" />

        {/* Customer Reviews & Slider */}
        <TestimonialsSection onOpenQuote={handleOpenQuote} />
      </main>

      {/* Homepage Footer */}
      <SiteFooter />
    </div>
  );
}

export default function ServiceLandingPage({ data }: ServiceLandingPageProps) {
  return (
    <QuoteProvider>
      <ServiceLandingContent data={data} />
    </QuoteProvider>
  );
}
