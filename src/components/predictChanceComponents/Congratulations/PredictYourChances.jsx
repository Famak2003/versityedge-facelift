import Card from "../../common/Card";
import IMG1 from "./../../../assets/universityOfIbadan.png";
import IMG2 from "./../../../assets/universityOfLagos.png";
import IMG3 from "./../../../assets/PolythecnicOfIbadan.png";

// const cards = [
//   [
//     {
//       image: IMG1,
//       header: "University Of Ibadan",
//       content: [
//         "Admission % chance: 78%",
//         "Acceptance rate: 80%",
//         "Location: Ibadan",
//       ],
//     },
//     {
//       image: IMG2,
//       header: "University Of Lagos",
//       content: [
//         "Admission % chance: 80%",
//         "Acceptance rate: 85%",
//         "Location: Lagos",
//       ],
//     },
//     {
//       image: IMG3,
//       header: "Polythecnic Of Ibadan",
//       content: [
//         "Admission % chance: 90%",
//         "Acceptance rate: 96%",
//         "Location: Ibadan",
//       ],
//     },
//   ],
//   [
//     {
//       image: IMG1,
//       header: "University Of Ibadan",
//       content: [
//         "Admission % chance: 78%",
//         "Acceptance rate: 80%",
//         "Location: Ibadan",
//       ],
//     },
//     {
//       image: IMG2,
//       header: "University Of Lagos",
//       content: [
//         "Admission % chance: 80%",
//         "Acceptance rate: 85%",
//         "Location: Lagos",
//       ],
//     },
//     {
//       image: IMG3,
//       header: "Polythecnic Of Ibadan",
//       content: [
//         "Admission % chance: 90%",
//         "Acceptance rate: 96%",
//         "Location: Ibadan",
//       ],
//     },
//   ],
//   [
//     {
//       image: IMG1,
//       header: "University Of Ibadan",
//       content: [
//         "Admission % chance: 78%",
//         "Acceptance rate: 80%",
//         "Location: Ibadan",
//       ],
//     },
//     {
//       image: IMG2,
//       header: "University Of Lagos",
//       content: [
//         "Admission % chance: 80%",
//         "Acceptance rate: 85%",
//         "Location: Lagos",
//       ],
//     },
//     {
//       image: IMG3,
//       header: "Polythecnic Of Ibadan",
//       content: [
//         "Admission % chance: 90%",
//         "Acceptance rate: 96%",
//         "Location: Ibadan",
//       ],
//     },
//   ],
// ];

const cards = [
  {
    image: IMG1,
    header: "University Of Ibadan",
    content: [
      "Admission % chance: 78%",
      "Acceptance rate: 80%",
      "Location: Ibadan",
    ],
  },
  {
    image: IMG2,
    header: "University Of Lagos",
    content: [
      "Admission % chance: 80%",
      "Acceptance rate: 85%",
      "Location: Lagos",
    ],
  },
  {
    image: IMG3,
    header: "Polythecnic Of Ibadan",
    content: [
      "Admission % chance: 90%",
      "Acceptance rate: 96%",
      "Location: Ibadan",
    ],
  },
];

function PredictYourChances() {
  return (
    <section className="generalPadding flex flex-col gap-[5rem]">
      <h1 className=" responsiveHeader text-center font-extrabold">
        Predict Chances
      </h1>
      <div className=" w-full ">
        <ul className="flex h-full w-full justify-center gap-[2rem] py-[1rem] md:gap-[2rem] lg:gap-[5rem]">
          {cards.map((obj, index) => {
            return (
              <Card
                key={index}
                header={obj.header}
                img={obj.image}
                universityCard={true}
              >
                {obj.content}
              </Card>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default PredictYourChances;
