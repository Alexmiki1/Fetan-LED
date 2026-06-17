"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useVideoLoading } from "@/lib/contexts/video-loading";
import { HERO_STATS } from "@/lib/constants/stats";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

const VIDEO_ID = "ccWERmdQ6ro";

export function Hero() {
  const { setHeroVideoReady } = useVideoLoading();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let player: any;

    const initPlayer = () => {
      const YT = (window as any).YT;
      if (!YT || !YT.Player) return;

      player = new YT.Player("hero-youtube-player", {
        events: {
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING === 1
            if (event.data === 1) {
              setIsPlaying(true);
              setHeroVideoReady(true);
            }
          },
        },
      });
    };

    // Initialize player if YT API is already loaded
    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      // Or set/wrap the global callback
      const previousCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        initPlayer();
      };
    }

    return () => {
      if (player && typeof player.destroy === "function") {
        player.destroy();
      }
    };
  }, [setHeroVideoReady]);

  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* YouTube Background — controls=0 hides UI, autoplay=1&mute=1 starts it silently */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          id="hero-youtube-player"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&cc_load_policy=0&color=white&widget_referrer=0&enablejsapi=1&autohide=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.3)",
            width: "100vw",
            height: "56.25vw", // 16:9 ratio
            minHeight: "100vh",
            minWidth: "177.77vh", // 16:9 ratio
            border: "none",
            pointerEvents: "none",
            opacity: isPlaying ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>

      {/* Overlay to cover any remaining YouTube UI chrome at edges */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-[1]" />
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/40 to-transparent z-[1]" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/40 to-transparent z-[1]" />

      {/* Blue gradient overlay */}
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(165deg,rgba(29,116,255,0.55)_0%,rgba(21,89,204,0.45)_20%,rgba(14,61,140,0.55)_40%,rgba(10,45,102,0.65)_60%,rgba(4,14,26,0.80)_80%,rgba(0,0,0,0.92)_100%)]" />

      {/* Bottom fade to black */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-[3] bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2" style={{ zIndex: 4 }}>
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
              LED Screen Display Sales & Installation
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
              Permanent LED solutions engineered for retail, corporate, and outdoor environments. From design to deployment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild>
                <a href="#products">View Solutions</a>
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
              LED Screen Display Event Rentals
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
