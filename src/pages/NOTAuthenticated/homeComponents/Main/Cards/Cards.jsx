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

function Card({ img, header, text }) {
  return (
    <li className=" overflow-hidden flex flex-col gap-[2rem] justify-start items-center h-[42.1rem] w-[36.3rem] rounded-3xl shadow-[0px_20px_40px_0px_rgba(176,176,176,0.15)]">
      <figure className=" h-[45%] w-full">
        <img className=" h-full w-full object-cover" src={img} alt="img" />
      </figure>
      <figcaption className=" flex justify-center items-center flex-col gap-[2rem] text-center w-[85%] mobile:w-[90%] lmobile:w-[80%]">
        <h1 className=" text-[2rem] mobile:text-[3rem] whitespace-nowrap">
          {header}
        </h1>
        <p className=" text-[1.4rem] mobile:text-[2rem] leading-10 ">{text}</p>
      </figcaption>
    </li>
  );
}

function Cards() {
  return (
    <section className=" flex justify-center items-center generalPadding h-fit py-[9.6rem] px-[5rem] bg-[var(--paleBlue)]">
      <ul className="flex flex-wrap justify-center gap-[4rem] md:gap-[8.1rem] items-center w-full">
        {cardsContent.map((obj, idx) => (
          <Card key={idx} img={obj.image} header={obj.header} text={obj.text} />
        ))}
      </ul>
    </section>
  );
}

export default Cards;
