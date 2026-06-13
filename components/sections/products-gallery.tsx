"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle, Cpu, MessageSquare } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants/products";
import type { Product } from "@/types";

export function ProductsGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProduct]);

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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-brand-blue/40 hover:bg-black/40 hover:shadow-[0_8px_30px_rgb(29,116,255,0.15)]"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white p-6 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2"
                  quality={85}
                  priority={idx < 4}
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
      </div>

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
    </section>
  );
}
