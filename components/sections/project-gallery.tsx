"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { SectionHeading } from "@/components/shared/section-heading";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/constants/projects";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORY_LABELS: Record<Exclude<ProjectCategory, "all">, string> = {
  indoor: "Retail",
  outdoor: "AD",
  stage: "Stage",
};

import Link from "next/link";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const isLarge = project.span === "large";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={!isMobile ? { scale: 1.02 } : undefined}
      className={cn(
        "group relative overflow-hidden border border-white/10 bg-card-gradient transition-all duration-500 hover:border-brand-blue/50 hover:bg-card-gradient-hover hover:shadow-[0_0_40px_rgba(29,116,255,0.22)]",
        isLarge
          ? "col-span-1 row-span-2 min-h-[280px] sm:min-h-[400px] lg:col-span-2 lg:row-span-2 lg:min-h-[480px]"
          : project.span === "medium"
            ? "min-h-[200px] sm:min-h-[240px]"
            : "min-h-[180px] sm:min-h-[200px]"
      )}
    >
      {/* Absolute Clickable Link Overlay */}
      <Link href={`/projects/${project.id}`} className="absolute inset-0 z-30" aria-label={`View ${project.title} case study`} />

      {/* Background image */}
      {project.image && (
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              isLarge
                ? "(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
            }
            quality={75}
            className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
            priority={false}
            loading="lazy"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(29,116,255,0.1)_0%,transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(29,116,255,0.14)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
            {CATEGORY_LABELS[project.category]}
          </span>
          {project.size && (
            <span className="font-display text-lg font-bold text-white/80 sm:text-xl">
              {project.size}
            </span>
          )}
        </div>

        <div>
          <h3
            className={cn(
              "font-display font-bold uppercase tracking-wide text-white",
              isLarge ? "text-xl sm:text-2xl lg:text-3xl" : "text-base sm:text-lg"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-white/50 sm:text-sm">{project.subtitle}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Case Study →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative bg-gallery-section py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title="Project Gallery" id="projects-heading" />
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-brand-blue text-white"
                    : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
