import Image from "next/image";
import RollingText from "@/components/RollingText";
import ImageSlider from "@/components/ImageSlider";
import RegionSelection from "@/components/RegionSelection";
import Recommendation from "@/components/Recommendation";
import RecommendationList from "@/components/RecommendationList";
import RankingHeading from "@/components/RankingHeading";
import RankingList from "@/components/RankingList";
import RegionBasedHeader from "@/components/RegionBasedHeader";
import RegionBasedList from "@/components/RegionBasedList";
import AppointmentHeader from "@/components/AppointmentHeader";
import AppointmentList from "@/components/AppointmentList";

export default function Home() {
  return (
    <main className="mb-[13vh]">
      <div>
        <RollingText />
        <ImageSlider />
        <RegionSelection />
        <Recommendation />
        <RecommendationList />
        <RankingHeading />
        <RankingList />
        <RegionBasedHeader />
        <RegionBasedList />
        <AppointmentHeader />
        <AppointmentList />
      </div>
      <div></div>
    </main>
  );
}
