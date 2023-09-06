import FRONT1 from "./../../assets/Rectangle30.png";
import BACK1a from "./../../assets/Rectangle29.png";
import BACK1b from "./../../assets/Rectangle29.png";
import FRONT2 from "./../../assets/Rectangle31.png";
import BACK2a from "./../../assets/Rectangle32.png";
import BACK2b from "./../../assets/Rectangle32.png";
import FRONT3 from "./../../assets/Rectangle33.png";
import BACK3a from "./../../assets/Rectangle34.png";
import BACK3b from "./../../assets/Rectangle34.png";
import FRONT4 from "./../../assets/Rectangle35.png";
import BACK4a from "./../../assets/Rectangle36.png";
import BACK4b from "./../../assets/Rectangle36.png";

import Carousel from "../carousel/Carousel";

const content = [
  {
    displaceImg: [
      {
        img: FRONT1,
      },
      {
        img: BACK1a,
      },
      {
        img: BACK1b,
      },
    ],
    header: "Know your chances of admission at your dream institution",
    headerPaintedText: "chances of admission",
    content:
      " Wondering about your chances of acceptance? Our Predictive Admissions model analyzes vast amounts of historical admission data, including academic performance, exam scores, and other relevant factors, to provide you with personalized insights into your likelihood of acceptance so that you can strategize your admissions plan with confidence.",
    btnText: "Know your chance",
  },
  {
    displaceImg: [
      {
        img: FRONT2,
      },
      {
        img: BACK2a,
      },
      {
        img: BACK2b,
      },
    ],
    header: "Virtual Learning for Your Dream Institution!",
    headerPaintedText: "Virtual Learning",

    content:
      " At Versity ~ Edge , we believe that every student's academic journey is unique, and so are their aspirations. That's why we offer Virtual Tutoring tailored to YOUR dream institutions, creating a personalized learning experience that aligns with your ambitions! We tailor each tutoring session to focus on the specific subjects and topics that matter most for your dream course.",
    contentPaintedText: "Versity Edge",
    btnText: "Get Tutored",
  },
  {
    displaceImg: [
      {
        img: FRONT3,
      },
      {
        img: BACK3a,
      },
      {
        img: BACK3b,
      },
    ],
    header: "Prepare with Precision using our AI-powered Mock Exams",
    headerPaintedText: "AI-powered",

    content:
      " Knowing where you excel and where you can improve provides a tremendous confidence boost. With each test you take, our intelligent algorithms analyze your performance, identifying your unique strengths and areas that need improvement so that you walk into the exam hall with a newfound self-assurance that sets you apart from the rest.",
    btnText: "Stay one step ahead",
  },
  {
    displaceImg: [
      {
        img: FRONT4,
      },
      {
        img: BACK4a,
      },
      {
        img: BACK4b,
      },
    ],
    header: " Boost your Confidence with  Study Plans Tailored to your Needs",
    headerPaintedText: "Study Plans",
    content:
      " Our study plans offer personalized guidance and curated materials to help you reach your academic goals. Tailored to your strengths, weaknesses, and target scores, these plans focus on the subjects that matter most to you. With real-time progress tracking, you'll experience steady growth, increased confidence, and a sense of accomplishment.",
    btnText: "",
  },
];
export default function KnowYourChances() {
  return (
    <section className=" generalPadding relative flex h-fit items-center justify-center pb-[2rem] pt-[5rem] ">
      <Carousel carouselData={content} />
    </section>
  );
}
