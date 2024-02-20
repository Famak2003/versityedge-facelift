// import Button from "./../../common/Button";
import HEROIMG from "./../../../../assets/PredictChance -Hero image.png";

// import HEROIMG1 from "./../../../assets/New hero image.png";
import Hero from "../../../../components/NotAuthUI/Hero/Hero";

export default function HeroComp() {
  return (
    <section className=" generalPadding mb-[2rem] flex h-fit xs:flex-col mobile:flex-row lmobile:mb-[3rem] md:mb-[5rem] lg:h-[50rem] ">
      <Hero
        header={
          "Practice your school’s or next exam’s past questions as mock exams"
        }
        heroImg={HEROIMG}
        paint={["#FFCB21"]}
        btnText="Start your Mock"
        btnPath="/quiz/mock-home"
        // showBtnMobile={true}
        painHeaderText={"past questions"}
      >
        Experience the real exam environment, tackle familiar questions and
        boost your confidence for success. Elevate your preparations with
        VersityEdge [master the exam format], and get a step closer to securing
        your dream admission.
      </Hero>
    </section>
  );
}
