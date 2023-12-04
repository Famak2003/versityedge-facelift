import Hero from "./Hero";
import KnowYourChances from "./KnowYourChances";
import Performance from "./Performance";
import ProgressReport from "./ProgressReport";

function MockLandingPage() {
  return (
    <section className=" flex flex-col gap-[5rem]">
      <Hero />
      <ProgressReport />
      <Performance />
      <KnowYourChances />
    </section>
  );
}

export default MockLandingPage;
