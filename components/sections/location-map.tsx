"use client";

import { MapPin } from "lucide-react";

export function LocationMap() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-center gap-2 border-b border-white/10 pb-4">
          <MapPin className="h-5 w-5 text-brand-blue" />
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
            Visit Us
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative overflow-hidden rounded-lg border border-[#0e397e]/60">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2906993743117!2d38.75776!3d9.0302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854d7142d119%3A0x25b47a5b1822ab02!2sFetan%20Advertising!5e0!3m2!1sen!2set!4v1718000000000"
            width="100%"
            height="500"
            style={{
              border: 0,
              filter: "invert(1) hue-rotate(200deg) brightness(0.65) saturate(2) contrast(1.1)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.01] p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
            Headquarters
          </h3>
          <p className="mt-1 text-xs text-white/50">Haile Gebre Silase St, Addis Ababa, Ethiopia</p>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Visit our showroom and LED display gallery to see our products in action. Our team can give you a live demo of the latest permanent installation and rental technologies.
          </p>
          <a
            href="https://maps.app.goo.gl/nLS7MfySa1PDjK2b8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded border border-brand-blue bg-brand-blue/10 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-brand-blue transition-all hover:bg-brand-blue hover:text-white"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}
