import NewCard from "../../../../../components/NotAuthUI/NewCard";
import CARDIMG1 from "./../../../../../assets/cardImg1.png";
import CARDIMG2 from "./../../../../../assets/cardImg2.png";
import CARDIMG3 from "./../../../../../assets/cardImg3.png";

const cardsContent = [
  {
    image: CARDIMG1,
    header: "Attend live classes",
    text: "Two way interaction between student & teacher, better than recorded videos.",
  },
  {
    image: CARDIMG2,
    header: "Recieve Study materials",
    text: "Engage yourself with genuine past questions, insightful lecture notes, and conquer mock quizzes to enhance your exam performance",
  },
  {
    image: CARDIMG3,
    header: "Admission support",
    text: "No need to travel or worry. Learn at the comfort & safety of your home.",
  },
];

function Cards() {
  return (
    <section className=" flex justify-center items-center generalPadding h-fit py-[9.6rem] px-[5rem] bg-[var(--paleBlue)]">
      <ul className="flex flex-wrap justify-center gap-[4rem] md:gap-[8.1rem] items-center w-full">
        {cardsContent.map((obj, idx) => (
          <NewCard
            key={idx}
            img={obj.image}
            header={obj.header}
            text={obj.text}
          />
        ))}
      </ul>
    </section>
  );
}

export default Cards;
