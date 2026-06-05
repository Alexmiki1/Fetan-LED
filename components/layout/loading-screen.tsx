"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useVideoLoading } from "@/lib/contexts/video-loading";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const loadingDotVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [fallbackReady, setFallbackReady] = useState(false);
  const { heroVideoReady } = useVideoLoading();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFallbackReady(true);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted || !(heroVideoReady || fallbackReady)) return;

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [isMounted, heroVideoReady, fallbackReady]);

  // Don't render on server
  if (!isMounted || !isVisible) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 text-center"
        variants={containerVariants}
      >
        {/* Welcome Text */}
        <motion.div variants={textVariants}>
          <h1 className="font-display text-5xl font-bold uppercase tracking-wider text-white sm:text-6xl">
            Welcome
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">
            to fetanled
          </p>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          variants={textVariants}
          className="flex items-center gap-2"
        >
          <span className="text-sm uppercase tracking-wider text-white/70">
            Loading
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                variants={loadingDotVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="h-2 w-2 rounded-full bg-blue-500"
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          variants={textVariants}
          className="w-48 overflow-hidden rounded-full bg-white/10"
        >
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
