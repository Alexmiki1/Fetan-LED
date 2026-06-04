"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface VideoLoadingContextType {
  heroVideoReady: boolean;
  setHeroVideoReady: (ready: boolean) => void;
}

const VideoLoadingContext = createContext<VideoLoadingContextType | undefined>(
  undefined
);

export function VideoLoadingProvider({ children }: { children: ReactNode }) {
  const [heroVideoReady, setHeroVideoReady] = useState(false);

  return (
    <VideoLoadingContext.Provider value={{ heroVideoReady, setHeroVideoReady }}>
      {children}
    </VideoLoadingContext.Provider>
  );
}

export function useVideoLoading() {
  const context = useContext(VideoLoadingContext);
  if (!context) {
    throw new Error("useVideoLoading must be used within VideoLoadingProvider");
  }
  return context;
}
