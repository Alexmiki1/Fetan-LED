import { z } from "zod";

export const quoteFormSchema = z.object({
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
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  services: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  message: z
    .string()
    .min(10, "Please provide more details about your project")
    .max(2000, "Message must be under 2000 characters"),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
