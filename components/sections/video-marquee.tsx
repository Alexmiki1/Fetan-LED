"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/marquee.mp4";
const REPEAT_COUNT = 4;

export function VideoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (videos.length === 0) return;

    const syncVideos = () => {
      const leader = videos[0];
      videos.forEach((video, i) => {
        if (i > 0 && Math.abs(video.currentTime - leader.currentTime) > 0.3) {
          video.currentTime = leader.currentTime;
        }
      });
    };

    Promise.all(videos.map((video) => video.play())).catch(() => {});
    videos[0].addEventListener("timeupdate", syncVideos);

    return () => {
      videos[0]?.removeEventListener("timeupdate", syncVideos);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-marquee-fade"
      aria-label="Showcase video"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black via-black/80 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black via-black/80 to-transparent sm:w-32" />

      <div ref={trackRef} className="flex w-max animate-marquee">
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <video
            key={i}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-28 w-auto shrink-0 object-cover sm:h-40 md:h-52 lg:h-60"
          />
        ))}
      </div>
    </section>
  );
}
