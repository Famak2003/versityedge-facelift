import { Button } from "../common";

function NewCard({ img, header, text, btnText, headerWrap = false }) {
  return (
    <li className=" overflow-hidden flex flex-col gap-[2rem] justify-start items-center h-[28rem] mobile:h-[42.1rem] w-[28rem] mobile:w-[36.3rem] rounded-3xl shadow-[0px_20px_40px_0px_rgba(176,176,176,0.15)]">
      <figure className=" h-[45%] w-full">
        <img className=" h-full w-full object-cover" src={img} alt="img" />
      </figure>
      <figcaption className=" flex justify-center items-center flex-col gap-[2rem] text-center w-[85%] mobile:w-[90%] lmobile:w-[80%]">
        {headerWrap ? (
          <h2 className=" font-bold">{header}</h2>
        ) : (
          <h1 className=" text-[2rem] mobile:text-[3rem] whitespace-nowrap">
            {header}
          </h1>
        )}
        {text && (
          <p className="  text-[1.4rem] mobile:text-[2rem] leading-10 ">
            {text}
          </p>
        )}
        {btnText && (
          <Button addstyle=" text-[var(--white)] rounded-2xl py-[.5rem] text-[1.8rem] ">
            {btnText}
          </Button>
        )}
      </figcaption>
    </li>
  );
}

export default NewCard;
