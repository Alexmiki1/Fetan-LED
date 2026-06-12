"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const MotionLink = motion.create(Link);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo — bigger on large screens */}
        <Logo size="md" />

        {/* Nav links — Poppins, bigger on large screens */}
        <ul className={cn("hidden items-center gap-10 lg:flex", poppins.variable)}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-[family-name:var(--font-poppins)] text-sm font-600 uppercase tracking-[0.15em] text-white/75 transition-colors hover:text-white xl:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={cn("h-0.5 w-6 bg-white transition-all duration-300", mobileOpen && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 bg-white transition-all duration-300", mobileOpen && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-white transition-all duration-300", mobileOpen && "-translate-y-2 -rotate-45")} />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" as const },
          closed: { opacity: 0, pointerEvents: "none" as const },
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg lg:hidden"
      >
        <div className={cn("flex h-full flex-col items-center justify-center gap-8", poppins.variable)}>
          {NAV_LINKS.map((link, i) => (
            <MotionLink
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-2xl font-bold uppercase tracking-wider text-white"
            >
              {link.label}
            </MotionLink>
          ))}
          <Button asChild className="mt-4">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Request a Quote
            </Link>
          </Button>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;