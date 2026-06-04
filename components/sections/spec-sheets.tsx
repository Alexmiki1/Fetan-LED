"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SPEC_PRODUCTS } from "@/lib/constants/specs";

export function SpecSheets() {
  return (
    <section
      id="specs"
      className="relative border-t border-white/10 bg-spec-section py-20 sm:py-28"
      aria-labelledby="specs-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Spec Sheets"
          description="Technical specifications for our most popular LED panel configurations. Download detailed datasheets for your project planning."
          id="specs-heading"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SPEC_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group flex h-full flex-col transition-all duration-500 hover:border-brand-blue/40 hover:shadow-[0_0_50px_rgba(29,116,255,0.2)]">
                <CardHeader>
                  <CardTitle className="text-white">{product.name}</CardTitle>
                  <CardDescription>{product.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <dl className="space-y-3">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0"
                      >
                        <dt className="text-xs uppercase tracking-wider text-white/40">
                          {spec.label}
                        </dt>
                        <dd className="text-sm font-medium text-white">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-brand-blue group-hover:text-white"
                    asChild
                  >
                    <Link href={`/specs/${product.id}`}>
                      View Datasheet
                      <ArrowDownToLine className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
