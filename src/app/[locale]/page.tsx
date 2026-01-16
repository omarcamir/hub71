import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("");
  return <div className="container py-10 h-screen"></div>;
}
