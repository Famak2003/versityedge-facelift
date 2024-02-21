import ExploreInsigntComp from "./ExploreInsightComp/ExploreInsigntComp";
import UpcomingEventsComp from "./UpcomingEventsComp";
import KnowYourChancesComp from "./KnowYourChancesComp";
import PartnersComp from "./Partners/PartnersComp";
import RatingComp from "./RatingComp/RatingComp";
import OurTeamComp from "./Team";
import TestimonialComp from "./TestimonialComp";
import WaecNecoGceComp from "./WaecNecoGceComp/WaecNecoGceComp";
import Cards from "./Cards/Cards";
import HeroComp from "./HeroComp";
import CheckForFree from "./CheckForFree";
import StudentStories from "./StudentStories";

function Main() {
  return (
    <>
      <HeroComp />

      <RatingComp />

      <Cards />

      <CheckForFree />

      <StudentStories />

      <WaecNecoGceComp />

      <KnowYourChancesComp />

      <TestimonialComp />

      <ExploreInsigntComp />

      <PartnersComp />

      <UpcomingEventsComp />

      <OurTeamComp />
    </>
  );
}

export default Main;
