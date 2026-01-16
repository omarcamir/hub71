import { Link } from "@/app/i18n/navigation"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/Logo.svg" alt="HUB71" width="140" height="140" sizes="100vw" />
    </Link>
  )
}

export default Logo