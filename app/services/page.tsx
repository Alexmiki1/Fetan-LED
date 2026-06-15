import Link from "next/link";
import {
  Wrench,
  DraftingCompass,
  Calendar,
  Monitor,
  CheckCircle,
  Clock,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: Monitor,
    title: "Sales & Installation",
    tagline: "State-of-the-art permanent displays.",
    description:
      "We source, deliver, and install industry-leading LED hardware customized for your specific physical space. From retail windows to stadium scoreboards, our engineering teams ensure seamless structural integration and perfect pixel calibration.",
    benefits: [
      "Custom structural metalwork and engineering certification",
      "Seamless cabinet alignment with sub-millimeter precision",
      "Full calibration for accurate color and luminance uniformities",
      "Complete AV distribution and control system integration",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & SLA",
    tagline: "Proactive care and rapid emergency response.",
    description:
      "Keep your screens running at 100% capacity. Our SLA agreements offer routine diagnostic visits, on-site diode repair, module replacements, and color recalibration. We guarantee a 72-hour maximum response time to minimize commercial downtime.",
    benefits: [
      "On-site pixel, module, and card diagnostics and repairs",
      "Scheduled color calibration to combat diode aging",
      "Emergency parts warehouse with dedicated backup stock",
      "Remote system monitoring and diagnostic alerting",
    ],
  },
  {
    icon: DraftingCompass,
    title: "Custom Design & R&D",
    tagline: "Bespoke visual solutions for complex architectures.",
    description:
      "For projects requiring non-standard configurations. We engineer flexible, transparent, curved, and ultra-fine pitch screens that blend into building facades, curves, or art installations. If you can dream it, we can construct the LED solution.",
    benefits: [
      "Bespoke cabinet and PCB layouts created by CAD engineers",
      "Curved (concave/convex), right-angle, and transparent designs",
      "Simulation testing for visual angles and light load limits",
      "Architectural and structural building integration consulting",
    ],
  },
  {
    icon: Calendar,
    title: "Event Rentals",
    tagline: "High-impact temporary event displays.",
    description:
      "Turnkey rental systems for concerts, corporate keynote stages, brand activations, and live sports broadcasting. We provide touring-grade panels, structures, processors, and expert technicians to set up and manage your event screen.",
    benefits: [
      "High-refresh rental panels optimized for camera broadcast",
      "Fast-latching truss mount systems for quick stage setup",
      "Multi-input processors with live-switching capabilities",
      "Dedicated on-site LED technicians for show monitoring",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Consultation & Scanning",
    desc: "We analyze your physical environment, light conditions, and structural capacity using 3D spatial scanning.",
  },
  {
    step: "02",
    name: "Technical Design",
    desc: "We map pixel density, structural requirements, electrical loads, and select the optimal panel model.",
  },
  {
    step: "03",
    name: "Factory Testing",
    desc: "All LED modules undergo a rigorous 72-hour continuous burn-in test to guarantee zero pixel failures.",
  },
  {
    step: "04",
    name: "Installation & Tuning",
    desc: "Our technicians build the display on-site, align the cabinets, and perform pixel-by-pixel color calibration.",
  },
];

export default function ServicesPage() {
  return (
    <article className="min-h-screen bg-black pt-24 pb-0">
      {/* Background radial glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(29,116,255,0.08)_0%,transparent_65%)]" />

      {/* Services main content wrapper */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            Our Expertise
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl md:text-6xl">
            Premium LED Services
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
            Fetan LED delivers engineering excellence across all stages of the display lifecycle. We handle everything from design conceptualization to active event management and maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <section
                key={service.title}
                className="group relative border border-white/10 bg-card-gradient p-6 transition-all duration-500 hover:border-brand-blue/40 hover:bg-card-gradient-hover hover:shadow-[0_0_50px_rgba(29,116,255,0.15)] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-brand-blue bg-brand-blue/10 text-white transition-colors duration-500 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="text-xs text-white/50">{service.tagline}</p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-white/70 leading-relaxed sm:text-sm">
                  {service.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    What We Deliver:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-xs text-white/60"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue/70" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        {/* Workflow / Process Section */}
        <section className="mt-24 border-t border-white/10 pt-20">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Our Process
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              From Design to Activation
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs text-white/50 sm:text-sm">
              We apply rigorous engineering standards and precision quality control at every phase of the project deployment.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((proc) => (
              <div
                key={proc.step}
                className="border border-white/5 bg-white/[0.01] p-6 text-center sm:text-left"
              >
                <span className="font-display text-4xl font-light text-brand-blue/30">
                  {proc.step}
                </span>
                <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-wider text-white">
                  {proc.name}
                </h3>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Banner Section with seamless gradient to footer */}
      <section className="relative mt-24 overflow-hidden bg-quote-section pt-20 pb-20 sm:pb-28">
        {/* Glow overlay matching the quote form on the home page */}
        <div className="absolute inset-0 bg-quote-glow z-[1] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="border border-white/10 bg-white/[0.01] p-8 sm:p-12 backdrop-blur-md">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl lg:text-4xl">
              Have a Specific Project in Mind?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-xs text-white/60 sm:text-sm">
              Connect with our engineering team today to receive a comprehensive, itemized 3D simulation and price quote.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
