import { SolutionsNav } from "@/components/sections/solutions-nav";

export const metadata = {
  title: "Enterprise Solutions | Fetan LED",
  description: "Explore our customized LED solutions for Bank & Finance, Education, Energy, Healthcare, Retail, Real Estate, and Manufacturing sectors.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20" style={{ background: "linear-gradient(180deg, #1d74ff 0%, #0a2d66 50%, #1d74ff 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:text-left">
          <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Our Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Discover tailored LED display ecosystems engineered for the unique demands of your industry.
          </p>
        </div>
        
        <SolutionsNav />
      </div>
    </main>
  );
}
