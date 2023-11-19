import UPCOMINGEVENTIMG from "./../../../assets/HeroImage2.png";
import Carousel from "./../../../components/carousel/Carousel";

const upComingEvent = [
  {
    image: [UPCOMINGEVENTIMG],
    header: "UTME TO UI 2.0",
    content:
      "Attention all University of Ibadan Aspirants Finally!!!!!...... You can now increase your chances of gaining admission into the prestigious University of Ibadan. Come and learn directly from UI Admissions Officer how to avoid the same mistake aspirants make every year when applying for admission into the University of Ibadan.....Your admission is too costly to repeat such mistakes!!! You'll also be learning the little-known method that helped the Best Scorers of UI PUTME when preparing for the examination. What are you waiting for? Register via this link below to secure your spot on time!!!",
    quote: true,
    btnText: "Register",
    path: "https://bit.ly/utmetoui2",
    externalLink: true,
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
