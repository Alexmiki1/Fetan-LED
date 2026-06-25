import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Zap,
  Award,
  Users,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Layers,
  Radio,
  Wrench,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/lib/constants/navigation";

export const metadata: Metadata = {
  title: `About Fetan LED | LED Screen Supply, Installation & Advertising in Ethiopia`,
  description:
    "Learn about Fetan LED — Ethiopia's premier destination for cutting-edge LED screen supply, custom engineering, and professional installation. Founded in 2016, we deliver turnkey digital signage solutions built for reliability, brightness, and brilliant clarity.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description:
      "Every screen we deliver is manufactured to global standards and rigorously tested before installation. We partner only with ISO-certified LED manufacturers.",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description:
      "Rapid project timelines, on-time delivery, and a 72-hour maximum emergency response commitment ensure your business never misses a beat.",
  },
  {
    icon: Users,
    title: "Client-First Mindset",
    description:
      "We treat every project as if it were our own. Our engineers stay engaged long after installation — from routine calibration to full SLA support.",
  },
  {
    icon: TrendingUp,
    title: "Innovation-Driven",
    description:
      "From transparent facades to curved video walls, we constantly push the boundaries of what LED technology can achieve in Ethiopian architecture.",
  },
];

const MILESTONES = [
  {
    year: "2016",
    title: "Founded in Addis Ababa",
    description:
      "Fetan LED was established with a clear vision: to bring world-class LED display technology to Ethiopia's fast-growing commercial landscape.",
  },
  {
    year: "2018",
    title: "First Landmark Installation",
    description:
      "Completed our first large-scale outdoor LED billboard in Bole, setting a new standard for outdoor advertising displays in Addis Ababa.",
  },
  {
    year: "2020",
    title: "Fetan Advertising Launched",
    description:
      "Expanded into premium ad placement and strategic location scouting, forming the powerful dual-force Fetan ecosystem.",
  },
  {
    year: "2022",
    title: "Event Rental Division",
    description:
      "Expanded into high-impact event display rentals, powering concerts, corporate summits, and broadcast-grade stage screens across Ethiopia.",
  },
  {
    year: "2023",
    title: "50+ Installations Nationwide",
    description:
      "Passed the milestone of 50 successful permanent installations across retail, hospitality, government, and broadcast sectors.",
  },
  {
    year: "2024",
    title: "Expanded Service Portfolio",
    description:
      "Introduced custom R&D capabilities including curved, transparent, and ultra-fine pitch displays engineered for complex architectural environments.",
  },
];

const STATS = [
  { value: "23+", label: "Projects Delivered" },
  { value: "10+", label: "Years in Business" },
  { value: "24/7", label: "Support Coverage" },
];

const ECOSYSTEM = [
  {
    icon: Wrench,
    brand: "Fetan LED",
    tagline: "The Technical Engine",
    points: [
      "Premium component sourcing & supply",
      "In-house fabrication & custom steel structures",
      "Display configuration & software integration",
      "Flawless on-site installation & calibration",
    ],
  },
  {
    icon: BarChart3,
    brand: "Fetan Advertising",
    tagline: "The Commercial Force",
    points: [
      "Premium ad placement management",
      "Strategic location scouting",
      "Revenue-sharing partnership models",
      "Dynamic content distribution",
    ],
  },
];

