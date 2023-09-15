import Hug from "../common/Hug";
import MAP from "./../../assets/Map.png";
import IMG1 from "./../../assets/Ellipse26.png";
import IMG2 from "./../../assets/Ellipse27.png";
import IMG3 from "./../../assets/Ellipse28.png";
import IMG4 from "./../../assets/Ellipse29.png";

const cards = [
  {
    img: IMG1,
    header: "~Muhammed Ali",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
  },
  {
    img: IMG2,
    header: "~kora swane",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
  },
  {
    img: IMG3,
    header: "~Koffu Cheng",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
  },
  {
    img: IMG4,
    header: "~Alice White",
    body: "Lorem ajegunle fromn hwhasdfjkdjhshvsadbfnjksajkn",
  },
];

function HearFromYou() {
  return (
    <section className=" generalPadding flex h-fit flex-col items-center justify-between py-[5rem] ">
      <div className="flex flex-col items-center gap-[2rem]">
        <h1 className="responsiveHeader font-bold">
          We Would Love To Hear From You
        </h1>
        <h3 className="SliderResponsiveHeader">
          We have offices and teams all over Africa
        </h3>
      </div>
      <figure>
        <img src={MAP} alt="map" />
        {cards.map((card, index) => {
          return (
            <Hug
              key={index}
              shadow={true}
              curvedEdge={true}
              header={card.header}
              img={card.img}
            >
              {card.body}
            </Hug>
          );
        })}
      </figure>
    </section>
  );
}

export default HearFromYou;
