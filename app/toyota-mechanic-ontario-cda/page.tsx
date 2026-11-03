import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { TOYOTA_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: TOYOTA_PAGE_DATA.metaTitle,
  description: TOYOTA_PAGE_DATA.metaDescription,
};

export default function ToyotaPage() {
  return <ServiceLandingPage data={TOYOTA_PAGE_DATA} />;
}
