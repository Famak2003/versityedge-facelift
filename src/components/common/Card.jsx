import Button from "./Button";

export default function Card({ header, img, children, type }) {
  // console.log(children);
  switch (type) {
    case "universityCard":
      return (
        <li className=" flex h-[18rem] w-[18rem] flex-col items-center justify-between overflow-hidden rounded-[7%] pt-[.5rem] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] ring-1 ring-[var(--light-grey-texture)] mobile:h-[20rem] mobile:w-[20rem] lmobile:h-[24rem] sm:h-[26rem] sm:w-[28rem] md:h-[29rem] md:pt-[1rem] lg:h-[35rem] lg:w-[33rem]">
          <figure className="flex h-[60%] w-full items-center justify-center ">
            <img
              style={{
                height: "100%",
                width: "100%",
                // objectFit: "center",
              }}
              className=" h-full scale-[75%] object-contain sm:scale-[80%] md:scale-90 lg:scale-100"
              src={img}
              alt="img"
            />
          </figure>
          <h2 className=" mobile:Text24px self-center whitespace-nowrap px-[1rem] font-bold ">
            {header}
          </h2>

          <article className=" flex h-fit w-full flex-col justify-center gap-2 bg-[var(--blue-texture)] px-[1rem] py-[1rem] text-center ring-1 md:px-[2rem] md:leading-6 lg:leading-8 ">
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
        <li className=" flex h-[18rem] w-[18rem] flex-col items-center justify-between overflow-hidden rounded-[7%] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] ring-1 ring-[var(--light-grey-texture)] mobile:h-[20rem] mobile:w-[20rem] lmobile:h-[24rem] sm:h-[26rem] sm:w-[28rem] md:h-[29rem] lg:h-[35rem] lg:w-[33rem]">
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
            <h2 className="mobile:Text24px absolute bottom-2 left-[50%] translate-x-[-50%] self-center whitespace-nowrap font-bold text-[var(--white-texture)] md:bottom-4">
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
        <li className=" flex min-w-[18rem] max-w-[35rem] flex-col items-center gap-[1rem] overflow-hidden rounded-[1rem] pb-[2rem] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] mobile:rounded-[2rem]">
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
