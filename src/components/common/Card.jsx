import Button from "./Button";

export default function Card({ header, img, children, type }) {
  // console.log(children);
  switch (type) {
    case "universityCard":
      return (
        <li className=" flex h-[fit] w-[27.65%] flex-col items-center justify-between overflow-hidden rounded-[7%] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] ring-1 ring-[var(--light-grey-texture)] lg:w-[27%]">
          <figure className="flex h-[60%] w-full items-center justify-center md:pt-[2rem] ">
            <img
              className=" h-full scale-[75%] object-contain sm:scale-[80%] md:scale-90 lg:scale-100"
              src={img}
              alt="img"
            />
          </figure>
          <h2 className="h-[10%] self-center whitespace-nowrap px-[1rem] text-[.8rem] font-bold mobile:text-[.9rem] lmobile:text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2rem]">
            {header}
          </h2>

          <article className=" flex h-fit w-full flex-col justify-center gap-2 bg-[var(--blue-texture)] px-[1rem] text-center ring-1 md:px-[2rem] md:leading-6 lg:leading-8 ">
            <ul className=" list-disc px-[8%] text-[var(--white-texture)]">
              {children.map((text, index) => (
                <li
                  key={index}
                  className=" mobile:Text16px text-left text-[.6rem] leading-3"
                >
                  {text}
                </li>
              ))}
            </ul>
          </article>
        </li>
      );
    case "institution":
      return (
        <li className=" flex h-[16rem] w-[27%] min-w-[16rem] flex-col items-center overflow-hidden rounded-[7%] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] ring-1 ring-[var(--light-grey-texture)] mobile:h-[20rem] lmobile:h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
          <figure className="relative flex h-[65%] w-full items-center justify-center ">
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src={img}
              alt="img"
            />
            <h2 className="Text24px absolute bottom-0 left-[50%] translate-x-[-50%] self-center whitespace-nowrap font-bold text-[var(--white-texture)]">
              {header}
            </h2>
          </figure>

          <article className=" flex h-[35%] w-full flex-col justify-center gap-2 bg-[var(--blue-texture)] pl-[.8rem] text-center ring-1 mobile:pl-[1rem] md:pl-[2rem] md:leading-6 lg:leading-8 ">
            <ul className=" list-disc px-[8%] text-[var(--white-texture)]">
              {children.map((text, index) => (
                <li key={index} className=" Text16px text-left">
                  {text}
                </li>
              ))}
            </ul>
          </article>
        </li>
      );

    default:
      return (
        <li className=" flex w-[25rem] flex-col items-center gap-[1rem] overflow-hidden rounded-[1rem] pb-[2rem] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] mobile:rounded-[2rem] md:w-[28rem] lg:w-[35rem]">
          <figure className="relative">
            <img className=" w-full object-contain" src={img} alt="img" />
          </figure>

          <article className=" flex flex-col gap-2 text-center mobile:px-[1rem] md:px-[2rem] md:leading-6 lg:leading-8 ">
            <h2 className=" text-[.9rem] font-semibold leading-[1.3rem] lmobile:text-[1.1rem] lmobile:leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.8rem] lg:leading-[2.3rem] ">
              {header}
            </h2>

            <p className=" Text16px text-center">{children}</p>
          </article>

          <Button addstyle="self-center text-[#ffff] xs:text-[.5rem] smobile:text-[.7rem] mobile:text-[.8rem] md:text-[1.2rem] lg:text-[1.4rem] btnText xs:py-[.1rem] mobile:py-[.2rem] sm:py-[.5rem] md:py-[.7rem]">
            Read More
          </Button>
        </li>
      );
  }
}
