"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  QUOTE_STEPS,
  SERVICE_OPTIONS,
} from "@/lib/constants/quote";
import {
  quoteFormSchema,
  type QuoteFormValues,
} from "@/lib/validations/quote-form";
import { cn } from "@/lib/utils";

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceType: "sales",
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      services: [],
      message: "",
    },
  });

  const serviceType = watch("serviceType");
  const selectedServices = watch("services");

  const toggleService = (service: string) => {
    const current = selectedServices ?? [];
    const updated = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    setValue("services", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: QuoteFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Quote request submitted:", data);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-quote-section py-20 sm:py-28"
      aria-labelledby="quote-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-quote-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="Get a Quote" id="quote-heading" />

            <ol className="mt-8 space-y-8">
              {QUOTE_STEPS.map((step, i) => (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-5"
                >
                  <span className="font-display text-3xl font-light text-brand-blue/60">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 bg-form-card p-6 backdrop-blur-sm sm:p-8"
          >
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
              Request a Proposal
            </h3>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center border border-brand-blue bg-brand-blue/10">
                  <span className="text-2xl text-brand-blue">✓</span>
                </div>
                <p className="mt-6 font-display text-lg font-bold uppercase text-white">
                  Request Received
                </p>
                <p className="mt-2 max-w-sm text-sm text-white/50">
                  Our team will review your project details and respond within
                  24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 space-y-5"
                noValidate
              >
                <Tabs
                  value={serviceType}
                  onValueChange={(v) =>
                    setValue("serviceType", v as "sales" | "rentals", {
                      shouldValidate: true,
                    })
                  }
                >
                  <TabsList className="w-full">
                    <TabsTrigger value="sales" className="flex-1">
                      Sales & Installation
                    </TabsTrigger>
                    <TabsTrigger value="rentals" className="flex-1">
                      Event Rentals
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value={serviceType} />
                </Tabs>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Name" error={errors.name?.message}>
                    <Input
                      {...register("name")}
                      placeholder="John Smith"
                      aria-invalid={!!errors.name}
                    />
                  </FormField>
                  <FormField label="Company" error={errors.company?.message}>
                    <Input
                      {...register("company")}
                      placeholder="Acme Corp"
                      aria-invalid={!!errors.company}
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Email" error={errors.email?.message}>
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="john@company.com"
                      aria-invalid={!!errors.email}
                    />
                  </FormField>
                  <FormField label="Phone" error={errors.phone?.message}>
                    <Input
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 (555) 000-0000"
                      aria-invalid={!!errors.phone}
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Project Type"
                    error={errors.projectType?.message}
                  >
                    <Select
                      value={watch("projectType")}
                      onValueChange={(v) =>
                        setValue("projectType", v, { shouldValidate: true })
                      }
                    >
                      <SelectTrigger aria-invalid={!!errors.projectType}>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROJECT_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Budget" error={errors.budget?.message}>
                    <Select
                      value={watch("budget")}
                      onValueChange={(v) =>
                        setValue("budget", v, { shouldValidate: true })
                      }
                    >
                      <SelectTrigger aria-invalid={!!errors.budget}>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_RANGES.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>

                <FormField
                  label="Service Requirements"
                  error={errors.services?.message}
                >
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {SERVICE_OPTIONS.map((service) => (
                      <label
                        key={service}
                        className={cn(
                          "flex cursor-pointer items-center gap-2 border border-white/10 p-3 text-xs transition-colors hover:border-brand-blue/40",
                          selectedServices?.includes(service) &&
                            "border-brand-blue/40 bg-brand-blue/5"
                        )}
                      >
                        <Checkbox
                          checked={selectedServices?.includes(service)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <span className="text-white/70">{service}</span>
                      </label>
                    ))}
                  </div>
                </FormField>

                <FormField
                  label="Project Details"
                  error={errors.message?.message}
                >
                  <Textarea
                    {...register("message")}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    aria-invalid={!!errors.message}
                  />
                </FormField>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
