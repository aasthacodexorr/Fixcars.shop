import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { DODGE_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: DODGE_PAGE_DATA.metaTitle,
  description: DODGE_PAGE_DATA.metaDescription,
};

export default function DodgePage() {
  return <ServiceLandingPage data={DODGE_PAGE_DATA} />;
}
