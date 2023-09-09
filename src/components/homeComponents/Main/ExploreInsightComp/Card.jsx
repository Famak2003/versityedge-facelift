import Button from "../../../common/Button";

export default function Card({ header, img, children }) {
  return (
    <li className=" flex w-[25rem] flex-col items-center gap-[1rem] overflow-hidden rounded-[1rem] pb-[2rem] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] mobile:rounded-[2rem] md:w-[28rem] lg:w-[35rem]">
      <img className=" w-full object-contain" src={img} alt="img" />
      <article className=" flex flex-col gap-2 text-center mobile:px-[1rem] md:px-[2rem] md:leading-6 lg:leading-8 ">
        <h1 className=" text-[.9rem] font-semibold leading-[1.3rem] lmobile:text-[1.1rem] lmobile:leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.8rem] lg:leading-[2.3rem] ">
          {header}
        </h1>
        <p className=" text-center text-[.7rem] leading-[.9rem] lmobile:text-[.8rem] lmobile:leading-[1.1rem] sm:text-[.9rem] sm:leading-5 md:text-[1rem] md:leading-5 lg:text-[1.3rem] lg:leading-7 xl:text-[1.5rem] xl:leading-8">
          {children}
        </p>
      </article>
      <Button addstyle="self-center text-[#ffff] xs:text-[.5rem] smobile:text-[.7rem] mobile:text-[.8rem] md:text-[1.2rem] lg:text-[1.4rem] btnText xs:py-[.1rem] mobile:py-[.2rem] sm:py-[.5rem] md:py-[.7rem]">
        Read More
      </Button>
    </li>
  );
}
