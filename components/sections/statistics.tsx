"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { STATS_BAR } from "@/lib/constants/stats";

export function Statistics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Memoize animation variants to prevent recreating them
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    }),
    []
  );

  return (
    <section
      ref={ref}
      className="relative border-y border-white/10 bg-stats-bar"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12"
        >
          {STATS_BAR.map((stat) => (
            <motion.div
              key={stat.label}
              variants={variants}
              className="text-center lg:text-left"
            >
              <AnimatedCounter
                value={stat.value}
                className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
              />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
