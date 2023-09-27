import CARDIMG1 from "./../../../../assets/Rectangle14.png";
import CARDIMG2 from "./../../../../assets/Rectangle15.png";
import CARDIMG3 from "./../../../../assets/Rectangle16.png";
import Card from "../../../common/Card";

export const cardInfo = [
  {
    img: CARDIMG1,
    header: "Navigating the Admission Process: From Application to Acceptance",
    text: "Elevate your study game with our expert-backed guide. Learn how to harness powerful study techniques that will boost your retention, improve your focus, and pave the way to exam triumph.",
  },
  {
    img: CARDIMG2,
    header: "How to prepare Smartly for University of Lagos Post UTME Exams",
    text: "Dive into the world of strategic exam preparation. Discover time-tested methods to conquer the Post UTME challenge, including personalized study plans and adaptive practice strategies.",
  },
  {
    img: CARDIMG3,
    header: "Mastering the Art of Effective Study Techniques for Exam Success",
    text: "Embark on a comprehensive journey through the admissions labyrinth. Uncover the insider tips and step-by-step guidance you need to successfully navigate applications, interviews, and securing ...",
  },
];

export default function ExploreInsigntComp() {
  return (
    <section className="generalPadding flex h-fit flex-col items-center justify-center gap-[3rem] py-[5rem] text-center ">
      <h1 className=" responsiveHeader font-extrabold">Explore Our Insights</h1>

      <div className=" flex w-full">
        <ul className=" flex h-full w-full flex-wrap justify-center gap-[2rem] py-[1rem] md:gap-[2rem] lg:gap-[4rem] ">
          {cardInfo.map((obj, id) => (
            <Card key={id} img={obj.img} header={obj.header} normal={true}>
              {obj.text}
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
