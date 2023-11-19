import "./AboutUs.css";
import Hero from "./Hero";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam/OurTeam";

function AboutUs() {
  return (
    <div className=" flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[5rem] ">
      <Hero />
      <OurStory />
      <OurTeam />
    </div>
  );
}

export default AboutUs;
