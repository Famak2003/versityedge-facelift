import IMG from "./../../../assets/CongratulationsHero-image.png";
import Hero from "./../../../components/common/Hero";

function HeroComp() {
  return (
    <section className="generalPadding">
      <Hero
        header={"Congratulations!"}
        painHeaderText={"Congratulations!"}
        paint={["#0a66c2"]}
        heroImg={IMG}
      >
        Based on the data you've provided, our advanced algorithm has calculated
        your admission chances for your desired course at various tertiary
        institutions. Please note that these predictions are based on the
        information you've provided and historical admission data. Keep in mind
        that admission decisions can be influenced by various factors, and these
        predictions are intended to give you an estimate of your chances.
      </Hero>
    </section>
  );
}

export default HeroComp;
