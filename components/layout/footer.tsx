"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Share2 } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants/navigation";

const FOOTER_LINKS = {
  services: [
    { label: "Installation", href: "#services" },
    { label: "Maintenance", href: "#services" },
    { label: "Custom Design", href: "#services" },
    { label: "Event Rentals", href: "#services" },
  ],
  resources: [
    { label: "Case Studies", href: "#projects" },
    { label: "Spec Sheets", href: "#specs" },
    { label: "Support", href: "#contact" },
    { label: "FAQ", href: "#contact" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Share2, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Globe, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: `mailto:${COMPANY_EMAIL}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="lg" />
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              {COMPANY_NAME} delivers premium LED display solutions for
              permanent installations and event rentals. Engineering excellence
              meets visual impact.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="text-sm text-white/50">
                1200 Innovation Drive
                <br />
                Los Angeles, CA 90015
              </p>
              <a
                href="tel:+18005551234"
                className="block text-sm text-white/50 transition-colors hover:text-brand-blue"
              >
                +1 (800) 555-1234
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="block text-sm text-white/50 transition-colors hover:text-brand-blue"
              >
                {COMPANY_EMAIL}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
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
                whileHover={{ scale: 1.1, color: "#242ea7" }}
                className="text-white/40 transition-colors hover:text-brand-blue"
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
