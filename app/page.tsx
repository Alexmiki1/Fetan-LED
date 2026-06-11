import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { MarqueeText } from "@/components/MarqueeText";

// Lazy load heavy components
const ProjectGallery = lazy(() =>
  import("@/components/sections/project-gallery").then((mod) => ({
    default: mod.ProjectGallery,
  }))
);
const ProductsGallery = lazy(() =>
  import("@/components/sections/products-gallery").then((mod) => ({
    default: mod.ProductsGallery,
  }))
);
const QuoteForm = lazy(() =>
  import("@/components/sections/quote-form").then((mod) => ({
    default: mod.QuoteForm,
  }))
);

function SectionSkeleton() {
  return <div className="h-96 bg-gradient-to-b from-black to-black/50" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeText />
      <Statistics />
      <Suspense fallback={<SectionSkeleton />}>
        <ProductsGallery />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectGallery />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <QuoteForm />
      </Suspense>
    </>
  );
}
