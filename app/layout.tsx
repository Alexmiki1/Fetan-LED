import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/constants/navigation";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Premium LED display solutions for permanent installations and event rentals. Sales, installation, maintenance, and custom design services with industry-leading pixel pitch and rapid response.",
  keywords: [
    "LED display",
    "LED wall",
    "event rentals",
    "digital signage",
    "pixel pitch",
    "LED installation",
    "corporate display",
    "outdoor LED",
  ],
  authors: [{ name: COMPANY_NAME }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    description:
      "Premium LED display solutions for permanent installations and event rentals.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    description:
      "Premium LED display solutions for permanent installations and event rentals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black font-sans text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
