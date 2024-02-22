function Story({ img, text, name }) {
  return (
    <li className=" relative flex flex-col justify-start items-center w-fit px-[1rem] md:px-[1.5rem] lmd:px-[5.6rem] pt-[5rem] lmobile:pt-[6rem] rounded-3xl h-fit mt-[5rem] py-[5rem] shadow-[0px_20px_40px_0px_rgba(176,176,176,0.25)] ring-1 lmobile:ring-0 ring-[var(--gray)] ">
      <figure className=" absolute top-[-3rem] lmobile:top-[-5rem] right-[50%] translate-x-[50%] h-[6rem] w-[10rem] lmobile:h-[10.5rem] lmobile:w-[10.5rem]">
        <img
          className=" object-contain h-full w-full"
          src={img}
          alt="students"
        />
      </figure>
      <div className=" flex flex-col gap-[2rem] text-center w-[80%]">
        <h2>{text}</h2>
        <div className=" flex justify-between">
          <h2 className=" font-semibold">{`~${name}`}</h2>
          <h2 className=" text-[var(--blue)] cursor-pointer">See more</h2>
        </div>
      </div>
    </li>
  );
}

export default Story;
