"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { HERO_STATS } from "@/lib/constants/stats";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

function HeroPanel({
  title,
  description,
  ctaLabel,
  ctaHref,
  stat,
  side,
  index,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  stat: { value: string; label: string };
  side: "left" | "right";
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className={cn(
        "group relative flex min-h-[50vh] flex-col justify-end overflow-hidden p-6 sm:min-h-[60vh] sm:p-10 lg:min-h-[85vh] lg:p-12",
        side === "left" ? "bg-hero-panel-left" : "bg-hero-panel-right"
      )}
    >
      <div className="absolute inset-0 bg-hero-hover-glow opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 max-w-lg">
        <h1 className="font-display text-3xl font-bold uppercase leading-none tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-light text-white/90 sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-white/40">
              {stat.label}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="services"
      className="relative grid min-h-screen grid-cols-1 bg-black lg:grid-cols-2"
      aria-label="Hero"
    >
      <HeroPanel
        title="Sales & Installation"
        description="Permanent LED solutions engineered for retail, corporate, and outdoor environments. From design to deployment."
        ctaLabel="View Solutions"
        ctaHref="#projects"
        stat={HERO_STATS.sales}
        side="left"
        index={0}
      />
      <HeroPanel
        title="Event Rentals"
        description="Modular rental systems for concerts, conferences, and brand activations. Rapid deployment, stunning results."
        ctaLabel="Rental Catalog"
        ctaHref="#contact"
        stat={HERO_STATS.rentals}
        side="right"
        index={1}
      />
    </section>
  );
}