const WHY_PARTNER = [
  {
    icon: Layers,
    title: "End-to-End Execution",
    description:
      "We manage the entire lifecycle of your project, from structural steel fabrication and component assembly to final calibration and maintenance.",
  },
  {
    icon: Award,
    title: "A Decade of Proven Expertise",
    description:
      "Since 2016, we have successfully deployed digital screens across complex urban landscapes, corporate environments, and high-traffic retail hubs.",
  },
  {
    icon: Zap,
    title: "Premium Engineering",
    description:
      "We specialize in high-refresh-rate, energy-efficient indoor and outdoor LED modules built to withstand local environmental conditions.",
  },
  {
    icon: Radio,
    title: "Strategic Synergy",
    description:
      "Our partnership with Fetan Advertising ensures your hardware investments can be instantly paired with market-leading commercial strategy.",
  },
];

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-black pt-24 pb-0">
      {/* Background radial glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(29,116,255,0.08)_0%,transparent_65%)]" />

      <div className="relative z-10">
        {/* ── HERO SECTION ── */}
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="border-b border-white/10 pb-16 pt-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Our Story
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
              About{" "}
              <span className="text-brand-blue">{COMPANY_NAME}</span>
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
              Ethiopia&apos;s premier destination for cutting-edge LED screen supply,
              custom engineering, and professional installation. Founded in 2016,
              we have spent the last decade helping businesses, brands, and public
              spaces communicate more effectively with high-impact visual technology.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/50 sm:text-base">
              From commanding outdoor advertising billboards to seamless indoor
              corporate displays, we deliver turnkey digital signage solutions
              built for reliability, brightness, and brilliant clarity.
            </p>
          </div>

          {/* ── STATS BAR ── */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-b border-white/10 pb-16 sm:grid-cols-4 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/40 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* ── MISSION & VISION ── */}
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            <div className="group border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-brand-blue/40 hover:shadow-[0_0_50px_rgba(29,116,255,0.12)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue transition-colors duration-500 group-hover:bg-brand-blue group-hover:text-white">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white sm:text-xl">
                  Our Mission
                </h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/65">
                To provide Ethiopian businesses and institutions with world-class LED display
                technology — delivered with precision engineering, transparent pricing, and
                long-term post-installation support. We believe every space deserves a display
                that communicates its message with maximum visual impact.
              </p>
            </div>

            <div className="group border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-brand-blue/40 hover:shadow-[0_0_50px_rgba(29,116,255,0.12)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue transition-colors duration-500 group-hover:bg-brand-blue group-hover:text-white">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white sm:text-xl">
                  Our Vision
                </h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/65">
                To become East Africa&apos;s most trusted LED display partner — raising the standard
                for visual communication technology across the continent. We envision a future
                where every major Ethiopian city landmark, venue, and brand speaks through
                premium LED-powered displays.
              </p>
            </div>
          </div>

          {/* ── WHO WE ARE ── */}
          <section className="mt-24 border-t border-white/10 pt-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Who We Are
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                  Ethiopian Expertise,<br />
                  <span className="text-white/60">Global Standards</span>
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  Fetan LED was founded by a team of engineers and entrepreneurs who recognized a
                  critical gap in Ethiopia&apos;s rapidly modernizing commercial sector: the absence
                  of a reliable, technically sophisticated LED display partner.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  We are 100% Ethiopian-owned and operated, with deep local knowledge of the
                  regulatory environment, climate conditions, and logistical challenges unique to
                  operating in East Africa. We combine this local intelligence with global
                  supply-chain partnerships to source the finest LED hardware on the market.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Our in-house engineering team handles every phase of the project lifecycle —
                  from site surveys and custom structural design to calibration, software
                  integration, and ongoing maintenance — ensuring complete accountability and
                  the highest levels of quality control.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
                  <MapPin className="h-4 w-4 text-brand-blue" />
                  <span>Haile Gebre Silase St, Addis Ababa, Ethiopia</span>
                </div>
              </div>

              {/* Decorative grid of glowing boxes — each links to the relevant section */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Indoor Displays", icon: "🖥️", href: "/#indoor" },
                  { label: "Outdoor Billboards", icon: "🏙️", href: "/#outdoor" },
                  { label: "Event Screens", icon: "🎤", href: "/contact?tab=rentals#contact" },
                  { label: "Custom Solutions", icon: "⚙️", href: "/contact#contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group/card flex flex-col items-center justify-center gap-3 border border-white/10 bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-brand-blue/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(29,116,255,0.12)]"
                  >
                    <span className="text-3xl transition-transform duration-300 group-hover/card:scale-110">{item.icon}</span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors duration-300 group-hover/card:text-brand-blue">
                      {item.label}
                    </p>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-brand-blue/0 transition-all duration-300 group-hover/card:text-brand-blue/80">
                      View →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── FETAN ECOSYSTEM ── */}
          <section className="mt-24 border-t border-white/10 pt-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Dual-Force Ecosystem
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                Fetan Ecosystem
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                To provide our clients with a truly seamless experience, Fetan LED operates
                alongside our sister company, Fetan Advertising — forming a powerful ecosystem
                that bridges the gap between state-of-the-art hardware and high-performance visibility.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {ECOSYSTEM.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.brand}
                    className="group border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-brand-blue/40 hover:shadow-[0_0_50px_rgba(29,116,255,0.12)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue transition-colors duration-500 group-hover:bg-brand-blue group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold uppercase tracking-wider text-white sm:text-lg">
                          {item.brand}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue/70">
                          {item.tagline}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-white/60">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Ecosystem bridge statement */}
            <div className="mt-8 border border-brand-blue/20 bg-brand-blue/5 p-6 text-center">
              <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                Whether you are looking to{" "}
                <span className="font-semibold text-white">purchase and install an enterprise-grade LED screen</span>{" "}
                for your property, or you want to{" "}
                <span className="font-semibold text-white">monetize a high-traffic location</span>{" "}
                through premium advertising partnerships — the Fetan ecosystem delivers
                everything you need under one roof.
              </p>
            </div>
          </section>

          {/* ── WHY PARTNER WITH FETAN LED ── */}
          <section className="mt-24 border-t border-white/10 pt-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                The Fetan Advantage
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                Why Partner with Fetan LED?
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_PARTNER.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-brand-blue/40 hover:shadow-[0_0_40px_rgba(29,116,255,0.12)]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue transition-colors duration-500 group-hover:bg-brand-blue group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── VALUES ── */}
          <section className="mt-24 border-t border-white/10 pt-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                What Drives Us
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                Our Core Values
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="group border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-brand-blue/40 hover:shadow-[0_0_40px_rgba(29,116,255,0.12)]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue transition-colors duration-500 group-hover:bg-brand-blue group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/55">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── TIMELINE / MILESTONES ── */}
          <section className="mt-24 border-t border-white/10 pt-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Our Journey
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                Milestones
              </h2>
            </div>

            <div className="mt-14 space-y-0">
              {MILESTONES.map((milestone) => (
                <div
                  key={milestone.year}
                  className="group relative grid grid-cols-[80px_1fr] gap-6 sm:grid-cols-[120px_1fr]"
                >
                  {/* Year column */}
                  <div className="flex flex-col items-end pt-1">
                    <span className="font-display text-xl font-bold text-brand-blue sm:text-2xl">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Vertical line + content */}
                  <div className="relative border-l border-white/10 pb-10 pl-8 group-last:pb-0">
                    {/* Dot on the timeline */}
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-blue ring-4 ring-black" />

                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/55 sm:text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── CTA SECTION ── */}
        <section className="relative mt-12 overflow-hidden bg-quote-section pt-20 pb-20 sm:pb-28">
          <div className="absolute inset-0 bg-quote-glow z-[1] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="border border-white/10 bg-white/[0.01] p-8 sm:p-12 backdrop-blur-md">
              <Award className="mx-auto mb-4 h-8 w-8 text-brand-blue" />
              <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl lg:text-4xl">
                Ready to Elevate Your Space?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-xs text-white/60 sm:text-sm">
                Partner with Ethiopia&apos;s most experienced LED display team. Request a free
                consultation and 3D simulation of your project today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Request a Quote →</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
