export default function TeamImg({ img, name, idx }) {
  return (
    <figure
      className={`flex h-full flex-col items-center xs:gap-[.5rem] mobile:gap-[1rem] ${
        idx === 1 ? "pt-[8%]" : ""
      } ${idx === 2 ? "pt-[15%]" : ""} `}
    >
      <img src={img} alt="Team Img" className=" object-contain" />
      <figcaption className="KYCResponsiveText">{name}</figcaption>
    </figure>
  );
}
