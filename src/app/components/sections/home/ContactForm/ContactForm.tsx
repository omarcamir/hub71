"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { createContactSchema, type ContactForm } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/app/components/form/FormField";
import Button from "@/app/components/ui/Button";
import { RotateCcw, RotateCw } from "lucide-react";
import { useRef } from "react";
import { submitContact } from "@/app/utils/api";
import { notify } from "@/app/utils/notify";

const ContactForm = () => {
  const t = useTranslations("validation"); // for validation messages
  const isAr = useLocale() === "ar";
  const schema = createContactSchema(t);

  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<ContactForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      jobTitle: "",
      companyWebsite: "",
      gender: "",
      hearAboutHub: "",
      interestedIn: "",
      country: "",
    },
  });
  const isSubmitting = methods.formState.isSubmitting;

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await submitContact(data);
      if (res.success) {
        notify("success", t("successMessage"));
        methods.reset();
        return;
      }

      // validation error (422)
      if ("errors" in res) {
        Object.entries(res.errors).forEach(([field, messages]) => {
          const message = messages?.[0];
          if (!message) return;

          methods.setError(field as keyof ContactForm, {
            type: "server",
            message,
          });
        });

        notify("error", t("validationError"));
      }
    } catch {
      notify("error", t("unexpectedError"));
    }
  };

  // Gender options
  const genderOptions = [
    { id: 1, value: "male", labelE: "Male", labelA: "ذكر" },
    { id: 2, value: "female", labelE: "Female", labelA: "أنثى" },
    {
      id: 3,
      value: "preferNotToSay",
      labelE: "Prefer not to say",
      labelA: "أفضل عدم القول",
    },
  ];

  // InterestedIn options
  const interestedInOptions = [
    { id: 1, value: "funding", labelE: "Funding", labelA: "تمويل" },
    {
      id: 2,
      value: "mentorship",
      labelE: "Mentorship",
      labelA: "إرشاد / توجيه",
    },
    {
      id: 3,
      value: "networking",
      labelE: "Networking",
      labelA: "تواصل / شبكة علاقات",
    },
  ];

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="scroll-mt-20 md:scroll-mt-32 flex flex-col gap-5"
      >
        {/* Form Fields */}
        <FormField
          name="firstName"
          fieldType="input"
          placeholder={t("firstNamePlaceholder")}
          required
        />

        <FormField
          name="lastName"
          fieldType="input"
          placeholder={t("lastNamePlaceholder")}
          required
        />

        <FormField
          name="email"
          fieldType="input"
          type="email"
          placeholder={t("emailPlaceholder")}
          required
        />

        <FormField
          name="companyName"
          fieldType="input"
          placeholder={t("companyNamePlaceholder")}
          required
        />

        <FormField
          name="jobTitle"
          fieldType="input"
          placeholder={t("jobTitlePlaceholder")}
          required
        />

        <FormField
          name="companyWebsite"
          fieldType="input"
          type="url"
          placeholder={t("companyWebsitePlaceholder")}
          required
        />

        <FormField
          name="gender"
          fieldType="select"
          placeholder={t("genderPlaceholder")}
          options={genderOptions}
          required
        />

        <FormField
          name="hearAboutHub"
          fieldType="input"
          placeholder={t("hearAboutHubPlaceholder")}
          required
        />

        <FormField
          name="interestedIn"
          fieldType="select"
          placeholder={t("interestedInPlaceholder")}
          options={interestedInOptions}
          required
        />

        <FormField
          name="country"
          fieldType="input"
          placeholder={t("countryPlaceholder")}
          required
        />

        <FormField
          name="marketingConsent"
          fieldType="checkbox"
          label={t("contactCheckbox")}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
          <Button
            title={t("submitButton")}
            variant="blue"
            padding="px-6 py-2"
            rounded={false}
            type="submit"
            className="font-bold uppercase"
            loading={isSubmitting}
          />
          <Button
            variant="ghost"
            title={t("clearForm")}
            ariaLabel={t("clearForm")}
            icon={
              isAr ? (
                <RotateCcw className="w-5 h-5 text-main-color" />
              ) : (
                <RotateCw className="w-5 h-5 text-main-color" />
              )
            }
            onClick={() => {
              methods.reset();
              formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
