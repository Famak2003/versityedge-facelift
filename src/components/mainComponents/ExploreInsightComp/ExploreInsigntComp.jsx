import CARDIMG1 from "./../../../assets/Rectangle14.png";
import CARDIMG2 from "./../../../assets/Rectangle15.png";
import CARDIMG3 from "./../../../assets/Rectangle16.png";
import Card from "./Card";

export const cardInfo = [
  {
    img: CARDIMG1,
    header: "Navigating the Admission Process: From Application to Acceptance",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi temporibus in facilis? Nesciunt corrupti excepturi totam fugit obcaecati quod fuga iste odio natus nulla.",
  },
  {
    img: CARDIMG2,
    header: "How to prepare Smartly for University of Lagos Post UTME Exams",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi temporibus in facilis? Nesciunt corrupti excepturi totam fugit obcaecati quod fuga iste odio natus nulla.",
  },
  {
    img: CARDIMG3,
    header: "Mastering the Art of Effective Study Techniques for Exam Success",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi temporibus in facilis? Nesciunt corrupti excepturi totam fugit obcaecati quod fuga iste odio natus nulla.",
  },
];

export default function ExploreInsigntComp() {
  return (
    <section className="generalPadding flex h-fit flex-col items-center justify-center gap-[3rem] py-[5rem] text-center ">
      <h1 className=" responsiveHeader font-extrabold">Explore Our Insights</h1>

      <div className=" flex w-full">
        <ul className=" flex h-full w-full flex-wrap justify-center gap-[2rem] py-[1rem] md:gap-[2rem] lg:gap-[4rem] ">
          {cardInfo.map((obj, id) => (
            <Card key={id} img={obj.img} header={obj.header}>
              {obj.text}
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
