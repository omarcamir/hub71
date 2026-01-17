import dynamic from "next/dynamic";
import Loader from "../components/ui/Loader";
import UpComingSessions from "../components/sections/home/UpComingSessions";
const PrevSessions = dynamic(
  () => import("../components/sections/home/PrevSessions"),
  {
    loading: () => <Loader/>,
  }
);
import { fetchSessions } from "../utils/api";

export default async function HomePage() {
  const data = await fetchSessions();
  return <div className="container py-10">
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-3 flex flex-col gap-10 lg:gap-20">
        <UpComingSessions sessions={data?.sessions?.upcoming} />
        <PrevSessions sessions={data?.sessions?.previous} />
      </div>
    </div>
  </div>;
}
