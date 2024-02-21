import { Button } from "../../../../components/common";
import IMG from "./../../../../assets/Customer care.png";

function CheckForFree() {
  return (
    <section className=" flex flex-col lmobile:flex-row items-center gap-[2.4rem] lmobile:gap-[1.7rem] generalPadding py-[7rem] px-[3rem] sm:px-[8.5rem]">
      <div className=" flex flex-col gap-[2rem] lmobile:gap-5 w-full lmobile:w-[60%] order-2 lmobile:order-1 ">
        <h1 className=" text-center lmobile:text-left font-bold">
          Thousands of students do not secure admission due to wrong
          combinations. Don't guess; check your admission requirements for free.
        </h1>
        <Button addstyle=" w-full lmobile:w-fit text-[var(--white)] rounded-3xl py-[1rem] text-[1.8rem] ">
          Check for free
        </Button>
      </div>

      <figure className=" order-1 lmobile:order-2 w-full lmobile:w-[35%] h-[20rem] mobile:h-[30rem] lmobile:h-[37rem]">
        <img className="w-full h-full object-contain" src={IMG} alt="img" />
      </figure>
    </section>
  );
}

export default CheckForFree;
