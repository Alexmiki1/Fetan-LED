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
  sm: { height: 36, width: 120 },
  md: { height: 44, width: 148 },
  lg: { height: 65, width: 220 },
} as const;

export function Logo({ className, size = "md" }: LogoProps) {
  const { height, width } = SIZES[size];

  return (
    <Link href="/" className={cn("group inline-flex shrink-0 flex-col items-start", className)}>
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
        <Image
          src="/logo-v2.png"
          alt="FETAN LED"
          width={width}
          height={height}
          className="h-auto w-auto object-contain"
          style={{ height, width: "auto", maxWidth: width }}
          priority
        />
        <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-white mt-0.5 pl-0.5">
          LED Display Solutions
        </span>
      </motion.div>
    </Link>
  );
}

