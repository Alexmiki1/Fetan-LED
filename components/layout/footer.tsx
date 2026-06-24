"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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
    { label: "About Us", href: "/about" },
    { label: "LED Products", href: "/#products" },
    { label: "Case Studies", href: "/#projects" },
    { label: "Support", href: "/contact" },
  ],
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: LinkedInIcon, href: "https://linkedin.com/company/fetanled", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://fb.me/FetanLED", label: "Facebook" },
  { icon: Mail, href: `mailto:${COMPANY_EMAIL}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#1d74ff" }}>
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
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">Contact</h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="text-sm text-white/80">
                Fetan LED Advertising<br />Addis Ababa, Ethiopia
              </p>
              <a href="tel:+251913001010" className="block text-sm text-white/80 transition-colors hover:text-white">
                +251 913 001 010
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="block text-sm text-white/80 transition-colors hover:text-white">
                {COMPANY_EMAIL}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-xs text-white/80">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                className="text-white/80 transition-colors hover:text-white"
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
