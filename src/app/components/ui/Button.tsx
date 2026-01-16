import { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "blue" | "white" | "red" | "green";

type ButtonProps = {
  title?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  rounded?: boolean;
  padding?: string; // e.g. "px-4 py-2"
};

const variantClasses: Record<ButtonVariant, string> = {
  blue: "bg-main-color border-main-color text-white hover:bg-white hover:text-main-color",
  white:
    "bg-white shadow-md shadow-gray-300 hover:bg-main-color hover:text-white border-none",
  red: "bg-red-color border-red-color text-white hover:bg-white hover:text-red-color",
  green:
    "bg-green-color border-green-color text-white hover:bg-white hover:text-green-color",
};

const Button = ({
  title,
  icon,
  onClick,
  variant = "blue",
  rounded = true,
  padding = "p-2",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        self-center border transition-all duration-200 cursor-pointer
        ${padding}
        ${rounded ? "rounded-md" : ""}
        ${variantClasses[variant]}
      `}
    >
      {icon}
      {title && <span className={icon ? "ms-2" : ""}>{title}</span>}
    </button>
  );
};

export default Button;
