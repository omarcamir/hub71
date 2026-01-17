// Schema.ts
import { z } from "zod";

type TranslationValues = Record<string, string | number>;
type TFunction = (key: string, values?: TranslationValues) => string;

export const createContactSchema = (t: TFunction) =>
  z.object({
    firstName: z
      .string()
      .min(1, t("required")),

    lastName: z
      .string()
      .min(1, t("required")),

    email: z
      .string()
      .email(t("invalidEmail")),

    companyName: z
      .string()
      .min(1, t("required")),

    jobTitle: z
      .string()
      .min(1, t("required")),

    companyWebsite: z
      .string()
      .url(t("invalidUrl"))
      .optional(),

    gender: z
      .string()
      .min(1, t("required")),

    hearAboutHub: z
      .string()
      .min(1, t("required")),

    interestedIn: z
      .string()
      .min(1, t("required")),

    country: z
      .string()
      .min(1, t("required")),
  });

export type ContactForm = z.infer<ReturnType<typeof createContactSchema>>;
