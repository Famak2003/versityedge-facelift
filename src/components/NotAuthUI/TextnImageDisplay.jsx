import WHITEPHONE from "./../../assets/white-border-phone.png";
import DOUBLEARROW from "./../../assets/double-arrow-down.png";
import { Button } from "../common";

function TextnImageDisplay({ content }) {
  return (
    <div className=" flex flex-col lmobile:flex-row justify-between items-center">
      <figure
        className={` ${
          content?.flip ? "lmobile:order-2" : "order-1"
        }  w-full lmobile:w-[50%] sm:w-[45%]`}
      >
        <img src={content.image} alt="upcoming webinar events" />
      </figure>
      <div
        className={` ${
          content?.flip
            ? "lmobile:order-1 lmobile:text-left text-center"
            : "order-2 text-center"
        } flex flex-col w-full lmobile:w-[47%] sm:w-[45%] gap-[2.4rem] `}
      >
        <div className=" flex flex-col gap-[1.6rem]">
          <h1 className=" whitespace-nowrap">{content.header}</h1>
          <p className=" text-[1.6rem] lmobile:text-[2rem] md:text-[2.4rem]">
            {content.text}
          </p>
        </div>
        {content?.type === "customerCare" ? (
          <ul className=" flex flex-col gap-[2rem]">
            {content.callnWhatsappInfo.map((obj, idx) => (
              <li
                key={idx}
                className=" flex flex-col gap-[.5rem] lmobile:gap-[1.4rem]"
              >
                <p className="text-[2.4rem] text-[var(--blue)]">{obj.header}</p>
                <figure className=" flex justify-center lmobile:justify-start items-center gap-[2.5rem]">
                  <img
                    className=" object-contain h-[3rem]"
                    src={obj.icon}
                    alt="mobile phone number"
                  />{" "}
                  <figcaption className=" flex items-center justify-center flex-row gap-[3.2rem] ">
                    <p className="text-[2.4rem]">{obj.number}</p>
                    <Button addstyle=" hidden sm:flex gap-[2rem] w-[10rem] justify-center items-center h-[3.5rem] py-[.7rem] rounded-3xl">
                      <img
                        className=" h-full object-contain"
                        src={WHITEPHONE}
                        alt="call"
                      />
                      <img
                        className=" object-contain h-full rotate-[270deg]"
                        src={DOUBLEARROW}
                        alt="call"
                      />
                    </Button>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <div className=" flex gap-[2.5rem] justify-between lmobile:justify-center items-center">
              <h2 className=" font-semibold">{`Date: ${content.dateData.date}`}</h2>
              <h2 className=" font-semibold">{`Time ${content.dateData.time}`}</h2>
            </div>
            <Button addstyle="text-[var(--white)] rounded-2xl py-[1rem] lmobile:py-[.5rem] text-[1.8rem] w-full lmobile:w-fit self-center">
              {content.btnText}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default TextnImageDisplay;
