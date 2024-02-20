import ColoredText from "./../../../components/common/ColoredText";
import HEROIMG from "./../../../assets/contactUs-Hero-img.png";
import LOGO from "./../../../assets/versityedge-Large-Logo.png";
import Xarrow from "react-xarrows";

const cards = [
  {
    header: "Have a Qestion? we're Here to Help!",
    content:
      "Whether you need clarification on admission requirements, study resources, or application processes, our team is ready to provide the answers you need. Reach out to us for expert guidance and support.",
    id: "LINE1",
  },
  {
    header: "Need Technical Support? We're Here for you",
    content:
      "Encountering issues with our platform or need help navigating our resources? Don't hesitate to contact our technical support team. We're dedicated to ensuring your smooth experience.",
    id: "LINE2",
  },
  {
    header: "Seeking Personalized Guidiance? Contact Us",
    content:
      "If you're looking for tailored advice on your admission journey, feel free to get in touch. Our experts are here to offer mentorship, study plans, and insights to help you achieve your admission goals.",
    id: "LINE3",
  },
];

export default function HeroComp() {
  // useEffect(function () {

  // }, []);
  return (
    <section className=" mobile:generalPadding relative flex h-fit justify-between">
      {/* Left */}
      <div className="left flex w-full items-start mobile:w-[40%] ">
        <figure className=" heroImg flex h-[90%] w-full items-center justify-center mobile:relative mobile:block mobile:h-full">
          <img
            className=" h-full scale-[90%] object-contain lg:translate-x-[10%] "
            src={HEROIMG}
            alt="img"
          />

          {/* Logo */}
          <figure
            className=" absolute bottom-0 right-0 flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-white shadow-[0px_10.743005752563477px_21.486011505126953px_0px_rgba(180,180,180,0.25)] smobile:h-[7rem] smobile:w-[7rem] mobile:right-[-1rem]
          mobile:top-[40%] lmobile:right-[-6rem] lmobile:h-[9rem] lmobile:w-[9rem] sm:right-[-7rem]
          sm:h-[10rem] sm:w-[10rem] md:h-[12rem] md:w-[12rem] lg:right-[-12rem] lg:h-[15rem] lg:w-[15rem] xl:right-[-11rem] xl:h-[19rem] xl:w-[19rem] 2xl:h-[20rem] 2xl:w-[20rem]
         "
            id="logo"
          >
            <img
              className=" scale-[50%] mobile:scale-[60%] sm:scale-[80%] md:scale-[90%] lg:scale-100"
              src={LOGO}
              alt="VersityEdge"
            />
          </figure>
        </figure>
      </div>

      {/* Lines */}
      {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
        <Xarrow
          key={`line${num}`}
          style
          start={"logo"}
          end={`LINE${num}`}
          showHead={false}
          zIndex={2}
          strokeWidth={1}
          dashness={true}
          color={"#CDCDCE"}
        />
      ))}

      {/* Right */}
      <ul className="right absolute flex w-full flex-col justify-between gap-5 xs:h-full mobile:relative mobile:max-h-[50rem] mobile:min-h-[20rem] mobile:w-[45%]">
        {cards.map((card, index) => {
          return (
            <li
              key={card.id}
              style={{ zIndex: `${index + 1}`, position: "relative" }}
              className={` h-fit w-[60%] rounded-[1rem] bg-[#FFFFFF] px-[.8rem] py-[.6rem] shadow-[0_20px_30px_0_rgba(176,176,176,0.25)] ring-1 ring-[#EFF1F3] mobile:max-w-[70%] mobile:px-[1rem]
                 mobile:py-[.8rem] lmobile:px-[1.5rem] lmobile:py-[1rem] sm:rounded-[2rem] sm:px-[2rem] sm:py-[1rem] lg:px-[3rem] lg:py-[3rem] 
                ${
                  index === 0
                    ? " translate-x-[0] mobile:translate-x-[50%] sm:translate-x-[3rem] md:translate-x-[4rem] lg:translate-x-[5rem] xl:translate-x-[7rem]"
                    : index === 1
                    ? " translate-x-[65%] mobile:translate-x-0 "
                    : index === 2
                    ? " translate-x-[0] mobile:translate-x-[6rem] sm:translate-x-[8rem] md:translate-x-[10rem] lg:translate-x-[14rem] xl:translate-x-[16rem]"
                    : ""
                }`}
              id={card.id}
            >
              <h3 className=" pb-2 text-center text-[1rem] leading-4 smobile:text-[1.2rem] smobile:leading-6 mobile:pb-0 mobile:text-[.7rem]  mobile:leading-3 lmobile:text-[.9rem] lmobile:leading-4 sm:text-[1rem] sm:leading-5 md:text-[1.2rem] md:leading-5 lg:text-[1.5rem] lg:leading-7 ">
                {<ColoredText text={card.header} colorWords={card.header} />}
              </h3>
              <p className=" text-center text-[.75rem] leading-4 duration-300 xs:active:text-[.55rem] xs:active:leading-[.6rem] smobile:text-[1rem] smobile:leading-[1.3rem] mobile:text-[.5rem] mobile:leading-[.6rem] mobile:hover:text-[.7rem] mobile:hover:leading-3 lmobile:text-[.6rem] lmobile:leading-[.7rem] sm:text-[.7rem] sm:leading-[.8rem] sm:hover:text-[.8rem] sm:hover:leading-4 md:pt-2 md:text-[.8rem] md:leading-4 md:hover:text-[1rem] md:hover:leading-5 lg:text-[1rem] lg:leading-5 lg:hover:text-[1.2rem] lg:hover:leading-6">
                {card.content}
              </p>
            </li>
          );
        })}
      </ul>

      {/* <ul className="right absolute flex max-h-[50rem] min-h-[18rem] w-full flex-col justify-between ring-1 mobile:relative mobile:w-[45%]">
        {cards.map((card, index) => {
          return (
            <li
              key={card.id}
              style={{ zIndex: `${index + 1}` }}
              className={` max-w-[70%] rounded-[1rem] bg-[#FFFFFF] px-[.8rem] py-[.6rem] shadow-[0_20px_30px_0_rgba(176,176,176,0.25)] ring-1 ring-[#EFF1F3] mobile:px-[1rem]
                 mobile:py-[.8rem] lmobile:px-[1.5rem] lmobile:py-[1rem] sm:rounded-[2rem] sm:px-[2rem] sm:py-[1rem] lg:px-[3rem] lg:py-[3rem] 
                ${
                  index === 0
                    ? " translate-x-0 mobile:translate-x-[2rem] sm:translate-x-[3rem] md:translate-x-[4rem] lg:translate-x-[5rem] xl:translate-x-[7rem]"
                    : index === 1
                    ? " translate-x-[45%]  mobile:translate-x-[10%] "
                    : index === 2
                    ? " translate-x-[5rem] mobile:translate-x-[6rem] sm:translate-x-[8rem] md:translate-x-[10rem] lg:translate-x-[14rem] xl:translate-x-[16rem]"
                    : ""
                }`}
              id={card.id}
            >
              <h3 className=" text-[.62rem] leading-3  mobile:text-[.7rem] lmobile:text-[.9rem] lmobile:leading-4 sm:text-[1rem] sm:leading-5 md:text-[1.2rem] md:leading-5 lg:text-[1.5rem] lg:leading-7 ">
                {<ColoredText text={card.header} colorWords={card.header} />}
              </h3>
              <p className=" text-[.45rem] leading-[.5rem] duration-300 xs:active:text-[.55rem] xs:active:leading-[.6rem] mobile:text-[.5rem] mobile:leading-[.6rem] mobile:hover:text-[.7rem] mobile:hover:leading-3 lmobile:text-[.6rem] lmobile:leading-[.7rem] sm:text-[.7rem] sm:leading-[.8rem] sm:hover:text-[.8rem] sm:hover:leading-4 md:pt-2 md:text-[.8rem] md:leading-4 md:hover:text-[1rem] md:hover:leading-5 lg:text-[1rem] lg:leading-5 lg:hover:text-[1.2rem] lg:hover:leading-6">
                {card.content}
              </p>
            </li>
          );
        })}
      </ul> */}
    </section>
  );
}
