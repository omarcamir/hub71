import { Link } from "@/app/i18n/navigation"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/Logo.svg" alt="HUB71" width="100" height="100" sizes="100vw" />
    </Link>
  )
}

export default Logo