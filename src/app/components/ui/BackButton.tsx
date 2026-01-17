"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const BackButton = () => {
  const router = useRouter();
  const isAr = useLocale() === "ar";

  return (
    <Button
      title={isAr ? "عودة" : "Back"}
      icon={
        isAr ? (
          <ArrowRight className="w-5 h-5" />
        ) : (
          <ArrowLeft className="w-5 h-5" />
        )
      }
      variant="ghost"
      onClick={() => router.back()}
      ariaLabel="Go Back"
      className="mb-6"
    />
  );
};

export default BackButton;
