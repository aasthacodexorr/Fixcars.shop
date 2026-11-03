import type { Metadata } from "next";

// The page below is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Brake Repairs Brampton, Ontario",
  description:
    "The one-stop shop for all your brake repairs & replacements in Brampton, ON. We supply and service brakes for cars, vans & 4x4s.",
};

export default function BrakesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
