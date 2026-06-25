"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle, Cpu, MessageSquare, ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants/products";
import type { Product } from "@/types";

// Featured: Outdoor row + Indoor row (2 columns x 2 rows)
const FEATURED_IDS = [
  "outdoor-die-cast",
  "outdoor-fixed-steel",
  "indoor-die-cast",
  "transparent-indoor",
];

const featuredProducts = FEATURED_IDS.map((id) =>
  PRODUCTS.find((p) => p.id === id)
).filter(Boolean) as Product[];

const remainingProducts = PRODUCTS.filter((p) => !FEATURED_IDS.includes(p.id));

const INDOOR_MODELS = ["P1.25 Cabinet", "P1.8 Cabinet", "P2.5 Cabinet", "P2.5 Module"];
const OUTDOOR_MODELS = ["P4 Module", "P4 Cabinet", "P10 Single Color", "P10 Full Color"];

interface ModelInfo {
  name: string;
  image: string;
  category: "Indoor" | "Outdoor";
  description: string;
  specs: { label: string; value: string }[];
}

const MODEL_DATA: Record<string, ModelInfo> = {
  "P1.25 Cabinet": {
    name: "P1.25 Cabinet",
    image: "/images/products/p1_25_cabinet.png",
    category: "Indoor",
    description: "Ultra-fine pixel pitch indoor LED cabinet. Engineered for close-up viewing environments like control rooms, corporate boardrooms, and high-end retail displays where exceptional detail and clarity are paramount.",
    specs: [
      { label: "Pixel Pitch", value: "1.25 mm" },
      { label: "Cabinet Size", value: "600 x 337.5 mm" },
      { label: "Resolution", value: "480 x 270 px" },
      { label: "Brightness", value: "600 - 800 nits" },
      { label: "Refresh Rate", value: "3,840 Hz" },
      { label: "Cabinet Material", value: "Die-Cast Aluminium" }
    ]
  },
  "P1.8 Cabinet": {
    name: "P1.8 Cabinet",
    image: "/images/products/p1_8_cabinet.png",
    category: "Indoor",
    description: "Fine-pitch indoor LED display cabinet offering a balance of stunning high resolution and cost-effectiveness. Perfect for corporate lobbies, conference halls, and premium branding displays.",
    specs: [
      { label: "Pixel Pitch", value: "1.86 mm" },
      { label: "Cabinet Size", value: "600 x 337.5 mm" },
      { label: "Resolution", value: "322 x 181 px" },
      { label: "Brightness", value: "800 nits" },
      { label: "Refresh Rate", value: "3,840 Hz" },
      { label: "Cabinet Material", value: "Die-Cast Aluminium" }
    ]
  },
  "P2.5 Cabinet": {
    name: "P2.5 Cabinet",
    image: "/images/products/p2_5_cabinet.png",
    category: "Indoor",
    description: "Standard resolution indoor LED cabinet. Highly versatile and popular for retail walls, stage backdrops, and information displays with standard viewing distances.",
    specs: [
      { label: "Pixel Pitch", value: "2.5 mm" },
      { label: "Cabinet Size", value: "640 x 640 mm" },
      { label: "Resolution", value: "256 x 256 px" },
      { label: "Brightness", value: "800 - 1,000 nits" },
      { label: "Refresh Rate", value: "1,920 - 3,840 Hz" },
      { label: "Cabinet Material", value: "Die-Cast Aluminium" }
    ]
  },
  "P2.5 Module": {
    name: "P2.5 Module",
    image: "/images/products/p2_5_module.png",
    category: "Indoor",
    description: "Individual indoor P2.5 LED module. Features magnetic front service capability. Ideal for custom structural frames, curved walls, columns, or direct wall-mounting projects.",
    specs: [
      { label: "Pixel Pitch", value: "2.5 mm" },
      { label: "Module Size", value: "320 x 160 mm" },
      { label: "Resolution", value: "128 x 64 px" },
      { label: "Lamp Type", value: "SMD1515" },
      { label: "Service Mode", value: "Magnetic Front Access" },
      { label: "Refresh Rate", value: "1,920 Hz" }
    ]
  },
  "P4 Module": {
    name: "P4 Module",
    image: "/images/products/p4_module.png",
    category: "Outdoor",
    description: "Outdoor P4 LED module with high-brightness SMD LEDs. Fully waterproof front coating (IP65) and durable housing for long-term outdoor operation. Perfect for custom display enclosures.",
    specs: [
      { label: "Pixel Pitch", value: "4.0 mm" },
      { label: "Module Size", value: "320 x 160 mm" },
      { label: "Resolution", value: "80 x 40 px" },
      { label: "Brightness", value: "5,500 nits" },
      { label: "IP Rating", value: "IP65 Waterproof Front" },
      { label: "Lamp Type", value: "SMD1919" }
    ]
  },
  "P4 Cabinet": {
    name: "P4 Cabinet",
    image: "/images/products/p4_cabinet.png",
    category: "Outdoor",
    description: "Outdoor fixed/rental P4 LED cabinet. Featuring heavy-duty protection against weather, high brightness for direct sunlight visibility, and efficient heat dissipation.",
    specs: [
      { label: "Pixel Pitch", value: "4.0 mm" },
      { label: "Cabinet Size", value: "960 x 960 mm" },
      { label: "Resolution", value: "240 x 240 px" },
      { label: "Brightness", value: "5,500 - 6,000 nits" },
      { label: "IP Rating", value: "IP65 Front & Rear" },
      { label: "Cabinet Material", value: "Steel / Aluminium" }
    ]
  },
  "P10 Single Color": {
    name: "P10 Single Color",
    image: "/images/products/p10_single_color.png",
    category: "Outdoor",
    description: "High-contrast single color (typically red or amber) LED display module. Extensively used for scroll text banners, parking signs, store opening messages, and simple information displays.",
    specs: [
      { label: "Pixel Pitch", value: "10.0 mm" },
      { label: "Module Size", value: "320 x 160 mm" },
      { label: "Resolution", value: "32 x 16 px" },
      { label: "Display Color", value: "Mono Color (Red/Amber)" },
      { label: "Brightness", value: "3,500 nits" },
      { label: "IP Rating", value: "IP65 Front" }
    ]
  },
  "P10 Full Color": {
    name: "P10 Full Color",
    image: "/images/products/p10_full_color.png",
    category: "Outdoor",
    description: "Robust P10 full color outdoor LED module. Outstanding choice for large-scale outdoor advertising billboards, stadium perimeter displays, and long-range information screens.",
    specs: [
      { label: "Pixel Pitch", value: "10.0 mm" },
      { label: "Module Size", value: "320 x 160 mm" },
      { label: "Resolution", value: "32 x 16 px" },
      { label: "Brightness", value: "6,500 nits" },
      { label: "IP Rating", value: "IP65 Front" },
      { label: "Lamp Type", value: "SMD3535" }
    ]
  }
};

