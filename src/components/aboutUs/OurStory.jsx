import Hug from "../common/Hug/Hug";

import IMG1 from "./../../assets/Assesment.png";
import IMG2 from "./../../assets/Algorithm.png";
import IMG3 from "./../../assets/Advisor.png";
import IMG4 from "./../../assets/Tutoring.png";

import BG1 from "./../../assets/1.png";
import BG2 from "./../../assets/2.png";
import BG3 from "./../../assets/3.png";
import BG4 from "./../../assets/4.png";

const content = [
  {
    header: "AI-Based Quiz Assesment  1",
    body: " Interactive quizzes and mock exams evaluate strengths and weaknesses, generating personalized improvement strategies.",
    img: IMG1,
  },
  {
    header: "Predictive Algorithms  2",
    body: "Interactive quizzes and mock exams evaluate strengths and weaknesses, generating personalized improvement strategies. Our Machine learning feature predicts admission likelihood therefore, reducing anxiety",
    img: IMG2,
  },
  {
    header: "AI-Admissions Advisors  3",
    body: "Virtual advisors offer real-time guidance via USSD, WhatsApp, and Telegram.",
    img: IMG3,
  },
  {
    header: "Virtual Tutoring Program  4",
    body: "Well-seasoned tutors boost academic performance",
    img: IMG4,
  },
];

function OurStory() {
  return (
    <section className=" flex flex-col items-center justify-center gap-[4rem] bg-[var(--lightblue-texture)] py-[2rem] mobile:py-[3rem] md:py-[5rem] ">
      <div className=" flex flex-col gap-[1rem]">
        <h1 className="responsiveHeader text-center font-extrabold ">
          Our Story
        </h1>
        <p className=" KYCResponsiveText max-w-[80rem] text-center">
          VersityEdge revolutionizes the admission process; turning hurdles into
          gateways. We democratize guidance, ensuring accessibility,
          personalization, and transformation. Our advanced platform utilizes
          innovation and tech to simplify the intricate journey.
        </p>
      </div>
      <ul className=" grid w-[90%] grid-cols-2">
        {content.map((item, index) => {
          console.log(index % 2);
          return (
            <li
              key={index}
              className={`flex h-[16rem] items-center justify-end mobile:h-[18rem] sm:h-[20rem] md:h-[23rem] ${
                index === 0
                  ? " border-b-[.03rem] border-r-[.03rem] border-[var(--gray-texture)] pr-[1rem] mobile:pr-[3rem] md:pr-[5rem]"
                  : ""
              }${
                index === 1
                  ? "border-b-[0.03rem] border-[var(--gray-texture)] pl-[1rem] mobile:pl-[3rem] md:pl-[5rem]"
                  : ""
              }${
                index === 2
                  ? " border-r-[.03rem] border-[var(--gray-texture)] pr-[1rem] mobile:pr-[3rem] md:pr-[5rem]"
                  : ""
              }${
                index === 3
                  ? " border-[var(--gray-texture)] pl-[1rem] mobile:pl-[3rem] md:pl-[5rem]"
                  : ""
              } `}
              style={{
                backgroundImage: `url(${
                  index === 0
                    ? BG1
                    : index === 1
                    ? BG2
                    : index === 2
                    ? BG3
                    : index === 3
                    ? BG4
                    : ""
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "10%",
                backgroundPositionX: `${index % 2 === 1 ? "10%" : ""}`,
                backgroundPositionY: "30%",
                // backgroundPosition: `${"-100%"}`,
              }}
            >
              <Hug
                separateImg={true}
                normal={true}
                header={item.header}
                img={item.img}
              >
                {item.body}
              </Hug>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default OurStory;
