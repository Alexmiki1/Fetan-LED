import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Maximize2, ShieldCheck, Cpu, Ruler, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/constants/projects";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ id: string }>;
}

const PROJECT_DETAILS: Record<
  string,
  {
    description: string;
    challenge: string;
    solution: string;
    specs: { label: string; value: string }[];
  }
> = {
  "1": {
    description: "An immersive digital canvas spanning the lobby of a leading corporate headquarters. This seamless P2.5 LED wall creates an immediate visual impact, displaying high-fidelity generative art and real-time company updates.",
    challenge: "The lobby featured double-height glass walls exposing the display to extreme ambient daylight, requiring high brightness without compromising color accuracy or overheating the space.",
    solution: "We deployed high-contrast, energy-efficient black-face SMD modules paired with an advanced NovaStar processing system. Integrated thermal management and ambient light sensors dynamically adjust brightness to maintain visual impact while optimizing power usage.",
    specs: [
      { label: "Pixel Pitch", value: "2.5 mm" },
      { label: "Total Resolution", value: "3840 × 1440 (Ultra-Wide)" },
      { label: "Brightness", value: "1,200 nits" },
      { label: "Refresh Rate", value: "3,840 Hz" },
      { label: "Controller", value: "NovaStar MCTRL4K" },
      { label: "Service Access", value: "Front Serviceable" },
    ],
  },
  "2": {
    description: "A sleek vertical retail display installed inside the window display of a prestigious fashion house flagship store. Engineered to attract high street traffic with extremely crisp, luminous brand imagery.",
    challenge: "Physical space inside the store window was extremely restricted, leaving less than 15cm of depth for both mounting structure and ventilation.",
    solution: "Utilizing custom ultra-slim cabinets with a depth of just 45mm, we mounted the screen directly onto the window frame. An external power supply rack was positioned in a nearby service closet, minimizing heat generation and noise in the retail area.",
    specs: [
      { label: "Pixel Pitch", value: "2.5 mm" },
      { label: "Display Size", value: "1.5m × 3.5m" },
      { label: "Brightness", value: "1,500 nits" },
      { label: "Service Access", value: "Front Access" },
      { label: "Cabinet Depth", value: "45 mm" },
      { label: "Contrast Ratio", value: "4,000:1" },
    ],
  },
  "3": {
    description: "A spectacular, wide-format outdoor screen serving as the focal point for a major summer concert festival. This screen delivered high-brightness, lag-free live video and motion graphics to over 40,000 attendees.",
    challenge: "The installation required temporary deployment on a stage scaffolding system, meaning it had to withstand strong winds, high temperatures, and sudden rainstorms while remaining lightweight.",
    solution: "We selected our IP65-rated wind-permeable mesh LED panels. The open-mesh structure reduced wind loading by 40%, and the lightweight carbon fiber frame allowed for fast, safe rigging on the truss system.",
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm" },
      { label: "Weather Rating", value: "IP65 (Waterproof)" },
      { label: "Brightness", value: "5,500 nits" },
      { label: "Panel Weight", value: "9.8 kg" },
      { label: "Refresh Rate", value: "3,840 Hz" },
      { label: "Wind Load Rating", value: "Up to 24 m/s" },
    ],
  },
  "4": {
    description: "A state-of-the-art conference hall screen integrated with multi-source video switcher. Designed for detailed presentations, virtual meetings, and smooth live streaming feeds.",
    challenge: "The display needed to offer zero moiré effect when filmed by professional broadcast cameras during live-streamed keynote presentations.",
    solution: "We configured a P1.5 fine-pitch display with high-gray, high-refresh IC drivers. By synchronizing the screen's refresh cycle with the camera shutter speeds, we achieved a perfect, flicker-free broadcast broadcast quality image.",
    specs: [
      { label: "Pixel Pitch", value: "1.5 mm" },
      { label: "Native Resolution", value: "1920 × 1080 (Full HD)" },
      { label: "Contrast Ratio", value: "5,000:1" },
      { label: "Refresh Rate", value: "7,680 Hz" },
      { label: "Video Interface", value: "HDMI 2.0 / 3G-SDI" },
      { label: "Camera Moiré Shield", value: "Built-in Anti-Glare Overlay" },
    ],
  },
  "5": {
    description: "A high-impact digital billboard network located on the facade of a busy shopping center. Operating 18 hours a day, it delivers high-contrast commercial advertisements.",
    challenge: "Long operating hours in an outdoor environment subject to extreme summer heat demanded maximum reliability and low operating costs.",
    solution: "We installed energy-efficient common cathode LED panels that run 15°C cooler than traditional screens. This design cut power consumption by 30% and eliminated the need for active air conditioning inside the billboard enclosure.",
    specs: [
      { label: "Pixel Pitch", value: "4.0 mm" },
      { label: "Cabinet Material", value: "Die-cast Aluminum" },
      { label: "Brightness", value: "6,500 nits" },
      { label: "Power Consumption", value: "Avg 220W/m²" },
      { label: "Remote Control", value: "4G Cloud Player" },
      { label: "Working Temp", value: "-20°C to +60°C" },
    ],
  },
  "6": {
    description: "A fast-deployment rental rig designed for touring concerts and arena shows. It provides stage designers with modular options to create arches, curves, and standard screens.",
    challenge: "Concert tours demand rapid load-in and load-out times. The screen had to be built and dismantled in less than three hours by a local road crew.",
    solution: "We provided touring-grade rental cabinets featuring quick-lock mechanisms and integrated climbing handles. The panels support curved layouts (up to 15° concave/convex) and package into shockproof flight cases.",
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm" },
      { label: "Curve Options", value: "-15° to +15° Modular" },
      { label: "Cabinet Weight", value: "7.8 kg" },
      { label: "Fast Latches", value: "1-Second Lock System" },
      { label: "Refresh Rate", value: "3,840 Hz" },
      { label: "Power Connection", value: "Neutrik PowerCON" },
    ],
  },
};

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  const detail = PROJECT_DETAILS[id];

  if (!project || !detail) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-black pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background radial glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(29,116,255,0.12)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Content Grid */}
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Image Showcase */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden border border-white/10 bg-zinc-900/50 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              {project.image ? (
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-zinc-950 text-white/20">
                  No Image Available
                </div>
              )}
              {/* Decorative border glow */}
              <div className="absolute inset-0 border border-brand-blue/0 transition-colors duration-500 group-hover:border-brand-blue/30" />
            </div>

            {/* Project Overview Stats cards */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="border border-white/5 bg-white/[0.02] p-4 text-center">
                <Ruler className="mx-auto h-5 w-5 text-brand-blue" />
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Size
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-white">
                  {project.size || "Custom"}
                </span>
              </div>
              <div className="border border-white/5 bg-white/[0.02] p-4 text-center">
                <Cpu className="mx-auto h-5 w-5 text-brand-blue" />
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Pitch
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-white">
                  {detail.specs.find(s => s.label === "Pixel Pitch")?.value || "N/A"}
                </span>
              </div>
              <div className="border border-white/5 bg-white/[0.02] p-4 text-center">
                <ShieldCheck className="mx-auto h-5 w-5 text-brand-blue" />
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Warranty
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-white">
                  5 Years
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Technical specs */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                {project.category} solutions
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-sm italic text-white/50">{project.subtitle}</p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white">
                    <Sparkles className="h-4 w-4 text-brand-blue" />
                    Project Summary
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {detail.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="border-l-2 border-brand-blue/30 pl-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      The Challenge
                    </h4>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      {detail.challenge}
                    </p>
                  </div>
                  <div className="border-l-2 border-brand-blue/60 pl-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Our Solution
                    </h4>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      {detail.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Sheet Table */}
            <div className="mt-10">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Technical Specifications
              </h3>
              <div className="mt-4 border border-white/10 bg-white/[0.01]">
                <dl className="divide-y divide-white/5">
                  {detail.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between px-4 py-3 text-xs"
                    >
                      <dt className="uppercase tracking-wider text-white/40">
                        {spec.label}
                      </dt>
                      <dd className="font-semibold text-white">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Button className="w-full" asChild>
                  <Link href={`/#contact?service=${project.category}&project=${id}`}>
                    Request Custom Quote for this Display
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
