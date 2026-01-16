type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  className = "",
}) => {
  if (orientation === "vertical") {
    return (
      <div
        className={`w-px self-stretch bg-linear-to-b from-transparent via-black/35 to-transparent ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={`h-px w-full bg-linear-to-r from-transparent via-black/35 to-transparent ${className}`}
      aria-hidden
    />
  );
};

export default Divider;
