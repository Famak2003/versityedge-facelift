export default function Hug({
  children,
  header,
  staggered = false,
  img,
  id,
  line,
}) {
  return (
    <li className=" flex h-fit min-w-[6rem] max-w-[14rem] items-center justify-center mobile:max-w-fit ">
      <div
        className={`${
          staggered
            ? id === 1 || id === 3
              ? "w-full mobile:mt-[2rem] md:mt-[3rem]"
              : "mt-[1rem] mobile:mt-0"
            : ""
        } relative flex flex-col items-center justify-center`}
      >
        {/* Lines */}
        {line ? (
          <img
            src={line}
            alt="connection"
            className="absolute right-0 top-[2%] hidden translate-x-[55%] mobile:inline-block mobile:scale-[78%] sm:scale-[80%] md:scale-[81%] lg:scale-[83%] semiLarge:scale-[85%] Lxl:scale-[90%]"
          />
        ) : (
          ""
        )}

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
  );
}
