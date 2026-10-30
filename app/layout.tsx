import type { Metadata } from "next";
import { Anton, Lato, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Brake Repairs Brampton, Ontario",
  description:
    "The one-stop shop for all your brake repairs & replacements in Brampton, ON. We supply and service brakes for cars, vans & 4x4s.",
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
      className={`${anton.variable} ${lato.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-black antialiased font-lato">
        {children}
      </body>
    </html>
  );
}
