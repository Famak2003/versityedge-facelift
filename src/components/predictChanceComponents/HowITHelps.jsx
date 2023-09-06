import IMG1 from "./../../assets/Ellipse 54.png";
import IMG2 from "./../../assets/Ellipse 55.png";
import IMG3 from "./../../assets/Ellipse 56.png";
import Carousel from "../carousel/Carousel";

const upComingEvent = [
  {
    image: [IMG1],
    header: "Eliminate Uncertainty",
    headerPaintedText: "Eliminate Uncertainty",
    btnText: "Predict my chance",
    content:
      "With our ‘Predict chance of Admission’ tool, you no longer need to wonder about your chances of getting admitted. It provides you with a reliable estimation based on real data, helping you understand where you stand in the competitive admission landscape. ",
  },
  {
    image: [IMG2],
    header: "Informed Decision-making",
    headerPaintedText: "Informed Decision-making",
    btnText: "Predict my chance",
    content:
      "Make educated choices about your application strategy. The tool’s insights allow you to tailor your approach, focusing on institutions and courses that align with your calculated chances. This strategic decision-making increases your likelihood of securing admission",
  },
  {
    image: [IMG3],
    header: "Personalized Pathway",
    headerPaintedText: "Personalized Pathway",
    btnText: "Predict my chance",
    content:
      "If your calculated chance falls below your expectations, the algorithm provides tailored suggestions for enhancement. This guidance ensures you take the night steps to elevate your admission prospect.",
  },
];

export default function HowITHelps() {
  return (
    <section
      className={` generalPadding relative flex h-fit flex-col items-center gap-[2rem] py-[3rem]`}
    >
      <h1 className="SliderResponsiveHeader font-bold">How It Helps</h1>
      <Carousel carouselData={upComingEvent} />
    </section>
  );
}
