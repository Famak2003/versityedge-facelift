import Button from "../common/Button";
import HEROIMG1 from "./../../assets/LoginHeroImage.png";

export default function Hero() {
  return (
    <section className=" generalPadding flex h-fit xs:flex-col mobile:flex-row lg:h-[50rem] ">
      <div className=" flex flex-grow flex-col justify-center gap-[1rem]  mobile:w-[50%]">
        <h1 className=" text-[2.5rem] font-extrabold leading-[2.6rem] mobile:pr-0 sm:text-[2.5rem] sm:leading-[2.5rem] md:text-[2.9rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[5rem] ">
          Say <span className=" text-[#0A66C2]">Goodbye</span> to Admission{" "}
          <span className=" text-[#FFCB21]">Faliure!</span>
        </h1>
        <p className=" heroResponsiveText text-left">
          At VersityEdge, we understand the challenges you face in navigating
          the complex admission process. The lack of personalized mentorship and
          guidance can be daunting, leaving you uncertain about the right path
          to take. But fear not – we are here to empower you with the solutions
          you need!
        </p>
        <Button addstyle="self-start block mobile:hidden text-[#ffff] xs:text-[.9rem] smobile:text-[1rem] xs:py-[.3rem]">
          Sign up
        </Button>
      </div>
      <figure className=" flex h-[50%] w-[100%] items-center justify-center mobile:h-[100%] mobile:w-[50%] ">
        <img className=" h-[100%] " src={HEROIMG1} alt="img" />
      </figure>
    </section>
  );
}
