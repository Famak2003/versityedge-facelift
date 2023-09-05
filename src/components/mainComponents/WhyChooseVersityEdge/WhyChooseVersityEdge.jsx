import FRAME1 from "./../../../assets/Frame3.png";
import FRAME2 from "./../../../assets/Frame5.png";
import FRAME3 from "./../../../assets/Frame4.png";
import FRAME4 from "./../../../assets/Frame6.png";

import LINE1 from "./../../../assets/Line1.png";
import LINE2 from "./../../../assets/Line2.png";
import LINE3 from "./../../../assets/Line3.png";

import LINE4 from "./../../../assets/mobileLine1.png";
import LINE5 from "./../../../assets/mobileLine2.png";
import LINE6 from "./../../../assets/mobileLine3.png";
import WhyChooseVersityEdgeElements from "./WhyChooseVersityEdgeElements";

const lines = [LINE1, LINE2, LINE3];

const text = [
  {
    header: "Personalized Guidance",
    img: FRAME1,
    wirteup:
      "Our AI-powered personalized guidance is designed to lead you towards your dream institution.",
  },

  {
    header: "Access to Resources, Anytime",
    img: FRAME2,
    wirteup:
      "Gain unlimited access to institution-specific resources that will elevate your preparation journey. ",
  },

  {
    header: "A support System that Never Sleeps",
    img: FRAME3,
    wirteup:
      "We know that the admission journey can be overwhelming, and doubts can creep in at any hour. With VersityEdge's 24/7 support, you'll never feel alone.",
  },

  {
    header: "Predictive admissions",
    img: FRAME4,
    wirteup:
      "Wondering about your chances of acceptance? Predict your chance of admission anytime.",
  },
];

export default function WhyChooseVersityEdge() {
  return (
    <section className=" bg-[#F8FBFF] py-[3rem]">
      <article className=" generalPadding flex flex-col items-center justify-center gap-[3rem] mobile:gap-[6rem] mobile:py-4 md:py-7">
        <div className=" flex flex-col items-center justify-center gap-[1rem]">
          <h1 className=" responsiveHeader font-extrabold">
            Why Choose VersityEdge?
          </h1>
          <p className="responsiveText text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            cupiditate vitae, deleniti laudantium esse tempore? Quae quibusdam
            veniam consequatur recusandae.
          </p>
        </div>

        <ul className=" relative grid h-fit grid-cols-2 gap-x-[5rem] gap-y-[2rem] smobile:gap-x-[7rem] mobile:flex mobile:gap-x-[2rem] md:gap-[3.5rem]">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
            <WhyChooseVersityEdgeElements
              key={num}
              num={num}
              line={lines[num - 1]}
              header={text[num - 1].header}
              img={text[num - 1].img}
            >
              {text[num - 1].wirteup}
            </WhyChooseVersityEdgeElements>
          ))}
          {/* MobileLines */}
          <img
            className=" WCVLines absolute left-[24%] top-[24%] block scale-[50%] smobile:left-[31%] smobile:scale-[60%] mobile:hidden"
            src={LINE4}
            alt="connection"
          />
          <img
            className=" WCVLines absolute left-[87%] top-[48%] block scale-[85%] smobile:left-[88%] smobile:top-[40%] smobile:scale-[100%] mobile:hidden "
            src={LINE5}
            alt="connection"
          />
          <img
            className=" WCVLines absolute left-[37%] top-[84%] block scale-[70%] smobile:left-[40%] smobile:top-[83%] smobile:scale-[90%] mobile:hidden "
            src={LINE6}
            alt="connection"
          />
        </ul>
      </article>
    </section>
  );
}
