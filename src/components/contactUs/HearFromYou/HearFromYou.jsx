import "./HearFromYou.css";
import Hug from "../../common/Hug/Hug";
import IMG1 from "./../../../assets/Ellipse26.png";
import IMG2 from "./../../../assets/Ellipse28.png";
import IMG3 from "./../../../assets/Ellipse27.png";
import IMG4 from "./../../../assets/Ellipse29.png";

const cards = [
  {
    img: IMG1,
    header: "~Muhammed Ali",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
    dotPosition: "LeftBottom",
  },
  {
    img: IMG2,
    header: "~kora swane",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
    dotPosition: "RightBottom",
  },
  {
    img: IMG3,
    header: "~Koffu Cheng",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
    dotPosition: "LeftBottom",
  },
  {
    img: IMG4,
    header: "~Alice White",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
    dotPosition: "LeftBottom",
  },
];

function HearFromYou() {
  return (
    <section className=" hearFromYou generalPadding flex h-[40rem] flex-col justify-between gap-[1rem] py-[3rem] sm:h-[50rem] md:h-[60rem] md:gap-[2rem] lg:h-[80rem] ">
      <div className="flex flex-col items-center gap-3 md:gap-[2rem]">
        <h1 className="responsiveHeader text-center font-bold">
          We Would Love To Hear From You
        </h1>
        <h3 className="SliderResponsiveHeader">
          We have offices and teams all over Africa
        </h3>
      </div>
      <div className=" flex h-full w-full justify-center  ">
        <div className="relative flex h-full w-full items-center justify-center  ">
          {cards.map((card, index) => {
            return (
              <div
                // style={{ top: `${index}rem` }}
                key={index}
                className={`absolute w-[10rem] rounded-3xl bg-white mobile:w-[11rem] sm:w-[14rem] md:w-[16rem] lg:w-[18rem]
                 ${index === 0 && "left-[52%] top-0"} ${
                  index === 1 &&
                  " left-[7%] top-[12%] mobile:left-[15%] lmobile:left-[22%] sm:left-[20%] md:left-[25%]"
                } ${
                  index === 2 &&
                  " right-[12%] top-[6rem] translate-x-[50%] ring-1 smobile:right-[10%] mobile:right-[10%] sm:right-[12%] md:right-[12%] Lmd:right-[16%] lg:right-[18%] xl:right-[20%] Lxl:right-[25%]"
                } ${
                  index === 3 &&
                  "bottom-[34%] right-0 smobile:right-[6%] mobile:right-[10%] lmobile:right-[20%] lg:right-[23%]"
                }`}
              >
                <Hug
                  header={card.header}
                  img={card.img}
                  bg={true}
                  dot={true}
                  dotPosition={card.dotPosition}
                >
                  {card.body}
                </Hug>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HearFromYou;
