export default function WaecNecoGceElement({ img, addStyle = "", children }) {
  return (
    <div
      className={` absolute ${addStyle}  reponsiveMiniText z-20 flex h-fit gap-[.5rem] rounded-lg bg-white px-[.5rem] shadow-[0_40px_80px_0_rgba(176,176,176,0.25)] `}
    >
      <figure className=" w-[8rem] sm:w-[10rem] md:w-[15rem] lg:w-[20rem]">
        <img className=" w-full" src={img} alt="img" />
      </figure>
      <p className="  ">{children}</p>
    </div>
  );
}
