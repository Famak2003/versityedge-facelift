// import { Dot } from "./Dot";
import { Dot } from "./Dot";
import { Line } from "./Line";

export default function Hug({
  children,
  header,
  staggered = false,
  img,
  lined = false,
  size = "",
  id = "",
  line = "",
  dot = "",
  dotPosition = "",
}) {
  console.log(id);
  return (
    <>
      {lined && (
        <li
          className={`flex h-fit min-w-[6rem] max-w-[14rem] items-center justify-center mobile:max-w-fit `}
        >
          <div
            className={` ${
              staggered
                ? id === 1 || id === 3
                  ? "w-full mobile:mt-[2rem] sm:mt-[6rem]"
                  : "mt-[1rem] mobile:mt-0"
                : ""
            } relative flex flex-col items-center justify-center`}
          >
            {/* Lines */}
            {line ? <Line line={line} /> : ""}

            {/* Card Content */}
            <figure className=" mb-[.5rem] h-[3rem] mobile:mb-[1.5rem] md:h-[5rem]">
              <img className=" h-full object-contain" src={img} alt="img" />
            </figure>
            <h3 className=" WCVCardHeader text-center mobile:pb-[.5rem] md:pb-[1rem]">
              {header}
            </h3>
            <p className=" reponsiveMiniText1 min-w-fit max-w-[35rem] text-center">
              {children}
            </p>
          </div>
        </li>
      )}
      {dot && (
        <div className=" relative flex w-full flex-col items-center justify-center rounded-3xl bg-white px-[1rem] py-[.4rem] shadow-[0px_10.743005752563477px_21.486011505126953px_0px_rgba(180,180,180,0.25)] mobile:px-[2rem] mobile:py-[.7rem] sm:px-[3rem] sm:py-[1rem] md:gap-[.4rem]">
          <Dot dotPosition={dotPosition} img={img} />
          <figure className=" mb-[.2rem] h-[1.5rem] mobile:mb-[.5rem] sm:h-[2rem]">
            <img className=" h-full object-contain" src={img} alt="img" />
          </figure>
          <h3 className=" text-center text-[.7rem] leading-snug mobile:text-[.9rem] sm:text-[1rem] sm:leading-6 md:text-[1.3rem] md:leading-5 lg:text-[1.6rem]">
            {header}
          </h3>
          <p className="text-center text-[.5rem] leading-3 mobile:text-[.6rem] sm:text-[.8rem] sm:leading-4 md:text-[1rem] md:leading-5 lg:text-[1.1rem]  lg:leading-6">
            {children}
          </p>
        </div>
      )}
    </>
  );
}
