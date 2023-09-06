import Button from "../common/Button";
import ColoredText from "../common/ColoredText";
import HEROIMG1 from "./../../assets/PredictChance -Hero image.png";

export default function Hero() {
  return (
    <section className=" generalPadding flex h-fit xs:flex-col mobile:flex-row lg:h-[50rem] ">
      <figure className=" order-2 flex h-[50%] w-[100%] items-center justify-center mobile:order-1 mobile:h-[100%] mobile:w-[50%] ">
        <img className=" h-[100%] " src={HEROIMG1} alt="img" />
      </figure>
      <div className=" order-1 flex flex-grow flex-col justify-center gap-[1rem] mobile:order-2  mobile:w-[50%]">
        <h1 className=" text-[2.5rem] font-extrabold leading-[2.6rem] mobile:pr-0 sm:text-[2.5rem] sm:leading-[2.5rem] md:text-[2.9rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[5rem] ">
          <ColoredText
            text={
              "Understand your likelihood of getting admitted into your dream institution"
            }
            colorWords={"dream institution"}
          />
        </h1>
        <p className=" heroResponsiveText text-left">
          VersityEdge’s admission prediction tool takes the guess work out of
          your admission journey by analyzing your academic details and provide
          you with an estimate of your chances of success. It’s like an
          admission expert at your fingertips.
        </p>
        <Button addstyle=" self-start xs:text-[.9rem] smobile:text-[1rem] mobile:self-end py-[.7rem] mobile:py-[1rem] text-[#ffff] ">
          Predict admission
        </Button>
      </div>
    </section>
  );
}
