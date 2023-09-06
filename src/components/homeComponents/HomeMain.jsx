import OurTeamComp from "./Team";
import UpcomingEventsComp from "./UpcomingEventsComp";
import PartnersComp from "./Partners/PartnersComp";
import ExploreInsigntComp from "./ExploreInsightComp/ExploreInsigntComp";
import TestimonialComp from "./TestimonialComp";
import RatingComp from "./RatingComp/RatingComp";
import KnowYourChancesComp from "./KnowYourChancesComp";
import WaecNecoGceComp from "./WaecNecoGceComp/WaecNecoGceComp";
import WhyChooseVersityEdge from "./WhyChooseVersityEdge";
import Hero from "./Hero";

export default function Main() {
  return (
    <main className=" flex w-[100%] flex-col gap-[2rem] mobile:gap-[3rem] md:gap-[5rem] md:text-[1.5rem] md:leading-8">
      <Hero />

      <WhyChooseVersityEdge />

      <WaecNecoGceComp />

      <KnowYourChancesComp />

      <RatingComp />

      <TestimonialComp />

      <ExploreInsigntComp />

      <PartnersComp />

      <UpcomingEventsComp />

      <OurTeamComp />
    </main>
  );
}
