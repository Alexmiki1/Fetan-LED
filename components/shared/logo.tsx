"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { height: 36, width: 120 },
  md: { height: 44, width: 148 },
  lg: { height: 56, width: 188 },
} as const;

export function Logo({ className, size = "md" }: LogoProps) {
  const { height, width } = SIZES[size];

  return (
    <a href="#" className={cn("group inline-flex shrink-0", className)}>
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
        <Image
          src="/logo.png"
          alt="FETAN LED"
          width={width}
          height={height}
          className="h-auto w-auto object-contain"
          style={{ height, width: "auto", maxWidth: width }}
          priority
        />
      </motion.div>
    </a>
  );
}
