import { Input } from "antd";
import ColoredText from "../../common/ColoredText";
import APPLE from "./../../../assets/apple.png";
import PLAYSTORE from "./../../../assets/play-store.png";
import NIG from "./../../../assets/flag-nigeria.png";

function StoreButton({ img, text, bg = "black", textClr = "white" }) {
  return (
    <button
      className={` flex gap-[1rem] justify-center items-center text-[var(--${textClr})] h-[5.6rem] rounded-[3rem] py-[.1rem] px-[1.5rem] bg-[var(--${bg})] ring-1 ring-[var(--gray)]`}
    >
      <img className="object-contain h-[2.5rem]" src={img} alt={text} />
      {text}
    </button>
  );
}

function Hero({
  heroImg,
  btnText = "",
  btnPath = "",
  flipped = false,
  header,
  painHeaderText,
  showBtnMobile = "",
  paint = "",
  children,
}) {
  return (
    <div className=" flex h-full xs:flex-col gap-[2rem] lmobile:flex-row justify-center items-center  ">
      {/* flipped checks to know what layout to render */}
      <figure
        className={` ${
          flipped ? "lmobile:order-2 " : "mobile:order-1 "
        } flex h-[50vh] w-full items-center justify-center mobile:order-1 lmobile:h-full lmobile:w-[50%] `}
      >
        <img className=" h-full object-contain " src={heroImg} alt="img" />
      </figure>

      {/* flipped checks to know what layout to render */}
      <div
        className={` ${
          flipped ? "lmobile:order-1 " : "mobile:order-2 "
        } order-1 flex flex-grow flex-col justify-center gap-[2rem] lmobile:w-[50%] text-center lmobile:text-left `}
      >
        <div>
          {header ? (
            <h1 className=" font-extrabold text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.8rem] ">
              {painHeaderText ? (
                <ColoredText
                  text={header}
                  color={paint}
                  colorWords={painHeaderText}
                />
              ) : (
                header
              )}
            </h1>
          ) : (
            ""
          )}
          <p className=" text-[1.6rem] lmobile:text-[2rem] ">{children}</p>
        </div>
        <div className=" flex flex-col gap-[1rem] lmobile:gap-[2rem] text-[1.8rem]">
          <form className=" flex gap-[2rem] h-[5rem]">
            <label
              htmlFor="phone"
              className=" flex gap-[1rem] justify-center items-center h-full w-fit px-[1rem] rounded-3xl ring-1 ring-[var(--gray)]"
            >
              <img className=" h-[3rem]" src={NIG} alt="+234" />
              <p className="text-[1.8rem]">+234</p>
            </label>
            <Input
              placeholder="Phone number"
              name="phone"
              className=" outline-none text-[1.8rem] rounded-3xl h-full ring-1 ring-[var(--gray)] w-[70%] "
            />
          </form>
          <button className="  flex justify-center w-full h-[5rem] items-center text-[var(--white)] bg-[var(--blue)] rounded-3xl">
            Sign up
          </button>
          <div className=" flex gap-[3rem] justify-start">
            <StoreButton
              img={PLAYSTORE}
              text={"Google Play"}
              bg={"white"}
              textClr={"black"}
            />
            <StoreButton
              img={APPLE}
              bg={"black"}
              textClr={"white"}
              text={"Apple Store"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
