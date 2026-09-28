"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FAQS, type FaqItem } from "@/lib/constants/faq";
import { cn } from "@/lib/utils";

interface FAQProps {
  items?: FaqItem[];
  showViewAll?: boolean;
  title?: string;
  description?: string;
}

export function FAQ({
  items = FAQS,
  showViewAll = false,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our LED display solutions",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20" style={{ backgroundColor: "#1d74ff" }}>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center font-display text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        <p className="mb-12 text-center text-lg text-white/60">{description}</p>

        <div className="space-y-4">
          {items.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-white transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-5 leading-relaxed text-white/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-10 flex justify-center">
            <Button asChild variant="default" size="lg">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
