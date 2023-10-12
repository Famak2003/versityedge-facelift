// import Button from "./../../common/Button";
import HEROIMG1 from "./../../../assets/New hero image.png";
import Hero from "../../common/Hero";

export default function HeroComp() {
  return (
    <section className=" generalPadding mb-[2rem] flex h-fit xs:flex-col mobile:flex-row lmobile:mb-[3rem] md:mb-[5rem] lg:h-[50rem] ">
      <Hero
        header={"Admission journey is overwhelming, we make it simple and fun"}
        heroImg={HEROIMG1}
        flipped={true}
        paint={["#0A66C2", "#FFCB21"]}
        btnText="Sign up"
        showBtnMobile={true}
        painHeaderText={"journey simple"}
      >
        Attend daily live classes, recieve study materials, clarify your doubt,
        and do mock tests identify your weaknesses. Recieve personalized
        guidiance that sets you apart from your peers.
      </Hero>
    </section>
  );
}
