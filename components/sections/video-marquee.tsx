"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/marquee.mp4";

export function VideoMarquee() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      className="relative overflow-hidden border-y border-white/10"
      aria-label="Showcase video"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black via-black/80 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black via-black/80 to-transparent sm:w-32" />

      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-28 w-full object-cover sm:h-40 md:h-52 lg:h-60"
      />
    </section>
  );
}