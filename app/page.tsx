import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { MarqueeText } from "@/components/MarqueeText";

const ProjectGallery = lazy(() =>
  import("@/components/sections/project-gallery").then((mod) => ({ default: mod.ProjectGallery }))
);
const ProductsGallery = lazy(() =>
  import("@/components/sections/products-gallery").then((mod) => ({ default: mod.ProductsGallery }))
);
const QuoteForm = lazy(() =>
  import("@/components/sections/quote-form").then((mod) => ({ default: mod.QuoteForm }))
);

function SectionSkeleton() {
  return <div className="h-96 bg-transparent" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeText />

      {/* Single gradient wrapper — Statistics down to QuoteForm, ends at #1d74ff */}
      <div
        style={{
          background:
            "linear-gradient(180deg, #1d74ff 0%, #1245a0 8%, #0e2d5e 18%, #071a38 28%, #040e1a 40%, #000000 52%, #000000 68%, #020a1a 76%, #051228 83%, #0a1f45 89%, #1245a0 95%, #1d74ff 100%)",
        }}
      >
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
      </div>
    </>
  );
}
