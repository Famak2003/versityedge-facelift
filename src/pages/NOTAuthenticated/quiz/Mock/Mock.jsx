import Button from "../../../../components/common/Button";
import QUESTIONS from "./../../../../assets/mockQuestions.png";
import TIMER from "./../../../../assets/mockTimer.png";

const explanation = [
  {
    head: "60 Questions",
    small: "60 Questions for each subject",
    img: QUESTIONS,
  },
  { head: "1 hour 15 mins", small: "Total duration of the quiz", img: TIMER },
];

function Mock() {
  return (
    <section className=" generalPadding flex gap-[3rem] mobile:gap-[5rem] flex-col -[var(--lightblue)]">
      <h1 className=" text-center responsiveHeader font-bold">
        University of Ibadan - P.utme Mock Test
      </h1>

      <div className=" flex flex-col gap-[2rem] mobile:gap-[3rem]">
        <h2 className=" Text24px font-bold">
          Brief explanation about this quiz
        </h2>

        <div className=" flex justify-between w-full lg:w-[60%]">
          {explanation.map((obj, idx) => (
            <div
              key={idx}
              className=" Text24px flex items-center gap-[1rem] sm:gap-[2rem] "
            >
              <img
                className=" object-contain h-[50%] sm:h-[80%]"
                src={obj.img}
                alt="questions"
              />{" "}
              <p className=" flex flex-col md:gap-[.5rem]">
                {obj.head} <small>{obj.small}</small>
              </p>{" "}
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col gap-[2rem] mobile:gap-[3rem]">
        <h1 className=" Text24px font-bold">
          Please read the text below carefully so you can understand it.
        </h1>
        <ul className=" list-inside list-disc flex flex-col gap-[1rem] md:gap-[2rem]">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((_, idx) => (
            <li key={idx} className=" Text24px">
              10 points awarded for a correct answer and no marks for an
              incorrect answer{" "}
            </li>
          ))}
        </ul>
      </div>

      <div className=" font-semibold Text24px">
        Subjects: Physics, Chemistry, Biology.
      </div>

      <div className=" self-end">
        {" "}
        <Button addstyle=" text-[white] py-[.5rem] Text16px">
          Proceed to Test
        </Button>
      </div>
    </section>
  );
}
export default Mock;
