function Story({ img, text, name }) {
  return (
    <li className=" relative flex flex-col justify-start items-center w-fit px-[5.6rem] pt-[6rem] rounded-3xl h-fit mt-[5rem] py-[3rem] shadow-[0px_20px_40px_0px_rgba(176,176,176,0.25)] ">
      <figure className=" absolute top-[-5rem] right-[50%] translate-x-[50%] h-[10.5rem] w-[10.5rem]">
        <img
          className=" object-contain h-full w-full"
          src={img}
          alt="students"
        />
      </figure>
      <div className=" text-center w-[39rem]">
        <p>{text}</p>
        <div className=" flex justify-between">
          <h2 className=" font-semibold">{`~${name}`}</h2>
          <h2 className=" text-[var(--blue)] cursor-pointer">See more</h2>
        </div>
      </div>
    </li>
  );
}

export default Story;
