"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { HERO_STATS } from "@/lib/constants/stats";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Blue gradient overlay — same colors as before */}
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(29,116,255,0.55)_0%,rgba(21,89,204,0.45)_20%,rgba(14,61,140,0.55)_40%,rgba(10,45,102,0.65)_60%,rgba(4,14,26,0.80)_80%,rgba(0,0,0,0.92)_100%)]" />

      {/* Bottom fade to black */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content — two panels side by side */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Panel */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col justify-end p-6 sm:p-10 lg:p-12"
        >
          <div className="max-w-lg">
            <h1 className="font-display text-3xl font-bold uppercase leading-none tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Sales & Installation
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
              Permanent LED solutions engineered for retail, corporate, and outdoor environments. From design to deployment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild>
                <a href="#projects">View Solutions</a>
              </Button>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-light text-white/90 sm:text-4xl">
                  {HERO_STATS.sales.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  {HERO_STATS.sales.label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="hidden lg:block absolute left-1/2 top-1/4 h-1/2 w-px bg-white/10" />

        {/* Right Panel */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col justify-end p-6 sm:p-10 lg:p-12"
        >
          <div className="max-w-lg">
            <h1 className="font-display text-3xl font-bold uppercase leading-none tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Event Rentals
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
              Modular rental systems for concerts, conferences, and brand activations. Rapid deployment, stunning results.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild>
                <a href="#contact">Rental Catalog</a>
              </Button>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-light text-white/90 sm:text-4xl">
                  {HERO_STATS.rentals.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  {HERO_STATS.rentals.label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
