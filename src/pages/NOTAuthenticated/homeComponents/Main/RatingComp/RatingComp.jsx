import "./Style.css";
import RatingElement from "./RatingElement";

const rating = [
  { header: "81%", text: "Admission Success Rate" },
  { header: "40", text: "Exams" },
  { header: "512", text: "Expert Tutors" },
  { header: "27K+", text: "Min. Tutored" },
];

export default function RatingComp() {
  return (
    <section className=" generalPadding flex justify-center items-center h-[25rem] w-full bg-[var(--paleBlue)] ">
      <ul className=" rating lmobile:flex w-full h-[6rem] justify-between">
        {rating.map((obj, id) => (
          <RatingElement key={id} header={obj.header}>
            {obj.text}
          </RatingElement>
        ))}
      </ul>
    </section>
  );
}
