import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";

// Lazy load heavy components
const VideoMarquee = lazy(() =>
  import("@/components/sections/video-marquee").then((mod) => ({
    default: mod.VideoMarquee,
  }))
);
const ProjectGallery = lazy(() =>
  import("@/components/sections/project-gallery").then((mod) => ({
    default: mod.ProjectGallery,
  }))
);
const SpecSheets = lazy(() =>
  import("@/components/sections/spec-sheets").then((mod) => ({
    default: mod.SpecSheets,
  }))
);
const QuoteForm = lazy(() =>
  import("@/components/sections/quote-form").then((mod) => ({
    default: mod.QuoteForm,
  }))
);

// Fallback component
function SectionSkeleton() {
  return <div className="h-96 bg-gradient-to-b from-black to-black/50" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <VideoMarquee />
      </Suspense>
      <Statistics />
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectGallery />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SpecSheets />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <QuoteForm />
      </Suspense>
    </>
  );
}
