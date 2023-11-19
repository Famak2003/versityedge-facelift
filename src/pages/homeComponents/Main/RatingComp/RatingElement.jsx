export default function RatingElement({ img, header, children }) {
  return (
    <li className="flex h-full items-center gap-[.75rem]">
      <figure className=" w-[1.5rem] mobile:w-[2rem] sm:w-[3rem] md:w-[4rem]">
        <img className="w-full" src={img} alt="img" />
      </figure>
      <div className="flex flex-col">
        <h1 className=" SliderResponsiveHeader font-extrabold ">{header}</h1>
        <p className=" KYCResponsiveText">{children}</p>
      </div>
    </li>
  );
}
