import { useEffect, useRef, useState } from "react";
import { setFontScale, toggleGrayscale } from "./accessibility";
import Button from "../Button";
import {
  PersonStanding,
  Plus,
  Minus,
  ImageOff,
  X,
} from "lucide-react";
import { useLocale } from "next-intl";

type AccessibilityPanelProps = {
  t: (key: string) => string;
};

export function AccessibilityPanel({ t }: AccessibilityPanelProps) {
  const [open, setOpen] = useState(false);
  const [fontScale, setScale] = useState(1);
  const [grayscale, setGrayscale] = useState(false);
  const isAr = useLocale() === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const panelRef = useRef<HTMLDivElement>(null);

  const increaseFont = () => {
    const v = Math.min(fontScale + 0.1, 1.5);
    setScale(v);
    setFontScale(v);
  };

  const decreaseFont = () => {
    const v = Math.max(fontScale - 0.1, 0.8);
    setScale(v);
    setFontScale(v);
  };

  const toggleBW = () => {
    const v = !grayscale;
    setGrayscale(v);
    toggleGrayscale(v);
  };

  // Close when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* ACCESSIBILITY BUTTON */}
      <Button
        icon={<PersonStanding className="w-6 h-6" />}
        ariaLabel="accessibility"
        variant="white"
        className="font-bold"
        onClick={() => setOpen(!open)}
      />

      {/* PANEL */}
      {open && (
        <div
          dir={dir}
          role="dialog"
          aria-label={t("Accessibility options")}
          ref={panelRef}
          className="
            fixed bottom-20 right-4 z-50
            w-64 rounded-2xl border bg-white shadow-xl
            p-3
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between gap-2 p-2 border-b">
            <div className="flex items-center gap-2">
              <PersonStanding className="w-5 h-5 text-gray-700" />
              <span className="font-bold text-sm">
                {t("Accessibility options")}
              </span>
            </div>

            {/* CLOSE BUTTON */}
            <button
              className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* BUTTONS */}
          <div className="space-y-2 mt-2 mb-1">
            <Button
              title={t("Increase font")}
              onClick={increaseFont}
              variant="ghost"
              className="w-full justify-start gap-3 font-bold bg-gray-100 hover:bg-gray-200"
              icon={<Plus className="w-5 h-5" />}
            />

            <Button
              title={t("Decrease font")}
              onClick={decreaseFont}
              variant="ghost"
              className="w-full justify-start gap-3 font-bold bg-gray-100 hover:bg-gray-200"
              icon={<Minus className="w-5 h-5" />}
            />

            <Button
              title={t("Black & white")}
              onClick={toggleBW}
              variant="ghost"
              className="w-full justify-start gap-3 font-bold bg-gray-100 hover:bg-gray-200"
              icon={<ImageOff className="w-5 h-5" />}
            />
          </div>
        </div>
      )}
    </>
  );
}
