import Button from "./Button";

export default function Card({
  header,
  img,
  children,
  universityCard,
  normal,
}) {
  return (
    <>
      {normal && (
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
      )}
      {universityCard && (
        <li className=" flex w-[25rem] flex-col items-center gap-[1rem] overflow-hidden rounded-[1rem] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] ring-1 ring-[var(--light-grey-texture)] mobile:rounded-[2rem] md:w-[28rem] lg:w-[35rem]">
          <figure className="flex h-[60%] w-full items-center justify-center md:pt-[2rem] ">
            <img
              className=" h-full scale-[75%] object-contain sm:scale-[80%] md:scale-90 lg:scale-100"
              src={img}
              alt="img"
            />
          </figure>
          <h2 className="Text24px self-center font-bold">{header}</h2>

          <article className=" flex h-[30%] w-full flex-col justify-center gap-2 bg-[var(--blue-texture)] text-center ring-1 mobile:px-[1rem] md:px-[2rem] md:leading-6 lg:leading-8 ">
            <ul className=" list-disc px-[8%] text-[var(--white-texture)]">
              {children.map((text, index) => (
                <li
                  key={index}
                  className=" lg:Text16px text-left text-[1rem] leading-5 sm:text-[1.2rem] sm:leading-6"
                >
                  {text}
                </li>
              ))}
            </ul>
          </article>
        </li>
      )}
    </>
  );
}
