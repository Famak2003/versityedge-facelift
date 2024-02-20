import HeroComp from "./HeroComp";
import HowItWorks from "./HowItWoks";
import KnowYourChances from "./KnowYourChances";
import TestimonialComp from "./Testimonials";
import WhatQuizCanDo from "./WhatQuizCanDo";

function LandingPage() {
  return (
    <>
      <HeroComp />
      <HowItWorks />
      <WhatQuizCanDo />
      <TestimonialComp />
      <KnowYourChances />
    </>
  );
}

export default LandingPage;
