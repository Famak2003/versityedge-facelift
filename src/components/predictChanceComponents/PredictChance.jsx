// import Forms from "./Forms/Forms";
// import Congratulations from "./Congratulations/Congratulations";
import LandingPage from "./LandingPage/LandingPage";

export default function Main() {
  return (
    <div className=" flex w-[100%] flex-col gap-[2rem] mobile:gap-[3rem] md:gap-[5rem] md:text-[1.5rem] md:leading-8">
      <LandingPage />
      {/* <Congratulations /> */}
      {/* <Forms /> */}
    </div>
  );
}
