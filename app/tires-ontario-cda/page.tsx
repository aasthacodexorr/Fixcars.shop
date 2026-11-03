import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { TIRES_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: TIRES_PAGE_DATA.metaTitle,
  description: TIRES_PAGE_DATA.metaDescription,
};

export default function TiresPage() {
  return <ServiceLandingPage data={TIRES_PAGE_DATA} />;
}
