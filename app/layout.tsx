import type { Metadata } from "next";
import { Anton, Lato, Poppins } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./ScrollToTop";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cardora | Auto Repair Shop in Brampton, Ontario",
  description:
    "Brakes, tires, wheel alignment, oil changes, auto AC and check engine light repairs at 8050 Dixie Rd, Brampton. Get a free quote plus 10% off for new customers.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${lato.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen bg-white text-black antialiased font-lato">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
