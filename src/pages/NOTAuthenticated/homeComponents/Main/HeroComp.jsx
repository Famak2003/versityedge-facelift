// import Button from "./../../common/Button";
import { useSelector } from "react-redux";
import HEROIMG1 from "./../../../../assets/Hero Image.png";
import Hero from "../../../../components/NotAuthUI/Hero/Hero";

export default function HeroComp() {
  const isUserLoggedin = useSelector((state) => state.auth.user);
  // const userInfo = useSelector((state) => state.auth.userInfo);
  // console.log(userInfo);

  return (
    <section className=" generalPadding mb-[2rem] flex h-fit xs:flex-col mobile:flex-row lmobile:mb-[3rem] md:mb-[5rem] lg:h-[60vh] ">
      {isUserLoggedin ? (
        <Hero
          header={
            "Admission journey is overwhelming, we make it simple and fun"
          }
          heroImg={HEROIMG1}
          paint={["#0A66C2", "#FFCB21"]}
          painHeaderText={"journey simple"}
        >
          Attend daily live classes, receive study materials, clarify your
          doubts, and do mock tests to identify your strengths and pinpoint your
          weaknesses. Receive personalized guidance that sets you apart from
          your peers.
        </Hero>
      ) : (
        <Hero
          header={"Secure Admission to Study your Desired Course."}
          heroImg={HEROIMG1}
          flipped={true}
          paint={["#0A66C2", "#FFCB21"]}
          btnText="Sign up"
          btnPath="/auth"
          // showBtnMobile={true}
          painHeaderText={"Admission Desired"}
        >
          Attend daily live classes from wherever you are and be part of the top
          1% who secure admission at your institution of choice.
        </Hero>
      )}
    </section>
  );
}
