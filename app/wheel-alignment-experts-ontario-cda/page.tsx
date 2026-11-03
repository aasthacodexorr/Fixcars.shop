import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { WHEEL_ALIGNMENT_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: WHEEL_ALIGNMENT_PAGE_DATA.metaTitle,
  description: WHEEL_ALIGNMENT_PAGE_DATA.metaDescription,
};

export default function WheelAlignmentPage() {
  return <ServiceLandingPage data={WHEEL_ALIGNMENT_PAGE_DATA} />;
}
