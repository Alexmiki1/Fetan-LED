import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/sections/quote-form";
import { LocationMap } from "@/components/sections/location-map";
import { Mail, Phone, MapPin, Clock, HelpCircle } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants/navigation";

export const metadata: Metadata = {
  title: "Contact Fetan LED | Get a Quote for LED Displays",
  description: "Get in touch with Fetan LED for expert consultation, premium LED screen quotes, and custom digital signage solutions in Addis Ababa, Ethiopia.",
  keywords: [
    "contact Fetan LED",
    "LED screen quotes Addis Ababa",
    "buy LED screen Ethiopia",
    "LED display consultation",
    "Fetan Advertising contact",
  ],
};

const requirements = [
  "Company and primary contact details",
  "Project type (Sales/Installation or Rental)",
  "Venue environment and target screen dimensions",
  "Preferred content types (Video, Static, Live Feed)",
  "Target completion date and budget expectations",
  "Any additional technical requirements",
];

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
    <div className="min-h-screen bg-[#020202] text-white antialiased">
      {/* Brand Header Line */}
      <div className="h-1.5 bg-gradient-to-r from-[#1245a0] via-[#1a66cc] to-[#1d74ff]" />
      
      {/* Main Quote Form Section with Split Layout (adapted from reference) */}
      <main id="main-content" tabIndex={-1}>
        <section className="border-b border-white/5 bg-[#050505] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(560px,1.2fr)] lg:items-start">
            
            {/* Left Column - Sticky Info Sidebar */}
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-brand-blue">
                Quote request
              </span>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-6xl uppercase font-bold tracking-wide">
                Let's configure the perfect LED display.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                Provide a short overview of your project. Our engineering team will review it, confirm the best hardware and design path, and send a detailed proposal.
              </p>
              
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                <h2 className="text-sm font-bold uppercase tracking-[.14em] text-white">Before you begin</h2>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/60">
                  {requirements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-brand-blue">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/40">
                No payment information is required. We provide clear, itemized proposals with zero obligations.
              </p>
            </div>

            {/* Right Column - Embedded Quote Form */}
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-5 text-white shadow-2xl sm:p-7 relative z-10">
              <div className="text-[11px] font-bold uppercase tracking-[.18em] text-brand-blue mb-2">Project Details</div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">Tell us about your project.</h2>
              <p className="mt-2 text-sm leading-6 text-white/50 mb-8">Required fields are marked with an asterisk (*). Our team will respond within 4 business hours.</p>
              
              <Suspense fallback={<div className="h-96 bg-transparent" />}>
                <QuoteForm />
              </Suspense>
            </div>

          </div>
        </section>
      </main>

      {/* Direct Contact Cards & FAQs (From Original) */}
      <section className="relative z-10 border-t border-white/5 bg-[#020202] py-20 sm:py-24">
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
