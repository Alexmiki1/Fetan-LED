"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  PRODUCT_PRICES,
  formatEtbRange,
} from "@/lib/constants/prices";

export function ProductPrices() {
  return (
    <section
      id="price"
      className="relative mt-20 border-t border-white/10 pt-16 sm:mt-24 sm:pt-20"
      aria-labelledby="price-heading"
    >
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Transparent Pricing
          </p>
          <h3
            id="price-heading"
            className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl"
          >
            Price List
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Indicative price ranges in Ethiopian Birr (ETB). Final quotes depend
            on quantity, configuration, structure, and installation.
          </p>
        </div>
        <Button asChild variant="outline" className="shrink-0 self-start sm:self-auto">
          <Link href="/contact">Get Exact Quote</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_PRICES.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-brand-blue/40 hover:bg-white/[0.06] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                  {item.name}
                </h4>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                  {item.category} · {item.type}
                </p>
              </div>
              <span className="shrink-0 border border-brand-blue/30 bg-brand-blue/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
                From
              </span>
            </div>

            <p className="mt-5 font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
              {formatEtbRange(item.priceFrom, item.priceTo, item.unit)}
            </p>
          </motion.article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-white/40 sm:text-left">
        Prices are approximate starting ranges and may change based on market
        conditions and project requirements.
      </p>
    </section>
  );
}
