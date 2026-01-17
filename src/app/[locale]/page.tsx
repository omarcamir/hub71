import { getTranslations } from "next-intl/server";
import UpComingSessions from "../components/sections/home/UpComingSessions";
import PrevSessions from "../components/sections/home/PrevSessions";

export default async function HomePage() {
  const t = await getTranslations("");
  return <div className="container py-10">
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <UpComingSessions/>
        <PrevSessions/>
      </div>
    </div>
  </div>;
}
