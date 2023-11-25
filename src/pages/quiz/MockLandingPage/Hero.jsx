// import Button from "./../../common/Button";
import HEROIMG from "./../../../assets/mock landing page image.png";

// import HEROIMG1 from "./../../../assets/New hero image.png";
import Hero from "../../../components/common/Hero";

export default function HeroComp() {
  return (
    <section className=" generalPadding mb-[2rem] flex h-fit xs:flex-col mobile:flex-row lmobile:mb-[3rem] md:mb-[5rem] lg:h-[50rem] ">
      <Hero
        header={"Make adjustment to the way you want your quiz."}
        heroImg={HEROIMG}
        paint={["#FFCB21"]}
        btnText="Start quiz"
        btnPath="/quiz/mock"
      ></Hero>
    </section>
  );
}
