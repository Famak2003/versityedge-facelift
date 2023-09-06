import Hero from "./Hero";
import HowITHelps from "./HowITHelps";
import HowITWorks from "./HowITWorks";
import KnowYourChances from "./KnowYourChances";
import Testimonial from "./Testimonial";

export default function Main() {
  return (
    <main className=" flex w-[100%] flex-col gap-[2rem] mobile:gap-[3rem] md:gap-[5rem] md:text-[1.5rem] md:leading-8">
      <Hero />
      <HowITWorks />
      <HowITHelps />
      <Testimonial />
      <KnowYourChances />
    </main>
  );
}
