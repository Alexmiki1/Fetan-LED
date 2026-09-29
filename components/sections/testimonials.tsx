"use client";

import { motion } from "framer-motion";

import { TESTIMONIALS, getAverageRating } from "@/lib/constants/testimonials";

export function Testimonials() {
  const averageRating = getAverageRating();

  return (
    <section
      id="testimonials"
      className="relative mt-20 border-t border-white/10 pt-16 sm:mt-24 sm:pt-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Client Success Stories
          </p>
          <h3
            id="testimonials-heading"
            className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl"
          >
            What Our Clients Say
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Trusted by leading organizations across Ethiopia for LED screen solutions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(averageRating)
                    ? "text-yellow-400"
                    : "text-white/20"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-white">
            {averageRating} out of 5
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.article
            key={testimonial.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-brand-blue/40 hover:bg-white/[0.06] sm:p-8"
          >
            {/* Rating */}
            <div className="mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonial.rating ? "text-yellow-400" : "text-white/20"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <blockquote className="mb-6 flex-1">
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                "{testimonial.content}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 font-semibold text-brand-blue">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/60">
                    {testimonial.role}
                    {testimonial.company && (
                      <>
                        {" · "}
                        <span className="text-white/80">{testimonial.company}</span>
                      </>
                    )}
                  </p>
                  {testimonial.project && (
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-brand-blue">
                      {testimonial.project}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-white/40 sm:text-left">
        Verified client testimonials from completed projects in Ethiopia
      </p>
    </section>
  );
}
