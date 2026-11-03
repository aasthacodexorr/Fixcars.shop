import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { BRAKES_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: BRAKES_PAGE_DATA.metaTitle,
  description: BRAKES_PAGE_DATA.metaDescription,
};

export default function BrakesPage() {
  return <ServiceLandingPage data={BRAKES_PAGE_DATA} />;
}
