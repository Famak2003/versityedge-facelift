export default function WhyChooseVersityEdgeElements({
  children,
  header,
  img,
  num,
}) {
  return (
    <li className="flex h-fit w-fit items-center justify-center ">
      <div
        className={`${
          num === 1 || num === 3
            ? "w-full mobile:mt-[2rem] md:mt-[3rem]"
            : "mt-[1rem] mobile:mt-0"
        } flex flex-col items-center justify-center`}
      >
        <figure className=" mb-[.5rem] h-[3rem] mobile:mb-[1.5rem] md:h-[5rem]">
          <img className=" h-full object-contain" src={img} alt="img" />
        </figure>
        <h3 className=" WCVCardHeader text-center mobile:pb-[.5rem] md:pb-[1rem]">
          {header}
        </h3>
        <p className=" reponsiveMiniText1 text-center">{children}</p>
      </div>
    </li>
  );
}
