"use client";

import { notify } from "@/app/utils/notify";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { FormEvent } from "react";

export function SubscribeForm() {
  const isAr = useLocale() === "ar";
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notify("success", isAr ? "اشتراك مزيف!" : "Fake Subscribe!");
    e.currentTarget.reset();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex w-full border border-black overflow-hidden"
    >
      <input
        type="email"
        placeholder={isAr? "بريدك" : "Your Mail"}
        className="flex-1 min-w-0 px-4 py-3 text-sm outline-none"
        required
      />

      <button
        type="submit"
        className="flex items-center gap-2 px-6 font-semibold text-sm uppercase shrink-0 hover:bg-black hover:text-white transition-colors cursor-pointer"
      >
        {isAr ? "اشترك" : "Subscribe"}
        {isAr ? (
          <ChevronLeft className="w-5 h-5 shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 shrink-0" />
        )}
      </button>
    </form>
  );
}
