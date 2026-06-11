"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants/navigation";

const FOOTER_LINKS = {
  services: [
    { label: "Installation", href: "/services" },
    { label: "Maintenance", href: "/services" },
    { label: "Custom Design", href: "/services" },
    { label: "Event Rentals", href: "/services" },
  ],
  resources: [
    { label: "LED Products", href: "/#products" },
    { label: "Case Studies", href: "/#projects" },
    { label: "Support", href: "/contact" },
    { label: "FAQ", href: "/contact" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Share2, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Globe, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: `mailto:${COMPANY_EMAIL}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#0e397e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <Image
                src="/logo-footer.png"
                alt={COMPANY_NAME}
                width={150}
                height={110}
                className="h-auto w-auto object-contain mix-blend-screen"
                style={{ height: 85, width: "auto" }}
                priority
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              {COMPANY_NAME} delivers premium LED display solutions for
              permanent installations and event rentals. Engineering excellence
              meets visual impact.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="text-sm text-white/80">
                Fetan LED Advertising
                <br />
                Addis Ababa, Ethiopia
              </p>
              <a
                href="tel:+251913001010"
                className="block text-sm text-white/75 transition-colors hover:text-white"
              >
                +251 913 001 010
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="block text-sm text-white/75 transition-colors hover:text-white"
              >
                {COMPANY_EMAIL}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-xs text-white/70">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                className="text-white/70 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
