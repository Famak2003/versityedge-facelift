import ColoredText from "./ColoredText";
import Button from "./Button";

function Hero({
  heroImg,
  btnText = "",
  flipped = false,
  header,
  painHeaderText,
  showBtnMobile = "",
  paint = "",
  children,
}) {
  return (
    <div className=" flex h-fit xs:flex-col mobile:flex-row lg:h-[50rem] ">
      {/* flipped checks to know what layout to render */}
      <figure
        className={` ${
          flipped ? "mobile:order-2 " : "mobile:order-1 "
        } order-2 flex h-[50%] w-[100%] items-center justify-center mobile:order-1 mobile:h-[100%] mobile:w-[50%] `}
      >
        <img className=" h-[100%] " src={heroImg} alt="img" />
      </figure>

      {/* flipped checks to know what layout to render */}
      <div
        className={` ${
          flipped ? "mobile:order-1 " : "mobile:order-2 "
        } order-1 flex flex-grow flex-col justify-center gap-[1rem] mobile:w-[50%]`}
      >
        {header ? (
          <h1 className=" font-extrabold xs:text-[2.5rem] xs:leading-[2.5rem] mobile:pr-0 mobile:text-[1.8rem] mobile:leading-[2rem] lmobile:text-[2rem] lmobile:leading-[2.3rem] sm:text-[2.5rem] sm:leading-[2.5rem] md:text-[2.9rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[5rem] ">
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
        <p className=" heroResponsiveText text-left">{children}</p>
        {btnText ? (
          <Button
            addstyle={`${
              showBtnMobile ? "mobile:hidden block" : ""
            } self-start xs:text-[1rem] smobile:text-[1.2rem] mobile:self-end text-[#ffff] mobile:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] btnText xs:py-0 mobile:py-[.2rem] sm:py-[.5rem] md:py-[.7rem] lg:py-[1rem] `}
          >
            {btnText}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Hero;
