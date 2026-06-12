"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useVideoLoading } from "@/lib/contexts/video-loading";

export function LoadingScreen() {
  const { heroVideoReady } = useVideoLoading();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // Only show the loader if things take longer than 400ms — avoids flash on fast loads
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Only render the loading UI if the page is still loading after 400ms
    const showTimer = window.setTimeout(() => setShowUI(true), 400);
    // Hard cap at 2s regardless
    const fallbackTimer = window.setTimeout(() => setIsVisible(false), 2000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  // Dismiss as soon as hero signals ready
  useEffect(() => {
    if (heroVideoReady) setIsVisible(false);
  }, [heroVideoReady]);

  if (!isMounted || !isVisible || !showUI) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <div className="flex flex-col items-center gap-8 px-6 text-center">
          {/* Logo / Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-5xl font-bold uppercase tracking-wider text-white sm:text-6xl">
              FETAN LED
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/50">
              Loading...
            </p>
          </motion.div>

          {/* Progress bar — simple, no fake 2s animation */}
          <motion.div
            className="w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
