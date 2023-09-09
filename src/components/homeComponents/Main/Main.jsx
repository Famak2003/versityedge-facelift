import ExploreInsigntComp from "./ExploreInsightComp/ExploreInsigntComp";
import UpcomingEventsComp from "./UpcomingEventsComp";
import KnowYourChancesComp from "./KnowYourChancesComp";
import PartnersComp from "./Partners/PartnersComp";
import RatingComp from "./RatingComp/RatingComp";
import OurTeamComp from "./Team";
import TestimonialComp from "./TestimonialComp";
import WaecNecoGceComp from "./WaecNecoGceComp/WaecNecoGceComp";
import WhyChooseVersityEdge from "./WhyChooseVersityEdge";
import HeroComp from "./HeroComp";

function Main() {
  return (
    <>
      <HeroComp />

      <WhyChooseVersityEdge />

      <WaecNecoGceComp />

      <KnowYourChancesComp />

      <RatingComp />

      <TestimonialComp />

      <ExploreInsigntComp />

      <PartnersComp />

      <UpcomingEventsComp />

      <OurTeamComp />
    </>
  );
}

export default Main;
