import type { Metadata } from "next";
import Link from "next/link";

import { FAQ } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/constants/faq";

export const metadata: Metadata = {
  title: "FAQ | LED Screen Sales, Rental & Installation Questions",
  description:
    "Frequently asked questions about Fetan LED screens in Ethiopia — sales, rental, installation, pixel pitch, pricing, maintenance, and custom display solutions.",
  keywords: [
    "LED screen FAQ Ethiopia",
    "LED display questions Addis Ababa",
    "LED screen cost Ethiopia",
    "LED pixel pitch guide",
    "LED screen rental FAQ",
    "Fetan LED FAQ",
  ],
};

export default function FaqPage() {
  return (
    <div className="bg-[#040e1a] pt-20 sm:pt-24">
      <FAQ
        items={FAQS}
        title="Frequently Asked Questions"
        description="Everything you need to know about LED screen sales, rental, and installation with Fetan LED."
      />

      <section className="border-t border-white/10 bg-[#040e1a] px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
            Still have questions?
          </h2>
          <p className="mt-3 text-white/60">
            Tell us about your project and our team will get back to you with a
            clear recommendation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
