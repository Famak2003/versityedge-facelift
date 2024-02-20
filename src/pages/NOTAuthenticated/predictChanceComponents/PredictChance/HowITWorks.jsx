import Hug from "./../../../../components/common/Hug/Hug";
import FRAME1 from "./../../../../assets/input your information.png";
import FRAME2 from "./../../../../assets/Pancakes.png";
import FRAME3 from "./../../../../assets/carbon_calculation.png";

const text = [
  {
    header: "Input your information",
    img: FRAME1,
    wirteup:
      "Being by entering your UTME score, O’level grades and any additional relevant details. This informationis essential for the tool’s accurate analysis.",
  },

  {
    header: "Analyze your data",
    img: FRAME2,
    wirteup:
      "Once you’ve provided the required information, our advanced algorithm goes to work. It carefully assesses your data, taking into account factors such as subject combination, admission criteria and historical trends.",
  },

  {
    header: "Instant chance calculation",
    img: FRAME3,
    wirteup:
      "In a matter of seconds, our tool calculates your chance of admission based on the data you provided. You will receive a clear and instant result that outlines your likelihood of being admitted to your dream institution.",
  },
];

export default function HowItWorks() {
  return (
    <section className=" bg-[#F8FBFF] py-[3rem]">
      <article className=" generalPadding flex flex-col items-center justify-center gap-[3rem] mobile:gap-[6rem] mobile:py-4 md:py-7">
        <div className=" flex flex-col items-center justify-center gap-[1rem]">
          <h1 className=" responsiveHeader font-extrabold">How it Works</h1>
          <p className="responsiveText text-center ">
            VersityEdge’s admission prediction tool takes the guess work out of
            the admission process, providing you with a reliable estimate of
            your chances.
          </p>
        </div>

        <ul className=" relative flex h-fit flex-wrap justify-center gap-x-[5rem] gap-y-[2rem] smobile:gap-x-[7rem] mobile:flex-nowrap mobile:gap-x-[2rem] md:gap-[3.5rem]">
          {Array.from({ length: text.length }, (_, i) => i + 1).map((num) => (
            <Hug
              key={num}
              num={num}
              header={text[num - 1].header}
              img={text[num - 1].img}
            >
              {text[num - 1].wirteup}
            </Hug>
          ))}
        </ul>
      </article>
    </section>
  );
}
