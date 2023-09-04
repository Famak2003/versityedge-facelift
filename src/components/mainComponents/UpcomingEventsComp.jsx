import UPCOMINGEVENTIMG from "./../../assets/HeroImage2.png";
import Carousel from "../carousel/Carousel";

const upComingEvent = [
  {
    image: [UPCOMINGEVENTIMG],
    header: "University of ibadan Webinar",
    content:
      "Gratitude overflows for VersityEdge! With their exceptional mentorship, I secured admission to the University of Ibadan for Industrial and Production Engineering. Personalized study plans and AI-powered mock tests boosted my confidence. Forever thankful for their unwavering support on my path to greatness! Gratitude overflows for VersityEdge! With their exceptional mentorship, I secured admission to the University of Ibadan for Industrial and Production Engineering. Personalized study plans and AI-powered mock tests boosted my confidence. Forever thankful for their unwavering support on my path to greatness!",
    quote: true,
  },
];

export default function UpcomingEventsComp() {
  return (
    <section
      className={` generalPadding relative flex h-fit flex-col items-center gap-[2rem] py-[3rem]`}
    >
      <h1 className="SliderResponsiveHeader font-bold">
        Upcoming Events and Webinar
      </h1>
      <Carousel carouselData={upComingEvent} />
    </section>
  );
}
