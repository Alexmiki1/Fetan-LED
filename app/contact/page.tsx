import { Suspense } from "react";
import { QuoteForm } from "@/components/sections/quote-form";
import { LocationMap } from "@/components/sections/location-map";
import { Mail, Phone, MapPin, Clock, HelpCircle } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants/navigation";

const FAQS = [
  {
    question: "What is your typical response time?",
    answer: "For standard quote requests submitted via our website, our sales and engineering team typically responds within 4 business hours with initial pricing estimates.",
  },
  {
    question: "Do you offer custom screen configurations?",
    answer: "Yes, our team specialized in custom design. We can engineer screens that are curved (up to 15 degrees), transparent, ultra-slim, or custom shapes integrated directly into structural columns or window frames.",
  },
  {
    question: "What does your warranty cover?",
    answer: "We offer a 5-year hardware warranty on all permanent sales and installations. This covers complete module replacement, power supplies, and video controller parts. We also offer 72-hour on-site maintenance SLAs.",
  },
  {
    question: "Can I rent screens for short-term events?",
    answer: "Absolutely. We maintain a large inventory of touring-grade LED panels, truss structures, and video processors. We provide turnkey services including transport, build, live operation, and dismantle.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Intro Header */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(29,116,255,0.06)_0%,transparent_65%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            Connect With Us
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl md:text-6xl">
            Let's Build Something Visual
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
            Have a project in mind? Our AV engineering experts are ready to design a custom LED display solution tailored to your environment.
          </p>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <div className="relative z-10">
        <Suspense fallback={<div className="h-96 bg-transparent" />}>
          <QuoteForm />
        </Suspense>
      </div>

      {/* Direct Contact Cards & FAQs */}
      <section className="relative z-10 border-t border-white/10 bg-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left Column - FAQ */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <HelpCircle className="h-5 w-5 text-brand-blue" />
                <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                  Frequently Asked Questions
                </h2>
              </div>

              <dl className="mt-8 space-y-8">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <dt className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-xs text-white/60 leading-relaxed sm:text-sm">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right Column - Direct Info */}
            <div className="space-y-8 lg:col-span-5">
              <div className="border border-white/10 bg-white/[0.01] p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Direct Inquiries
                </h3>
                <p className="mt-2 text-xs text-white/50">
                  Prefer direct communication? Get in touch with our main office.
                </p>

                <div className="mt-8 space-y-6">
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="group flex items-center gap-4 text-xs text-white/70 transition-colors hover:text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 group-hover:border-brand-blue group-hover:bg-brand-blue/10">
                      <Mail className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-white/40">Email Us</span>
                      <span className="font-semibold">{COMPANY_EMAIL}</span>
                    </div>
                  </a>

                  <a
                    href="tel:+251913001010"
                    className="group flex items-center gap-4 text-xs text-white/70 transition-colors hover:text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 group-hover:border-brand-blue group-hover:bg-brand-blue/10">
                      <Phone className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-white/40">Call Support</span>
                      <span className="font-semibold">+251 913 001 010</span>
                    </div>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/nLS7MfySa1PDjK2b8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-xs text-white/70 transition-colors hover:text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 group-hover:border-brand-blue group-hover:bg-brand-blue/10">
                      <MapPin className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-white/40">Headquarters</span>
                      <span className="font-semibold">
                        Haile Gebre Silase St, Addis Ababa
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-xs text-white/70">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5">
                      <Clock className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-white/40">Business Hours</span>
                      <span className="font-semibold">Mon – Fri, 9:00 AM – 6:00 PM PST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <LocationMap />
    </div>
  );
}
