"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
import { QUOTE_STEPS } from "@/lib/constants/quote";
import {
  quoteFormSchema,
  type QuoteFormValues,
} from "@/lib/validations/quote-form";

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
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceType: "sales",
      name: "",
      company: "",
      email: "",
      phone: "",
      eventStartDate: "",
      eventEndDate: "",
      venueEnvironment: "",
      screenWidth: "",
      screenHeight: "",
      contentTypeVideo: false,
      contentTypeLiveFeed: false,
      contentTypeStatic: false,
      contentTypeScoreboard: false,
      additionalNotes: "",
    },
  });

  // Auto-select tab from URL query param (?tab=rentals)
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "rentals" || tab === "sales") {
      setValue("serviceType", tab, { shouldValidate: false });
    }
  }, [searchParams, setValue]);

  const serviceType = watch("serviceType");

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitError(null);
    if (!data.name || !data.email || !data.company) {
      setSubmitError("Please fill in your name, company, and email before submitting.");
      return;
    }
    try {
      const payload = {
        ...data,
        eventDates:
          data.serviceType === "rentals" && data.eventStartDate
            ? data.eventEndDate
              ? `${data.eventStartDate} to ${data.eventEndDate}`
              : data.eventStartDate
            : undefined,
      };
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const json = (await response.json().catch(() => null)) as { error?: string } | null;
        setSubmitError(json?.error || "We couldn't send your request right now. Please try again in a moment.");
        return;
      }
      reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Quote form submission failed", error);
      setSubmitError("We couldn't send your request right now. Please check your connection and try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(180deg, #1245a0 0%, #15409a 25%, #1858b8 50%, #1a66cc 75%, #1d74ff 100%)",
      }}
      aria-labelledby="quote-heading"
    >

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
                  <span className="font-display text-3xl font-light text-white/60">{step.step}</span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">{step.title}</h3>
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
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">REQUEST A PROPOSAL</h3>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center border border-brand-blue bg-brand-blue/10">
                  <span className="text-2xl text-white">&#10003;</span>
                </div>
                <p className="mt-6 font-display text-lg font-bold uppercase text-white">Request Received</p>
                <p className="mt-2 max-w-sm text-sm text-white/50">
                  Our team will review your project details and respond within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
                <Tabs
                  value={serviceType}
                  onValueChange={(v) => setValue("serviceType", v as "sales" | "rentals", { shouldValidate: true })}
                >
                  <TabsList className="w-full">
                    <TabsTrigger value="sales" className="flex-1">SALES & INSTALLATION</TabsTrigger>
                    <TabsTrigger value="rentals" className="flex-1">EVENT RENTAL</TabsTrigger>
                  </TabsList>
                  <TabsContent value={serviceType} />
                </Tabs>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="FULL NAME *" error={errors.name?.message}>
                    <Input {...register("name")} placeholder="Your name" aria-invalid={!!errors.name} />
                  </FormField>
                  <FormField label="COMPANY" error={errors.company?.message}>
                    <Input {...register("company")} placeholder="Organisation" aria-invalid={!!errors.company} />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="EMAIL *" error={errors.email?.message}>
                    <Input type="email" {...register("email")} placeholder="work@company.com" aria-invalid={!!errors.email} />
                  </FormField>
                  <FormField label="PHONE *" error={errors.phone?.message}>
                    <Input type="tel" {...register("phone")} placeholder="+251 ____" aria-invalid={!!errors.phone} />
                  </FormField>
                </div>

                <AnimatePresence initial={false}>
                  {serviceType === "rentals" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid gap-5 sm:grid-cols-2 overflow-hidden"
                    >
                      <FormField label="EVENT START DATE" error={errors.eventStartDate?.message}>
                        <Input type="date" {...register("eventStartDate")} aria-invalid={!!errors.eventStartDate} />
                      </FormField>
                      <FormField label="EVENT END DATE" error={errors.eventEndDate?.message}>
                        <Input type="date" {...register("eventEndDate")} aria-invalid={!!errors.eventEndDate} />
                      </FormField>
                    </motion.div>
                  )}
                </AnimatePresence>

                <FormField label="VENUE / ENVIRONMENT" error={errors.venueEnvironment?.message}>
                  <Select
                    value={watch("venueEnvironment")}
                    onValueChange={(v) => setValue("venueEnvironment", v, { shouldValidate: true })}
                  >
                    <SelectTrigger aria-invalid={!!errors.venueEnvironment}>
                      <SelectValue placeholder="Select environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indoor">Indoor</SelectItem>
                      <SelectItem value="outdoor">Outdoor</SelectItem>
                      <SelectItem value="stadium">Stadium</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="hall">Hall</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField label="ESTIMATED SCREEN DIMENSIONS (METERS)" error={undefined}>
                  <div className="flex items-center gap-3">
                    <Input {...register("screenWidth")} placeholder="Width (m)" aria-invalid={!!errors.screenWidth} className="flex-1" />
                    <span className="text-white/50">x</span>
                    <Input {...register("screenHeight")} placeholder="Height (m)" aria-invalid={!!errors.screenHeight} className="flex-1" />
                  </div>
                </FormField>

                <FormField label="CONTENT TYPE (SELECT ALL THAT APPLY)" error={undefined}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { id: "contentTypeVideo", label: "Video / Animation" },
                      { id: "contentTypeStatic", label: "Static Imagery" },
                      { id: "contentTypeLiveFeed", label: "Live Feed" },
                      { id: "contentTypeScoreboard", label: "Scoreboard / Data" },
                    ].map(({ id, label }) => (
                      <div key={id} className="flex items-center gap-3">
                        <Checkbox
                          id={id}
                          checked={watch(id as keyof QuoteFormValues) as boolean}
                          onCheckedChange={(checked) => setValue(id as keyof QuoteFormValues, checked === true)}
                        />
                        <Label htmlFor={id} className="cursor-pointer font-normal text-white/80">{label}</Label>
                      </div>
                    ))}
                  </div>
                </FormField>

                <FormField label="ADDITIONAL NOTES" error={errors.additionalNotes?.message}>
                  <Textarea
                    {...register("additionalNotes")}
                    placeholder="Describe your project, budget range, timeline, or any specific technical requirements..."
                    aria-invalid={!!errors.additionalNotes}
                    rows={4}
                  />
                </FormField>

                <div className="space-y-4">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "SUBMIT PROPOSAL REQUEST"}
                  </Button>
                  {submitError && (
                    <p className="text-xs text-red-400" role="alert">{submitError}</p>
                  )}
                  <div className="space-y-1 text-center text-xs text-white/50">
                    <p>We typically respond within 4 business hours.</p>
                    <p>No obligations - just a clear, itemised proposal.</p>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
