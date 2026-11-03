import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { CHECK_ENGINE_LIGHT_PAGE_DATA } from "@/lib/landingPages";

export const metadata: Metadata = {
  title: CHECK_ENGINE_LIGHT_PAGE_DATA.metaTitle,
  description: CHECK_ENGINE_LIGHT_PAGE_DATA.metaDescription,
};

export default function CheckEngineLightPage() {
  return <ServiceLandingPage data={CHECK_ENGINE_LIGHT_PAGE_DATA} />;
}
