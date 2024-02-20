import "./TeamImg.css";
export default function TeamImg({ img, name, title, experience, idx }) {
  return (
    <figure
      className={`flex h-full w-[18%] flex-col items-center xs:gap-[.5rem] mobile:gap-[1rem] ${
        idx === 1 ? "mt-[8%]" : ""
      } ${idx === 2 ? "mt-[15%]" : ""} `}
    >
      <div className=" h-[8rem] w-full overflow-hidden rounded-3xl smobile:h-[11rem] mobile:h-[14rem] lmobile:h-[17rem] sm:h-[22rem] md:h-[27rem] lg:h-[35.4rem]">
        <img src={img} alt="Team Img" className=" h-full object-cover " />
      </div>
      <figcaption className=" KYCResponsiveText">
        <h2 className=" font-bold text-[var(--blue)]">{title}</h2>
        <h3 className=" font-bold">{name}</h3>
        <small className=" Truncate ">{experience}</small>
      </figcaption>
    </figure>
  );
}
