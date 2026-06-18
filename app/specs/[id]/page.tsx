
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, BadgeCheck, Zap } from "lucide-react";

import { SPEC_PRODUCTS } from "@/lib/constants/specs";
import { COMPANY_EMAIL } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/ui/print-button";

interface PageProps {
  params: {
    id: string;
  };
}

const SPEC_DETAILS: Record<
  string,
  {
    applications: string[];
    features: string[];
    description: string;
  }
> = {
  p15: {
    description:
      "The Fetan LED P1.5 represents our highest resolution indoor display, optimized for critical close-range viewing. Engineered with high-density gold-wire SMDs, it provides a perfectly flat, wide-angle viewing canvas with zero visible pixelation from as close as 1.5 meters.",
    applications: [
      "Broadcast Studios & Control Rooms",
      "Executive Boardrooms & Conference Suites",
      "High-end Retail Showrooms",
      "Museums & Interactive Exhibits",
    ],
    features: [
      "Ultra-high refresh rate of 7680Hz eliminates camera flicker completely",
      "Common cathode technology cuts power usage and heat dissipation by 35%",
      "Front-serviceable magnetic modules allow maintenance in under 10 seconds",
      "16-bit grayscale depth retains full color detail even at low brightness settings",
    ],
  },

  p25: {
    description:
      "The Fetan LED P2.5 is the workhorse of our indoor permanent display lineup. Balancing pixel density with budget efficiency, it provides vibrant, rich colors and crisp text legibility for diverse public and corporate environments.",
    applications: [
      "Corporate Office Lobbies & Receptions",
      "Shopping Mall Atriums & Digital Signage",
      "Higher Education Lecture Halls",
      "Public Transportation Terminals",
    ],
    features: [
      "Rigid die-cast aluminum cabinets ensure flawless alignment and zero cabinet-gaps",
      "High-contrast black SMD LEDs deliver deep black levels and vivid contrast",
      "Fanless passive cooling design ensures silent operation in quiet spaces",
      "Dual backup power and data paths for uninterrupted commercial runtime",
    ],
  },

  p391: {
    description:
      "The Fetan LED P3.91 is our premier rental and outdoor permanent installation panel. With 5,500 nits of peak brightness and an IP65 weatherproof casing, this display performs flawlessly under direct noon sunlight and heavy rain alike.",
    applications: [
      "Outdoor Live Events & Concert Stages",
      "Sporting Arenas & Perimeter Signage",
      "Outdoor Commercial Advertisements",
      "Temporary Exhibitions & Product Launches",
    ],
    features: [
      "IP65-rated front and rear waterproofing prevents dust and moisture ingress",
      "High brightness of 5,500 nits is auto-regulated by ambient light sensors",
      "Touring-grade rental cabinet features quick-locking latches for fast setup",
      "Wind-permeable structure decreases wind loading forces on high structures",
    ],
  },
};

export default function SpecPage({ params }: PageProps) {
  const { id } = params;

  const product = SPEC_PRODUCTS.find((p) => p.id === id);
  const detail = SPEC_DETAILS[id];

  if (!product || !detail) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-black pt-24 pb-16 sm:pt-32 sm:pb-24 print:bg-white print:text-black print:pt-6 print:pb-6">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(29,116,255,0.08)_0%,transparent_65%)] print:hidden" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-6 print:hidden">
          <Link
            href="/#specs"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Specs
          </Link>

          <PrintButton />
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-b border-white/5 pb-8 sm:flex-row sm:items-end print:border-black print:pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue print:text-blue-700">
              Technical Datasheet
            </span>

            <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl print:text-black">
              {product.name} Display Panel
            </h1>

            <p className="mt-2 text-base text-white/60 print:text-gray-600">
              {product.tagline}
            </p>
          </div>

          <div className="text-left sm:text-right print:text-right">
            <span className="text-xs text-white/40 print:text-gray-400">
              Document ID:
            </span>

            <p className="font-mono text-sm font-semibold uppercase text-white print:text-black">
              FL-SPEC-{product.id.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <div className="space-y-8 md:col-span-7">
            <div>
              <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Overview
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {detail.description}
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Typical Applications
              </h2>

              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {detail.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-2 text-xs text-white/70"
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Key Product Features
              </h2>

              <ul className="mt-3 space-y-3">
                {detail.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-xs text-white/70"
                  >
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">
              Detailed Specifications
            </h2>

            <div className="mt-4 border border-white/10 bg-white/[0.01]">
              <dl className="divide-y divide-white/5">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between px-4 py-3 text-xs"
                  >
                    <dt className="uppercase tracking-wider text-white/40">
                      {spec.label}
                    </dt>

                    <dd className="font-semibold text-white">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 border border-white/5 bg-white/[0.02] p-4 text-center print:hidden">
              <ShieldAlert className="mx-auto h-5 w-5 text-brand-blue" />

              <h4 className="mt-2 text-xs font-semibold uppercase tracking-wider text-white">
                Warranty & Certification
              </h4>

              <p className="mt-1 text-[10px] leading-relaxed text-white/50">
                CE, FCC, RoHS certified. 5 years standard hardware warranty.
              </p>
            </div>

            <div className="mt-6 print:hidden">
              <Button className="w-full" asChild>
                <Link href={"/#contact?product=" + product.id}>
                  Request Pricing Info
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 hidden border-t border-gray-200 pt-4 text-center text-[10px] text-gray-400 print:block">
          <p>
            © {new Date().getFullYear()} Fetan LED Display Solutions.
            Specifications are subject to change without notice.
          </p>

          <p>
            For the latest updates or inquiries, email {COMPANY_EMAIL} or
            visit www.fetanled.com
          </p>
        </div>
      </div>
    </article>
  );
}
