"use client";

import { Link } from "@/app/i18n/navigation";
import { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "blue" | "white" | "red" | "green" | "ghost";

type ButtonProps = {
  title?: string; // visible text
  icon?: ReactNode; // optional icon
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  rounded?: boolean;
  padding?: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";

  // ✅ New accessibility prop
  ariaLabel?: string; // used when button has only icon
};

const variantClasses: Record<ButtonVariant, string> = {
  blue: "bg-main-color border border-main-color text-white hover:bg-white hover:text-main-color",
  white:
    "bg-white shadow-md shadow-gray-300 hover:bg-main-color hover:text-white border-none",
  red: "bg-red-color border border-red-color text-white hover:bg-white hover:text-red-color",
  green:
    "bg-green-color border border-green-color text-white hover:bg-white hover:text-green-color",
  ghost: "bg-transparent border-none text-gray-600 hover:text-main-color",
};

const disabledClasses =
  "opacity-50 cursor-not-allowed hover:bg-none hover:text-current";

const baseClasses = `
  self-center transition-all duration-200 flex gap-2 items-center
`;

const Button = ({
  title,
  icon,
  onClick,
  variant = "blue",
  rounded = true,
  padding = "p-2",
  className = "",
  disabled = false,
  href,
  type = "button",
  ariaLabel, // new prop
}: ButtonProps) => {
  const classes = `
    ${baseClasses}
    ${padding}
    ${rounded ? "rounded-md" : ""}
    ${variantClasses[variant]}
    ${disabled ? disabledClasses : ""}
    ${className}
  `;

  // Render as LINK if href exists
  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={!title && ariaLabel ? ariaLabel : undefined} // accessibility
      >
        {icon && icon}
        {title && <span>{title}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} cursor-pointer`}
      aria-label={!title && ariaLabel ? ariaLabel : undefined} // accessibility
    >
      {icon && icon}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
