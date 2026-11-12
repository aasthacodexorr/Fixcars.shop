import type { Metadata } from "next";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Cardora",
  description:
    "Thank you for reaching out to Cardora. Our team will reach out to you shortly.",
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
