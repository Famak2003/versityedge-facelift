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
      <article className=" generalPadding flex flex-col gap-[3rem] mobile:gap-[6rem] mobile:py-4 md:py-7">
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
              header={text[num - 1].header}
              img={text[num - 1].img}
            >
              {text[num - 1].wirteup}
            </WhyChooseVersityEdgeElements>
          ))}
          {/* Lines */}
          <img
            className=" WCVLines absolute left-[12.5%] top-[.5rem] hidden mobile:left-[-13%] mobile:block lmobile:left-[-5.5%] sm:left-[.5%] md:left-[3.5%] md:top-[2rem] Lmd:left-[6.5%] lg:left-[9%] semiLarge:left-[11%] xl:left-[11.5%] Lxl:left-[13%] 2xl:left-[14%] "
            src={LINE1}
            alt="connection"
          />
          <img
            className=" WCVLines absolute left-[38%] top-[-1rem] hidden mobile:left-[13%] mobile:block lmobile:left-[20.5%] sm:left-[26.5%] md:left-[29%] Lmd:left-[32.5%] lg:left-[35%] semiLarge:left-[37%] xl:left-[37.5%] Lxl:left-[38.5%] 2xl:left-[39.5%] "
            src={LINE2}
            alt="connection"
          />
          <img
            className=" WCVLines absolute right-[13%] top-[.5rem] hidden mobile:left-[40%] mobile:block lmobile:left-[47%] sm:left-[52.5%] md:left-[56%] md:top-[2rem] Lmd:left-[58%] lg:left-[60%] semiLarge:left-[62%] xl:left-[63%] Lxl:right-[13%] 2xl:left-[66%] "
            src={LINE3}
            alt="connection"
          />
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
