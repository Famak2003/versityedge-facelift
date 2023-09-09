import Hero from "../../common/Hero";
import HEROIMG1 from "./../../../assets/PredictChance -Hero image.png";

export default function HeroComp() {
  return (
    <section className=" generalPadding">
      <Hero
        header={
          "Understand your likelihood of getting admitted into your dream institution"
        }
        painHeaderText={"dream institution"}
        heroImg={HEROIMG1}
        btnText={"Predict admission"}
      >
        VersityEdge’s admission prediction tool takes the guess work out of your
        admission journey by analyzing your academic details and provide you
        with an estimate of your chances of success. It’s like an admission
        expert at your fingertips.
      </Hero>
    </section>
  );
}
