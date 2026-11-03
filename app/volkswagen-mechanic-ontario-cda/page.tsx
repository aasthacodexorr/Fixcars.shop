import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { VOLKSWAGEN_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: VOLKSWAGEN_PAGE_DATA.metaTitle,
  description: VOLKSWAGEN_PAGE_DATA.metaDescription,
};

export default function VolkswagenPage() {
  return <ServiceLandingPage data={VOLKSWAGEN_PAGE_DATA} />;
}
