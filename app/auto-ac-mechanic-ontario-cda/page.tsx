import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { AUTO_AC_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: AUTO_AC_PAGE_DATA.metaTitle,
  description: AUTO_AC_PAGE_DATA.metaDescription,
};

export default function AutoAcPage() {
  return <ServiceLandingPage data={AUTO_AC_PAGE_DATA} />;
}
