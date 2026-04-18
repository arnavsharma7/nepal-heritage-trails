import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nepal Heritage Trails — Discover Authentic Nepal",
  description:
    "An immersive tourism marketplace connecting travelers with verified local guides, community homestays, artisan workshops, and heritage experiences across Nepal.",
  keywords: [
    "Nepal tourism",
    "cultural travel",
    "heritage trails",
    "Nepal homestay",
    "artisan workshops",
    "trekking Nepal",
    "sustainable tourism",
  ],
  openGraph: {
    title: "Nepal Heritage Trails — Discover Authentic Nepal",
    description:
      "Travel beyond the map. Connect with local guides, homestays, and artisan workshops for authentic cultural experiences in Nepal.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
