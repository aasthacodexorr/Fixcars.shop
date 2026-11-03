import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { OIL_CHANGE_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: OIL_CHANGE_PAGE_DATA.metaTitle,
  description: OIL_CHANGE_PAGE_DATA.metaDescription,
};

export default function OilChangePage() {
  return <ServiceLandingPage data={OIL_CHANGE_PAGE_DATA} />;
}
