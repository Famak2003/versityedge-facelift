// import Button from "./../../common/Button";
import HEROIMG1 from "./../../../assets/LoginHeroImage.png";
import Hero from "../../common/Hero";

export default function HeroComp() {
  return (
    <section className=" generalPadding flex h-fit xs:flex-col mobile:flex-row lg:h-[50rem] ">
      <Hero
        header={"Say Goodbye to Admission Failure"}
        heroImg={HEROIMG1}
        flipped={true}
        paint={["#0A66C2", "#FFCB21"]}
        btnText="Sign up"
        showBtnMobile={true}
        painHeaderText={"Goodbye Failure"}
      >
        At VersityEdge, we understand the challenges you face in navigating the
        complex admission process. The lack of personalized mentorship and
        guidance can be daunting, leaving you uncertain about the right path to
        take. But fear not – we are here to empower you with the solutions you
        need!
      </Hero>
    </section>
  );
}
