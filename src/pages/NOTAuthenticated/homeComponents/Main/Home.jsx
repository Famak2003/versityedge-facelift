import PartnersComp from "./Partners/PartnersComp";
import RatingComp from "./RatingComp/RatingComp";

import Cards from "./Cards/Cards";
import HeroComp from "./HeroComp";
import CheckForFree from "./CheckForFree";
import StudentStories from "./StudentStories";
import WhatParentsSay from "./WhatParentsSay";
import WebinarAndEvents from "./WebinarAndEvents";
import LearnAllYouNeed from "./LearnAllYouNeed";
import HaveAnyQestions from "./HaveAnyQestions";

function Main() {
  return (
    <div className=" flex flex-col gap-[5rem]">
      <HeroComp />

      <RatingComp />

      <Cards />

      <CheckForFree />

      <StudentStories />

      <WhatParentsSay />

      <WebinarAndEvents />

      <PartnersComp />

      <LearnAllYouNeed />

      <HaveAnyQestions />
    </div>
  );
}

export default Main;
