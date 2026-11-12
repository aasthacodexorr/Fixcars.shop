import type { Metadata } from "next";
import ThankYouContent from "@/components/ThankYouContent";
import { getAllServiceSlugs, getServiceInfo } from "@/lib/services";

export function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceInfo(slug);
  const name = service ? service.name : "Service";

  return {
    title: `Thank You - ${name} | Cardora`,
    description: `Thank you for your ${name} inquiry with Cardora in Brampton, ON. Our certified technicians will reach out shortly.`,
  };
}

export default async function ServiceThankYouPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceInfo(slug);

  return (
    <ThankYouContent
      serviceName={service?.name}
      serviceSlug={service?.slug || slug}
    />
  );
}
