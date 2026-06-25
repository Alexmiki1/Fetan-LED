"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { height: 26, width: 130 },
  md: { height: 32, width: 160 },
  lg: { height: 44, width: 220 },
} as const;

export function Logo({ className, size = "md" }: LogoProps) {
  const { height, width } = SIZES[size];
  
  // Align "L" with "F" (approx 25% from left)
  const iconOffset = Math.round(width * 0.25);
  // Align "S" with "D" (approx 5% from right, avoiding the ® symbol)
  const trademarkOffset = Math.round(width * 0.05);
  const textWidth  = width - iconOffset - trademarkOffset;

  const tagline = "LED DISPLAY SOLUTIONS";

  return (
    <Link href="/" className={cn("group inline-flex shrink-0 flex-col items-start", className)}>
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="flex flex-col">
        <Image
          src="/logo-v2.png"
          alt="FETAN LED"
          width={width}
          height={height}
          className="h-auto w-auto object-contain"
          style={{ height, width: "auto", maxWidth: width }}
          priority
        />
        <div
          className="flex justify-between font-semibold uppercase text-white"
          style={{
            marginLeft: iconOffset,
            width: textWidth,
            marginTop: size === "sm" ? "-3px" : size === "md" ? "-5px" : "-8px",
            fontSize: size === "sm" ? "8px" : size === "md" ? "9.5px" : "13px",
          }}
        >
          {tagline.split("").map((char, i) => (
            <span key={i} className={char === " " ? "w-[0.5ch]" : ""}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
