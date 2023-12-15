// import Button from "./../../common/Button";
import { useSelector } from "react-redux";
import HEROIMG1 from "./../../../assets/New hero image.png";
import Hero from "./../../../components/common/Hero";

export default function HeroComp() {
  const isUserLoggedin = useSelector((state) => state.auth.user);

  return (
    <section className=" generalPadding mb-[2rem] flex h-fit xs:flex-col mobile:flex-row lmobile:mb-[3rem] md:mb-[5rem] lg:h-[50rem] ">
      {isUserLoggedin ? (
        <Hero
          header={
            "Admission journey is overwhelming, we make it simple and fun"
          }
          heroImg={HEROIMG1}
          flipped={true}
          paint={["#0A66C2", "#FFCB21"]}
          // showBtnMobile={true}
          painHeaderText={"journey simple"}
        >
          Attend daily live classes, receive study materials, clarify your
          doubts, and do mock tests to identify your strengths and pinpoint your
          weaknesses. Receive personalized guidance that sets you apart from
          your peers.
        </Hero>
      ) : (
        <Hero
          header={
            "Admission journey is overwhelming, we make it simple and fun"
          }
          heroImg={HEROIMG1}
          flipped={true}
          paint={["#0A66C2", "#FFCB21"]}
          btnText="Sign up"
          btnPath="/auth"
          // showBtnMobile={true}
          painHeaderText={"journey simple"}
        >
          Attend daily live classes, receive study materials, clarify your
          doubts, and do mock tests to identify your strengths and pinpoint your
          weaknesses. Receive personalized guidance that sets you apart from
          your peers.
        </Hero>
      )}
    </section>
  );
}
