import TOTALCOURSEIMG from "./../../../assets/lucide_book-marked.png";
import EXPERTMENTORIMG from "./../../../assets/la_chalkboard-teacher.png";
import STUDENTIMG from "./../../../assets/ph_student-light.png";
import PARTNERIMG from "./../../../assets/mdi_partnership-outline.png";
import RatingElement from "./RatingElement";

const rating = [
  { img: TOTALCOURSEIMG, header: "1K+", text: "Total courses" },
  { img: EXPERTMENTORIMG, header: "200+", text: "Expert mentors" },
  { img: STUDENTIMG, header: "1K+", text: "Students globally" },
  { img: PARTNERIMG, header: "20+", text: "Partners" },
];

export default function RatingComp() {
  return (
    <section className=" generalPadding my-[4rem] w-full ">
      <ul className="flex h-[6rem] justify-between">
        {rating.map((obj, id) => (
          <RatingElement key={id} img={obj.img} header={obj.header}>
            {obj.text}
          </RatingElement>
        ))}
      </ul>
    </section>
  );
}
