import { Hero } from "@/components/sections/hero";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { QuoteForm } from "@/components/sections/quote-form";
import { SpecSheets } from "@/components/sections/spec-sheets";
import { Statistics } from "@/components/sections/statistics";
import { VideoMarquee } from "@/components/sections/video-marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoMarquee />
      <Statistics />
      <ProjectGallery />
      <SpecSheets />
      <QuoteForm />
    </>
  );
}
