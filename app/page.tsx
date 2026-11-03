import { QuoteProvider } from "@/components/home/QuoteContext";
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

export default function Home() {
  return (
    <div className="font-site">
      <QuoteProvider>
        <SiteNav />
        <main className="overflow-x-clip pt-[var(--header-h)]">
          <WheelJourney />
          <ServicePills />
          <Services />
          <Makes />
          <Offer />
          <WhyUs />
          <Reviews />
          <Guarantee />
          <Contact />
        </main>
        <SiteFooter />
      </QuoteProvider>
    </div>
  );
}
