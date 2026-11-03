import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { HYUNDAI_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: HYUNDAI_PAGE_DATA.metaTitle,
  description: HYUNDAI_PAGE_DATA.metaDescription,
};

export default function HyundaiPage() {
  return <ServiceLandingPage data={HYUNDAI_PAGE_DATA} />;
}
