import type { Metadata } from "next";
import ThankYouContent from "@/components/ThankYouContent";
import { getAllServiceSlugs, getServiceInfo } from "@/lib/services";

export function generateStaticParams() {
  return getAllServiceSlugs().map(({ slug }) => ({ service: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const serviceInfo = getServiceInfo(service);
  const name = serviceInfo ? serviceInfo.name : "Service";

  return {
    title: `Thank You - ${name} | Cardora`,
    description: `Thank you for your ${name} inquiry with Cardora in Brampton, ON. Our certified technicians will reach out shortly.`,
  };
}

export default async function ServiceThankYouSubPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const serviceInfo = getServiceInfo(service);

  return (
    <ThankYouContent
      serviceName={serviceInfo?.name}
      serviceSlug={serviceInfo?.slug || service}
    />
  );
}
