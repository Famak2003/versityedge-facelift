import Button from "./../../../../components/common/Button";
import SEARCH from "./../../../../assets/search.png";
import Card from "./../../../../components/common/Card";

import IMG1 from "./../../../../assets/Chemistry.png";
import IMG2 from "./../../../../assets/universityOfLagos.png";

//ask backend to specify if its subject, or university
const cards = [
  {
    image: IMG1,
    header: "Chemistry",
    content: [
      "University of Ibadan: 85%",
      "University of Lagos: 87%",
      "University of Ilorin: 89%",
      "OAU: 90%",
      "University of Benin: 95%",
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
];

function OurRecommendations() {
  return (
    <section className=" generalPadding flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[4rem]">
      <h1 className=" responsiveHeader text-center font-extrabold">
        Our Recommendations
      </h1>
      <div className=" flex gap-[5rem]">
        <Button addstyle=" ring-inset py-[.2rem] sm:py-[.7rem] md:py-[1rem] bg-white ring-1 ring-[var(--blue)]   text-[.8rem] mobile:text-[.9rem] lmobile:text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2rem]">
          Course
        </Button>
        <Button addstyle=" py-[.2rem] sm:py-[.7rem] md:py-[1rem] text-white text-[.8rem] mobile:text-[.9rem] lmobile:text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2rem]">
          Institution
        </Button>
      </div>
      <form className="flex h-[3.5rem] w-[80%] items-center justify-between rounded-[2rem] bg-[#ffffff] px-[1rem] ring-1 ring-[var(--gray)] mobile:h-[2.4rem] mobile:w-[40%] mobile:px-[.5rem] lmobile:h-[3.2rem] sm:h-[4.5rem] sm:px-[.7rem] md:px-[1.2rem] lg:px-[2rem] ">
        <input
          type="text"
          required
          className=" float-left w-[70%] bg-transparent text-[1rem] text-[#000000] focus:outline-none mobile:text-[.6rem] lmobile:text-[.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] "
          placeholder="Search"
        />
        {/* search button */}
        <button
          type="submit"
          className=" float-right flex items-center justify-center rounded-[1.6rem] px-[.8rem] text-[1.2rem] duration-500 hover:bg-[#8fc7ff] xs:py-[.4rem] mobile:px-[.3rem] mobile:py-0 mobile:text-[.7rem] lmobile:px-[.2rem] lmobile:py-[.4rem] lmobile:text-[.9rem] sm:px-[1rem] sm:py-[.5rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem]   "
        >
          <img
            className=" mr-[.9rem] h-[1.5rem] mobile:mr-[.5rem] mobile:h-[.8rem] lmobile:mr-[.2rem] lmobile:h-[1rem] sm:mr-[.6rem] sm:h-[1.2rem] md:mr-[.8rem] md:h-[1.5rem] lg:h-[1.8rem] xl:h-[2rem]"
            src={SEARCH}
            alt="send"
          />
        </button>
      </form>
      <ul className="flex h-full w-full gap-[4%] py-[1rem] lg:gap-[6%]">
        {cards.map((obj, index) => {
          return (
            <Card
              key={index}
              header={obj.header}
              img={obj.image}
              universityCard={true}
              type={"universityCard"}
            >
              {obj.content}
            </Card>
          );
        })}
      </ul>
    </section>
  );
}

export default OurRecommendations;
