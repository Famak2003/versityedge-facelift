export function Thumbnail({ obj }) {
  return (
    <figure className=" w-[7rem] lmobile:w-[8rem] sm:w-[10rem] md:w-[12rem]">
      <img className=" w-full object-contain" src={obj.img} alt="team member" />
      <figcaption className="flex flex-col md:gap-[.5rem]">
        <h3 className="heroResponsiveText text-left font-bold">{obj.name}</h3>
        <p className="Text16px">{obj.position}</p>
      </figcaption>
    </figure>
  );
}
