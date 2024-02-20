export default function RatingElement({ header, children }) {
  return (
    <li className=" flex flex-col h-full items-center">
      {/* <figure className=" w-[1.5rem] mobile:w-[2rem] sm:w-[3rem] md:w-[4rem]">
        <img className="w-full" src={img} alt="img" />
      </figure> */}

      <h1 className=" text-[2.4rem] lmobile:text-[3.6rem] font-extrabold ">
        {header}
      </h1>
      <p className=" text-[1.4rem] lmobile:text-[2.4rem] whitespace-nowrap ">
        {children}
      </p>
    </li>
  );
}
