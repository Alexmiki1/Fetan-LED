import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { VideoLoadingProvider } from "@/lib/contexts/video-loading";
import { COMPANY_NAME, COMPANY_TAGLINE, COMPANY_EMAIL } from "@/lib/constants/navigation";

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
  metadataBase: new URL("https://fetanled.com"),
  title: {
    default: `${COMPANY_NAME} | LED Screen Display Sales & Rental in Addis Ababa, Ethiopia`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Fetan LED is Ethiopia's leading LED screen display company in Addis Ababa, offering LED screen sales, rental, and installation for events, advertising, and permanent indoor/outdoor displays. Fast quotes, reliable service.",
  keywords: [
    "LED Display screen Ethiopia",
    "LED Display screen Addis Ababa",
    "LED Display screen sales Ethiopia",
    "LED Display screen sales Addis Ababa",
    "LED screen sales Addis Ababa",
    "LED display screen supplier Ethiopia",
    "LED video wall sales Addis Ababa",
    "LED screen Ethiopia",
    "LED display Addis Ababa",
    "LED screen rental Addis Ababa",
    "LED billboard Ethiopia",
    "outdoor LED screen Ethiopia",
    "indoor LED display Addis Ababa",
    "LED video wall Ethiopia",
    "LED screen for sale Ethiopia",
    "LED screen installation Addis Ababa",
    "LED advertising screen Ethiopia",
    "LED screen rental for events Addis Ababa",
    "LED stage screen rental Ethiopia",
    "LED billboard advertising Addis Ababa",
    "LED screen company Ethiopia",
    "LED display installation services Ethiopia",
    "buy LED screen Addis Ababa",
    "LED panel supplier Ethiopia",
    "LED screen for concerts Ethiopia",
    "digital signage Addis Ababa",
    "LED screen maintenance Ethiopia",
    "P2.5 LED screen Ethiopia",
    "P4 outdoor LED display",
    "pixel pitch LED screen Addis Ababa",
    "transparent LED screen Ethiopia",
    "curved LED display Ethiopia",
    "best LED screen company Ethiopia",
    "LED screen price Ethiopia",
    "LED display cost Addis Ababa",
  ],
  authors: [{ name: COMPANY_NAME }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | LED Screen Display Sales & Rental in Addis Ababa, Ethiopia`,
    description:
      "LED screen sales, rental, and installation in Addis Ababa, Ethiopia. Indoor, outdoor, and event display solutions with fast turnaround.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | LED Screen Display Sales & Rental in Addis Ababa, Ethiopia`,
    description:
      "LED screen sales, rental, and installation in Addis Ababa, Ethiopia. Indoor, outdoor, and event display solutions with fast turnaround.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "ET-AA",
    "geo.placename": "Addis Ababa, Ethiopia",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  image: "https://fetanled.com/logo.png",
  description:
    "Fetan LED provides LED screen display sales, rental, and installation services in Addis Ababa, Ethiopia, including indoor, outdoor, and event display solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Haile Gebre Silase St",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  telephone: "+251913001010",
  email: COMPANY_EMAIL,
  url: "https://fetanled.com",
  areaServed: {
    "@type": "City",
    name: "Addis Ababa",
  },
  sameAs: [
    "https://linkedin.com/company/fetanled",
    "https://fb.me/FetanLED",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full bg-black font-sans text-white">
        <VideoLoadingProvider>
          <LoadingScreen />
          <Navbar />
          <main>{children}</main>
          {/* Footer sits on solid #1d74ff — connects seamlessly with page gradient */}
          <Footer />
        </VideoLoadingProvider>
      </body>
    </html>
  );
}