function ModelChips({
  models,
  onModelClick,
}: {
  models: string[];
  onModelClick: (model: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
      {models.map((model) => (
        <button
          key={model}
          onClick={() => onModelClick(model)}
          className="rounded-full border border-brand-blue/40 bg-brand-blue/15 hover:bg-brand-blue/30 hover:border-brand-blue hover:shadow-[0_0_12px_rgba(29,116,255,0.4)] px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {model}
        </button>
      ))}
    </div>
  );
}

interface ModelDetailsModalProps {
  modelName: string | null;
  onClose: () => void;
}

function ModelDetailsModal({ modelName, onClose }: ModelDetailsModalProps) {
  if (!modelName) return null;
  const modelInfo = MODEL_DATA[modelName];
  if (!modelInfo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative z-10 flex h-full max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[0_0_50px_rgba(29,116,255,0.15)] md:h-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full border border-white/10 bg-black/60 p-2 text-white/70 transition-colors hover:bg-black hover:text-white cursor-pointer"
          aria-label="Close model details"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white p-6">
                <Image
                  src={modelInfo.image}
                  alt={modelInfo.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>
            
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Model Specifications
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                  {modelInfo.name}
                </h2>
                <div className="mt-2">
                  <span className="inline-block rounded-full bg-brand-blue/15 px-2.5 py-0.5 text-[10px] font-semibold text-brand-blue border border-brand-blue/30 uppercase tracking-wider">
                    {modelInfo.category} Screen
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {modelInfo.description}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Technical Specs</h4>
                <div className="grid gap-2.5 grid-cols-2">
                  {modelInfo.specs.map((spec) => (
                    <div key={spec.label} className="rounded-lg bg-white/[0.02] p-2.5 border border-white/5">
                      <span className="text-[9px] uppercase tracking-wider text-white/40 block">{spec.label}</span>
                      <span className="text-xs font-semibold text-white mt-0.5 block">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <Button className="flex-1" asChild onClick={onClose}>
                  <Link href={`/contact?model=${encodeURIComponent(modelInfo.name)}`}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Inquire About This Model
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1" onClick={onClose}>
                  Close Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FeaturedCard({
  product,
  index,
  onClick,
}: {
  product: Product;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-white/10 bg-black/20 p-6 transition-all duration-300 hover:border-brand-blue/40 hover:bg-black/40 hover:shadow-[0_8px_40px_rgba(29,116,255,0.18)] sm:p-8"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-blue">
        {product.subtitle}
      </span>

      <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-white p-8 transition-transform duration-300 group-hover:scale-[1.02] sm:aspect-[16/9] sm:p-10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-2"
          quality={90}
          priority={index < 2}
        />
      </div>

      <div className="mt-6 flex flex-col justify-between">
        <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-brand-blue sm:text-2xl">
          {product.name}
        </h3>
        <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-blue/80 transition-colors duration-300 group-hover:text-brand-blue">
          Click to view details &rarr;
        </span>
      </div>
    </motion.div>
  );
}

export function ProductsGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.body.style.overflow = (selectedProduct || selectedModel) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProduct, selectedModel]);

  return (
    <section
      id="products"
      className="relative border-t border-white/10 py-20 sm:py-28"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Products"
          description="Explore our range of premium LED display panels, engineered for high reliability, flawless performance, and visual impact."
          id="products-heading"
        />

        {/* Outdoor row */}
        <div id="outdoor" className="mt-12">
          <h3 className="text-center font-display text-lg font-bold uppercase tracking-[0.2em] text-white sm:text-left sm:text-xl">
            Outdoor LED Display Screen
          </h3>
          <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-base font-semibold uppercase tracking-wider text-white">
              Available models:
            </span>
            <ModelChips models={OUTDOOR_MODELS} onModelClick={setSelectedModel} />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
            {featuredProducts.slice(0, 2).map((product, idx) => (
              <FeaturedCard
                key={product.id}
                product={product}
                index={idx}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>

        {/* Indoor row */}
        <div id="indoor" className="mt-12">
          <h3 className="text-center font-display text-lg font-bold uppercase tracking-[0.2em] text-white sm:text-left sm:text-xl">
            Indoor Display Screen
          </h3>
          <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-base font-semibold uppercase tracking-wider text-white">
              Available models:
            </span>
            <ModelChips models={INDOOR_MODELS} onModelClick={setSelectedModel} />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
            {featuredProducts.slice(2, 4).map((product, idx) => (
              <FeaturedCard
                key={product.id}
                product={product}
                index={idx + 2}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>

        {/* See More toggle */}
        {!showAll && remainingProducts.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="gap-2"
            >
              See More Products
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Remaining products — smaller grid, same style as before */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {remainingProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer rounded-2xl border border-white/5 bg-neutral-900/40 p-4 transition-all duration-300 hover:border-brand-blue/30 hover:bg-neutral-900/80 hover:shadow-[0_8px_30px_rgb(29,116,255,0.08)]"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white p-6 transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain p-2"
                        quality={85}
                      />
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-brand-blue">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/50 line-clamp-1">{product.subtitle}</p>
                      <span className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-brand-blue/80 transition-colors duration-300 group-hover:text-brand-blue">
                        Click to view details &rarr;
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" onClick={() => setShowAll(false)} className="gap-2">
                  Show Less
                  <ChevronDown className="h-4 w-4 rotate-180" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal — unchanged */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[0_0_50px_rgba(29,116,255,0.15)] md:h-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 rounded-full border border-white/10 bg-black/60 p-2 text-white/70 transition-colors hover:bg-black hover:text-white"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white p-8">
                      <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 30vw" />
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                        <Cpu className="h-4 w-4 text-brand-blue" /> Quick Specifications
                      </h4>
                      <dl className="mt-3 divide-y divide-white/5">
                        {selectedProduct.specs.slice(0, 3).map((spec) => (
                          <div key={spec.label} className="flex justify-between py-2 text-xs">
                            <dt className="text-white/40">{spec.label}</dt>
                            <dd className="font-medium text-white">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue">Product Spotlight</span>
                      <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">{selectedProduct.name}</h2>
                      <p className="mt-1 text-sm font-medium text-white/50">{selectedProduct.subtitle}</p>
                      <p className="mt-6 text-sm leading-relaxed text-white/70">{selectedProduct.description}</p>
                      <div className="mt-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Key Product Features</h4>
                        <ul className="mt-3 space-y-2.5">
                          {selectedProduct.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 border-t border-white/5 pt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">All Specifications</h4>
                      <div className="grid gap-3 grid-cols-2 mb-6">
                        {selectedProduct.specs.map((spec) => (
                          <div key={spec.label} className="rounded-lg bg-white/[0.02] p-3 border border-white/5">
                            <span className="text-[9px] uppercase tracking-wider text-white/40 block">{spec.label}</span>
                            <span className="text-xs font-semibold text-white mt-1 block">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1" asChild onClick={() => setSelectedProduct(null)}>
                          <Link href={`/contact?product=${selectedProduct.id}`}>
                            <MessageSquare className="mr-2 h-4 w-4" /> Inquire About This Product
                          </Link>
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={() => setSelectedProduct(null)}>
                          Close Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Model Detail Modal */}
      <AnimatePresence>
        <ModelDetailsModal modelName={selectedModel} onClose={() => setSelectedModel(null)} />
      </AnimatePresence>
    </section>
  );
}
