"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, MonitorPlay, ExternalLink } from "lucide-react";

const COMPANIES = [
  {
    icon: Lightbulb,
    name: "Fetan Advertising",
    tagline: "Creative Excellence",
    description:
      "Our sister company specializing in full-service advertising, brand strategy, and creative campaigns that leave a lasting impact across Ethiopia.",
    url: "https://fetanadvertising.com",
    urlLabel: "fetanadvertising.com",
    accent: "#1d74ff",
  },
  {
    icon: MonitorPlay,
    name: "Fetan DOOH",
    tagline: "Out-of-Home Advertising",
    description:
      "Ethiopia's premier digital out-of-home advertising network. We operate high-traffic outdoor LED screens and help brands reach millions across Addis Ababa.",
    url: "https://dooh.et",
    urlLabel: "dooh.et",
    accent: "#1d74ff",
  },
];

export function SisterCompanies() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative border-t border-white/10 py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #071a38 0%, #0e2d5e 50%, #071a38 100%)" }}
      aria-label="Sister companies"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(29,116,255,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            The Fetan Network
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            Explore Our Sister Companies.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
            Fetan LED is part of a larger ecosystem dedicated to transforming the
            advertising and technology landscape in Ethiopia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {COMPANIES.map((company, i) => {
            const Icon = company.icon;
            return (
              <motion.a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 32 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
                }
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_0_60px_rgba(29,116,255,0.12)] sm:p-10"
              >
                {/* Top accent line */}
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#1d74ff] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#1d74ff] transition-all duration-500 group-hover:border-[#1d74ff]/40 group-hover:bg-[#1d74ff]/10">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Name */}
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {company.name}
                </h3>

                {/* Tagline */}
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d74ff]">
                  {company.tagline}
                </p>

                {/* Description */}
                <p className="mt-5 flex-1 text-sm leading-relaxed text-white/60 sm:text-base">
                  {company.description}
                </p>

                {/* URL link */}
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-[#1d74ff]">
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{company.urlLabel}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
