"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close menu on touch/click outside
  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
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
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-8"
        aria-label="Main navigation"
      >
        <div>
          {/* Mobile / tablet: original size */}
          <span className="lg:hidden"><Logo size="md" /></span>
          {/* Desktop: bigger size */}
          <span className="hidden lg:inline-flex"><Logo size="lg" /></span>
        </div>

        {/* Desktop Links */}
        <ul className={cn("hidden items-center gap-5 lg:flex xl:gap-8", poppins.variable)}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-[family-name:var(--font-poppins)] text-xs font-semibold uppercase tracking-widest whitespace-nowrap text-white/75 transition-colors hover:text-white xl:text-sm"
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

        {/* Hamburger (Kept z-50 so it sits on top of everything) */}
        <button
          ref={hamburgerRef}
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

      {/* Mobile menu overlay */}
      <motion.div
        ref={menuRef}
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" as const },
          closed: { opacity: 0, pointerEvents: "none" as const },
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-lg lg:hidden"
      >
        {/* Mobile Menu Top Row: Restores the logo visually alongside the 'X' button */}
        <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
          <div onClick={() => setMobileOpen(false)}>
            <Logo size="md" />
          </div>
          {/* Invisible spacer matching the hamburger button size keeps the layout symmetrical */}
          <div className="w-10 h-10" />
        </div>

        {/* Mobile Links container: Centered inside the remaining screen area */}
        <div className={cn("flex flex-1 flex-col items-center justify-center gap-6 pb-16 px-6", poppins.variable)}>
          {NAV_LINKS.map((link, i) => (
            <MotionLink
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-xl font-bold uppercase tracking-wider text-white sm:text-2xl"
            >
              {link.label}
            </MotionLink>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
