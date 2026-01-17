import { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "blue" | "white" | "red" | "green";

type ButtonProps = {
  title?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  rounded?: boolean;
  padding?: string;
  className?: string;
  disabled?: boolean; // added disabled prop
};

const variantClasses: Record<ButtonVariant, string> = {
  blue: "bg-main-color border-main-color text-white hover:bg-white hover:text-main-color",
  white:
    "bg-white shadow-md shadow-gray-300 hover:bg-main-color hover:text-white border-none",
  red: "bg-red-color border-red-color text-white hover:bg-white hover:text-red-color",
  green:
    "bg-green-color border-green-color text-white hover:bg-white hover:text-green-color",
};

// Disabled styles (applied on top of variant styles)
const disabledClasses =
  "opacity-50 cursor-not-allowed hover:bg-none hover:text-current";

const Button = ({
  title,
  icon,
  onClick,
  variant = "blue",
  rounded = true,
  padding = "p-2",
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        self-center border transition-all duration-200 cursor-pointer flex gap-2 items-center
        ${padding}
        ${rounded ? "rounded-md" : ""}
        ${variantClasses[variant]}
        ${disabled ? disabledClasses : ""}
        ${className}
      `}
    >
      {icon && icon}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
