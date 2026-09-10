"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useVideoLoading } from "@/lib/contexts/video-loading";
import { cn } from "@/lib/utils";

const BANNERS = [
  "/banner1.webp",
  "/banner2.webp",
  "/banner3.webp",
  "/banner4.webp",
  "/banner5.webp",
  "/banner6.webp",
] as const;

const BANNER_DURATION_MS = 10000;
const VIDEO_DURATION_MS = 15000;
const SLIDE_SPEED_SEC = 1.5;
const VIDEO_ID = "2Zvx9EWN2T4";
const TOTAL_SLIDES = BANNERS.length + 1;
const VIDEO_SLIDE_INDEX = BANNERS.length;

export function Hero() {
  const { setHeroVideoReady } = useVideoLoading();
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [videoReady, setVideoReady] = useState(false);
  const [skipEnter, setSkipEnter] = useState(true);

  const isVideoSlide = slideIndex === VIDEO_SLIDE_INDEX;

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
      setDirection(next > slideIndex || (slideIndex === TOTAL_SLIDES - 1 && next === 0) ? 1 : -1);
      setSkipEnter(false);
      setSlideIndex(next);
    },
    [slideIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setSkipEnter(false);
    setSlideIndex((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setSkipEnter(false);
    setSlideIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  }, []);

  // Auto-advance — never pause on hover (that was freezing the slider)
  useEffect(() => {
    const duration = isVideoSlide ? VIDEO_DURATION_MS : BANNER_DURATION_MS;
    const timer = window.setTimeout(goNext, duration);
    return () => window.clearTimeout(timer);
  }, [slideIndex, isVideoSlide, goNext]);

  useEffect(() => {
    setHeroVideoReady(true);
  }, [setHeroVideoReady]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

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
          onReady: () => setVideoReady(true),
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

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: { x: 0 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <section
      id="services"
      className="relative min-h-[100svh] overflow-hidden bg-[#040e1a]"
      aria-label="Hero"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes hero-zoom-out {
              from { transform: scale(1); }
              to { transform: scale(0.9); }
            }
            .hero-zoom-out {
              animation: hero-zoom-out ${BANNER_DURATION_MS}ms linear forwards;
              will-change: transform;
            }
          `,
        }}
      />

      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={isVideoSlide ? "hero-video" : `banner-${slideIndex}`}
            className="absolute inset-0"
            custom={direction}
            variants={variants}
            initial={skipEnter ? false : "enter"}
            animate="center"
            exit="exit"
            transition={{
              duration: SLIDE_SPEED_SEC,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80 || info.velocity.x < -400) goNext();
              else if (info.offset.x > 80 || info.velocity.x > 400) goPrev();
            }}
          >
            {!isVideoSlide ? (
              <div className="hero-zoom-out absolute inset-0 flex items-center justify-center origin-center">
                <Image
                  src={BANNERS[slideIndex]}
                  alt={`FETAN LED banner ${slideIndex + 1}`}
                  fill
                  priority={slideIndex <= 1}
                  sizes="100vw"
                  className="pointer-events-none select-none object-contain object-center"
                  draggable={false}
                />
              </div>
            ) : (
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
                  transform: "translate(-50%, -50%) scale(1.15)",
                  opacity: videoReady ? 1 : 0,
                  transition: "opacity 0.8s ease-in-out",
                }}
                tabIndex={-1}
                aria-hidden="true"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-14 bg-gradient-to-b from-[#040e1a]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-14 bg-gradient-to-t from-[#040e1a]/50 to-transparent" />

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-[6] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45 sm:left-6 sm:flex md:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-[6] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45 sm:right-6 sm:flex md:right-[7%]"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        className="absolute right-4 top-1/2 z-[6] flex -translate-y-1/2 flex-col items-center gap-3 sm:right-6 md:right-[5%]"
        role="tablist"
        aria-label="Hero slides"
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => {
          const active = i === slideIndex;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={i < BANNERS.length ? `Banner ${i + 1}` : "Video"}
              onClick={() => goTo(i)}
              className="group relative flex h-4 w-4 items-center justify-center"
            >
              <span
                className={cn(
                  "rounded-full bg-white transition-all duration-500",
                  active
                    ? "h-3 w-3 opacity-100"
                    : "h-1.5 w-1.5 opacity-70 group-hover:opacity-100"
                )}
              />
              {active && (
                <span className="absolute inset-0 rounded-full border-2 border-white" />
              )}
            </button>
          );
        })}
      </div>

      <div
        className="absolute bottom-5 left-1/2 z-[6] flex -translate-x-1/2 gap-2 sm:hidden"
        aria-hidden="true"
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === slideIndex ? "w-7 bg-white" : "w-1.5 bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}
