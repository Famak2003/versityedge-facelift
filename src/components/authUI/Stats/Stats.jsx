import "./Stats.css";

function Stats({ obj, num, mobile = false }) {
  return (
    <li
      className={` ${
        mobile ? "w-full absolute" : " min-w-[17rem] max-w-[26.7rem] relative"
      } ${
        num === 1
          ? "z-[1] top-[0rem]"
          : num === 2
          ? "z-[2] top-[2.4rem]"
          : num === 3
          ? "z-[3] top-[4.8em]"
          : ""
      } bg-[var(--white)] h-[14rem] mobile:h-[20rem] gap-[2rem] lmobile:gap-0 md:h-[22.4rem] overflow-hidden flex flex-row lmobile:flex-col justify-between ring-1 pt-[2rem] mobile:pt-[4rem] pb-[.8rem] lmobile:pb-[2rem] px-[2rem] ring-[var(--lightgray)] rounded-3xl lmobile:rounded-2xl shadow-[0px_20px_40px_0px_rgba(180,180,180,0.25)]`}
    >
      <div className=" flex flex-col justify-between h-[9rem] mobile:h-[10.6rem] md:h-[13rem] w-[78%] lmobile:w-fit">
        <div className=" flex gap-[1.5rem] md:gap-[1.7rem] items-center">
          <figure className=" hidden lmobile:inline-block min-h-[3rem] h-[3.6rem] min-w-[2.8rem] w-[3.1rem]">
            <img
              className="object-contain h-full"
              src={obj.image}
              alt="stats"
            />
          </figure>
          <h3 className=" text-[2rem] lmobile:text-[1.4rem] sm:text-[1.6rem] text-[var(--blue)] font-semibold md:whitespace-nowrap">
            {obj.title}
          </h3>
        </div>
        <h1 className=" text-[2rem] lmobile:text-[2.6rem] sm:text-[3rem] whitespace-nowrap lmd:text-[3.6rem] font-semibold">
          {obj.examType}
        </h1>

        <div className=" text-[1.2rem] text-[var(--gray)] flex justify-between ">
          <p className=" whitespace-nowrap">{obj.questions.length} Questions</p>
          <p className=" whitespace-nowrap">{obj.time} Minutes</p>
        </div>
      </div>
      <div className=" flex flex-col justify-between w-[12rem] items-center lmobile:h-[2rem] h-full lmobile:items-end pt-[1rem] lmobile:pt-0 lmobile:pr-0">
        <figure className=" flex justify-center items-center lmobile:hidden h-[6.8rem] w-[6.5rem] shadow-[0px_10px_20px_0px_rgba(176,176,176,0.25)] rounded-full">
          <img className="object-contain h-[75%]" src={obj.image} alt="stats" />
        </figure>
        <button className=" text-[1.4rem] font-bold whitespace-nowrap lmobile:text-[1.2rem] text-[var(--blue)] lmobile:font-semibold">
          Register Now
        </button>
      </div>
      {/* // edge design // */}
      <div
        style={{ background: obj.color }}
        className={` absolute top-0 left-0 w-[2rem] h-[2rem]`}
      />
      <div
        style={{ background: obj.color }}
        className=" absolute bottom-0 right-0 w-[2rem] h-[2rem] bg-['#0F0F0F']"
      />
    </li>
  );
}

export default Stats;
