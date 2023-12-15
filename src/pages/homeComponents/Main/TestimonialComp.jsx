import Carousel from "./../../../components/carousel/Carousel";
import TESTIMONALIMG from "./../../../assets/TestimonialImage.png";

const testimonialData = [
  {
    header: "Hear from our students",
    image: [TESTIMONALIMG],
    content:
      "Gratitude overflows for VersityEdge! With their exceptional mentorship, Isecured admission to the University of Ibadan for Industrial andProduction Engineering. Personalized study plans and AI-powered mock testsboosted my confidence. Forever thankful for their unwavering support on mypath to greatness!",
  },
];

export default function TestimonialComp() {
  return (
    <section
      className={` generalPadding relative flex h-fit flex-col items-center gap-[2rem] bg-[#F8FBFF] py-[3rem]`}
    >
      <h1 className=" responsiveHeader font-bold">Testimonials</h1>

      <Carousel
        carouselData={testimonialData}
        quoteAuthor={"Samuel Peter Obotu"}
      />
    </section>
  );
}
