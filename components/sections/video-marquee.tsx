"use client";

import { useEffect, useRef, useState } from "react";

export function VideoMarquee() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.load();
          videoRef.current?.play().catch(() => {});
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-y border-white/10"
      aria-label="Showcase video"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black via-black/80 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black via-black/80 to-transparent sm:w-32" />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload={isVisible ? "auto" : "none"}
        className="h-28 w-full object-cover sm:h-40 md:h-52 lg:h-60 bg-black"
      >
        <source src="/videos/marquee.webm" type="video/webm" />
      </video>
    </section>
  );
}
