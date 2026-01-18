import { Link } from "@/app/i18n/navigation";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/Logo.svg"
        alt="HUB71"
        width={180}
        height={180}
        sizes="(max-width: 640px) 90px, (max-width: 1024px) 140px, 180px"
        fetchPriority="high"
        className={className}
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  );
};

export default Logo;
