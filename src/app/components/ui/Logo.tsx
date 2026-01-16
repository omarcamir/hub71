import { Link } from "@/app/i18n/navigation";
import Image from "next/image";

type LogoProps = {
  size?: "small" | "medium" | "large";
};

const sizesMap = {
  small: 100,
  medium: 140,
  large: 180,
};

const Logo = ({ size = "medium" }: LogoProps) => {
  const dimension = sizesMap[size];

  return (
    <Link href="/">
      <Image
        src="/Logo.svg"
        alt="HUB71"
        width={dimension}
        height={dimension}
        sizes={`${dimension}px`}
        priority
      />
    </Link>
  );
};

export default Logo;
