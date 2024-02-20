import Hero from "./../../components/common/Hero";

import IMG from "./../../assets/Logowithripple.png";

function HeroComp() {
  return (
    <section className="generalPadding">
      <Hero
        header={
          <p>
            {" "}
            <span className=" text-[var(--blue)]"> Versity</span>
            <span className=" text-[var(--yellow)]">Edge's</span> innovation
          </p>
        }
        heroImg={IMG}
        flipped={true}
      >
        focuses on a simple admissions journey, emphasizing visibility,
        convenience and intuitive product use.At VersityEdge, we understand the
        challenges you face in navigating the complex admission process. The
        lack of personalized mentorship and guidance can be daunting, leaving
        you uncertain about the right path to take. But fear not – we are here
        to empower you with the solutions you need!
      </Hero>
    </section>
  );
}

export default HeroComp;
