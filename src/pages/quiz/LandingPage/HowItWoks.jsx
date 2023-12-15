import Hug from "./../../../components/common/Hug/Hug";
import FRAME1 from "./../../../assets/quiz how it works 1.png";
import FRAME2 from "./../../../assets/quiz how it works 2.png";
import FRAME3 from "./../../../assets/carbon_result-old.png";

const text = [
  {
    header: "Choose your quiz category",
    img: FRAME1,
    wirteup:
      "Select a quiz category that aligns with your goal. Whether you are preparing for your UTME, assessing your subject knowledge or mastering specific topics, we’ve got you covered. Choose from categories like Diagnostic tests, UTME preparations, Institution mock exams, O’level  mocks, Subject spotlights and Topic mastering.",
  },

  {
    header: "Take the quiz and test your skills",
    img: FRAME2,
    wirteup:
      "Once you’ve chosen your quiz category, dive into a variety of engaging quizzes. Each quiz is designed to evaluate your knowledge, strengths, and areas for improvement. Answer questions with the allocated time and see how well you perform. Your progress is tracked, helping you identify your strengths and pinpoint areas that need more attention.",
  },

  {
    header: "Review your results and improve",
    img: FRAME3,
    wirteup:
      "After completing the quiz, receive instant feedback on your performance. Review correct answers and explanations for questions you may have missed. Use this feedback.",
  },
];

export default function HowItWorks() {
  return (
    <section className=" bg-[#F8FBFF] py-[3rem]">
      <article className=" generalPadding flex flex-col items-center justify-center gap-[3rem] mobile:gap-[6rem] mobile:py-4 md:py-7">
        <div className=" flex flex-col items-center justify-center gap-[1rem]">
          <h1 className=" responsiveHeader font-extrabold">How it Works</h1>
          <p className="responsiveText text-center ">
            In a nutshell, our quiz app offers a comprehensive platform to
            assess, improve, and fine-tune your knowledge in various subjects.
            Whether you are preparing for exams or aiming to master specific
            topics, our quizzes provide valuable insights to help you succeed on
            your education journey.
          </p>
        </div>

        <ul className=" relative flex h-fit flex-wrap justify-center gap-x-[5rem] gap-y-[2rem] smobile:gap-x-[7rem] mobile:flex-nowrap mobile:gap-x-[2rem] md:gap-[3.5rem]">
          {Array.from({ length: text.length }, (_, i) => i + 1).map((num) => (
            <Hug
              key={num}
              num={num}
              type="numbered"
              id={num}
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
