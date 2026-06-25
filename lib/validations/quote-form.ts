import { z } from "zod";

export const quoteFormSchema = z
  .object({
  serviceType: z.enum(["sales", "rentals"]),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be under 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Phone number is required").max(20, "Phone number is too long"),
  eventStartDate: z.string().optional().or(z.literal("")),
  eventEndDate: z.string().optional().or(z.literal("")),
  venueEnvironment: z.string().optional().or(z.literal("")),
  screenWidth: z.string().optional().or(z.literal("")),
  screenHeight: z.string().optional().or(z.literal("")),
  contentTypeVideo: z.boolean().optional(),
  contentTypeLiveFeed: z.boolean().optional(),
  contentTypeStatic: z.boolean().optional(),
  contentTypeScoreboard: z.boolean().optional(),
  additionalNotes: z
    .string()
    .max(2000, "Additional notes must be under 2000 characters")
    .optional()
    .or(z.literal("")),
  });

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
