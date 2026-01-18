"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useLocale } from "next-intl";
import { notify } from "@/app/utils/notify";
import Button from "../../ui/Button";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const isAr = useLocale() === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notify("success", isAr ? "بحث مزيف!" : "Fake Search!");
    setOpen(false);
  };

  return (
    <>
      {/* SEARCH BUTTON */}
      <Button
        icon={<Search className="w-6 h-6" />}
        ariaLabel="search"
        variant="white"
        onClick={() => setOpen(true)}
      />

      {/* MODAL */}
      {open && (
        <div
          dir={dir}
          ref={modalRef}
          className="
                w-full md:w-1/2 lg:w-1/3
                fixed top-20 left-1/2
                -translate-x-1/2
                z-50
                border bg-white shadow-xl
                p-3"
          role="dialog"
          aria-label={isAr ? "خيارات البحث" : "Search options"}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between gap-2 p-2 border-b">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-700" />
              <span className="font-bold text-sm">
                {isAr ? "بحث" : "Search"}
              </span>
            </div>

            {/* CLOSE */}
            <button
              className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* SEARCH FORM */}
          <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder={isAr ? "اكتب للبحث..." : "Type to search..."}
              className="flex-1 px-3 py-2 border outline-none text-sm shrink-0"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black hover:bg-main-color transition-colors text-white font-bold text-sm shrink-0 cursor-pointer"
            >
              {isAr ? "بحث" : "Search"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
