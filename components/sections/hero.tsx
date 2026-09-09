"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { useVideoLoading } from "@/lib/contexts/video-loading";

const BANNERS = [
  "/banner1.webp",
  "/banner2.webp",
  "/banner3.webp",
  "/banner4.webp",
  "/banner5.webp",
  "/banner6.webp",
] as const;

const BANNER_DURATION_MS = 10000;
const BANNER_DURATION_SEC = BANNER_DURATION_MS / 1000;
const VIDEO_DURATION_MS = 15000;
const VIDEO_ID = "2Zvx9EWN2T4";
const TOTAL_SLIDES = BANNERS.length + 1; // 6 banners + 1 video
const VIDEO_SLIDE_INDEX = BANNERS.length;

const slideVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export function Hero() {
  const { setHeroVideoReady } = useVideoLoading();
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  const isVideoSlide = slideIndex === VIDEO_SLIDE_INDEX;

  const goNext = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  useEffect(() => {
    const duration = isVideoSlide ? VIDEO_DURATION_MS : BANNER_DURATION_MS;
    const timer = setTimeout(goNext, duration);
    return () => clearTimeout(timer);
  }, [slideIndex, isVideoSlide, goNext]);

  useEffect(() => {
    setHeroVideoReady(true);
  }, [setHeroVideoReady]);

  useEffect(() => {
    let player: { destroy?: () => void } | null = null;
    let cancelled = false;

    function initPlayer() {
      if (cancelled) return;
      const YT = (
        window as Window & {
          YT?: { Player: new (...args: unknown[]) => unknown };
        }
      ).YT;
      if (!YT?.Player) return;

      player = new YT.Player("hero-youtube-player", {
        events: {
          onReady: () => {
            setVideoReady(true);
          },
          onStateChange: (event: { data: number }) => {
            if (event.data === 1) setVideoReady(true);
          },
        },
      }) as { destroy?: () => void };
    }

    if (!(window as Window & { YT?: unknown }).YT) {
      const existingScript = document.getElementById("youtube-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }

      const previousCallback = (
        window as Window & { onYouTubeIframeAPIReady?: () => void }
      ).onYouTubeIframeAPIReady;

      (
        window as Window & { onYouTubeIframeAPIReady?: () => void }
      ).onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    const fallback = setTimeout(() => setVideoReady(true), 4000);

    return () => {
      cancelled = true;
      clearTimeout(fallback);
      player?.destroy?.();
    };
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#040e1a" }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 overflow-hidden bg-[#040e1a]">
        <AnimatePresence initial={false} mode="popLayout">
          {!isVideoSlide ? (
            <motion.div
              key={`banner-${slideIndex}`}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.05 }}
                animate={{ scale: 0.9 }}
                transition={{
                  duration: BANNER_DURATION_SEC,
                  ease: "linear",
                }}
              >
                <Image
                  src={BANNERS[slideIndex]}
                  alt={`FETAN LED banner ${slideIndex + 1}`}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="hero-video"
              className="absolute inset-0"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
            >
              <iframe
                id="hero-youtube-player"
                suppressHydrationWarning
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&cc_load_policy=0&color=white&widget_referrer=0&enablejsapi=1&autohide=1`}
                allow="autoplay; encrypted-media; picture-in-picture"
                className="pointer-events-none absolute left-1/2 top-1/2 min-h-full min-w-full border-0"
                style={{
                  width: "100vw",
                  height: "56.25vw",
                  minHeight: "100vh",
                  minWidth: "177.77vh",
                  transform: "translate(-50%, -50%) scale(1.3)",
                  opacity: videoReady ? 1 : 0,
                  transition: "opacity 0.8s ease-in-out",
                }}
                tabIndex={-1}
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-16 bg-gradient-to-b from-[#040e1a]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-20 bg-gradient-to-t from-[#040e1a]/50 to-transparent" />

      <div
        className="absolute bottom-6 left-1/2 z-[5] flex -translate-x-1/2 gap-2"
        aria-hidden="true"
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSlideIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === slideIndex
                ? "w-8 bg-white"
                : "w-1.5 bg-white/35 hover:bg-white/60"
            }`}
            aria-label={
              i < BANNERS.length ? `Go to banner ${i + 1}` : "Go to video"
            }
          />
        ))}
      </div>
    </section>
  );
}
