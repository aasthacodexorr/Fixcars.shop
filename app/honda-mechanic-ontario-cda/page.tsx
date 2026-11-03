import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { HONDA_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: HONDA_PAGE_DATA.metaTitle,
  description: HONDA_PAGE_DATA.metaDescription,
};

export default function HondaPage() {
  return <ServiceLandingPage data={HONDA_PAGE_DATA} />;
}
