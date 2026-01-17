"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import { useLocale } from "next-intl";

import { FormFieldProps, FormFieldType } from "./types/FormFieldProps";
import { cn } from "@/app/utils/cn";

interface Props<T extends FieldValues> extends FormFieldProps<T> {
  fieldType: FormFieldType;
}

export function FormField<T extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  fieldType,
  icon,
  options,
  disabled,
  className,
  min,
  required,
}: Props<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const lang = useLocale();
  const isAr = lang === "ar";
  const error = errors[name]?.message as string | undefined;

  const hasIcon = Boolean(icon); // ✅ IMPORTANT

  const baseFieldClasses = cn(
    "w-full",
    "bg-white text-sm font-medium placeholder:text-gray-400",
    "border border-gray-border",
    "focus:outline-none focus:border-main-color focus:ring-1 focus:ring-main-color",
    "py-3 px-4",
    disabled && "opacity-50 cursor-not-allowed"
  );

  const requiredMark = required ? " *" : "";
  const computedPlaceholder = placeholder
    ? `${placeholder}${requiredMark}`
    : undefined;

  return (
    <div className="flex flex-col gap-1 ">
      <div className={cn("relative group", className)}>
        {/* Icon */}
        {hasIcon && (
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 pointer-events-none z-10",
              isAr ? "right-4" : "left-4"
            )}
          >
            {icon}
          </div>
        )}

        {/* Input */}
        {fieldType === "input" && (
          <input
            type={type}
            min={min}
            disabled={disabled}
            placeholder={computedPlaceholder}
            aria-required={required}
            {...register(name)}
            className={cn(
              baseFieldClasses,
              hasIcon && (isAr ? "pr-12" : "pl-12")
            )}
          />
        )}

        {/* Textarea */}
        {fieldType === "textarea" && (
          <textarea
            disabled={disabled}
            placeholder={computedPlaceholder}
            aria-required={required}
            {...register(name)}
            className={cn(
              baseFieldClasses,
              "resize-none min-h-30",
              hasIcon && (isAr ? "pr-12" : "pl-12")
            )}
          />
        )}

        {/* Select */}
        {fieldType === "select" && (
          <select
            disabled={disabled}
            {...register(name)}
            aria-required={required}
            className={cn(
              baseFieldClasses,
              "appearance-none cursor-pointer",
              hasIcon && (isAr ? "pr-12" : "pl-12")
            )}
          >
            <option value="" disabled>
              {computedPlaceholder}
            </option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.id}>
                {isAr ? opt.labelA : opt.labelE}
              </option>
            ))}
          </select>
        )}

        {/* Checkbox */}
        {fieldType === "checkbox" && (
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              disabled={disabled}
              aria-required={required}
              {...register(name)}
              className={cn(
                "mt-1 h-4 w-4 rounded border-gray-border",
                "text-main-color focus:ring-main-color",
                disabled && "cursor-not-allowed"
              )}
            />

            <span className="text-sm leading-relaxed">
              {label}
              {required && <span className="ms-1">*</span>}
            </span>
          </label>
        )}

        {/* Floating Label */}
        {label && fieldType !== "checkbox" && (
          <label
            className={cn(
              "absolute -top-2.5 px-2 bg-white",
              "text-[10px] font-semibold uppercase tracking-wider",
              "text-gray-400 group-focus-within:text-main-color",
              isAr ? "right-4" : "left-4"
            )}
          >
            {label}
            {required && <span className="text-red-color ms-1">*</span>}
          </label>
        )}
      </div>

      {/* Error */}
      {error && <p className="mt-1 text-xs text-red-color">{error}</p>}
    </div>
  );
}
