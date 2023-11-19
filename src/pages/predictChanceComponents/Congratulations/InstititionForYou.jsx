import IMG1 from "./../../../assets/Chemistry.png";
import IMG2 from "./../../../assets/biology.png";
import IMG3 from "./../../../assets/Computer-Science.png";

import Card from "./../../../components/common/Card";

const cards = [
  [
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
      header: "Biology",
      content: [
        "University of Ibadan: 85%",
        "University of Lagos: 87%",
        "University of Ilorin: 89%",
        "OAU: 90%",
        "University of Benin: 95%",
      ],
    },
    {
      image: IMG3,
      header: "Computer Science",
      content: [
        "University of Ibadan: 85%",
        "University of Lagos: 87%",
        "University of Ilorin: 89%",
        "OAU: 90%",
        "University of Benin: 95%",
      ],
    },
  ],
  [
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
      header: "Biology",
      content: [
        "University of Ibadan: 85%",
        "University of Lagos: 87%",
        "University of Ilorin: 89%",
        "OAU: 90%",
        "University of Benin: 95%",
      ],
    },
    {
      image: IMG3,
      header: "Computer Science",
      content: [
        "University of Ibadan: 85%",
        "University of Lagos: 87%",
        "University of Ilorin: 89%",
        "OAU: 90%",
        "University of Benin: 95%",
      ],
    },
  ],
  [
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
      header: "Biology",
      content: [
        "University of Ibadan: 85%",
        "University of Lagos: 87%",
        "University of Ilorin: 89%",
        "OAU: 90%",
        "University of Benin: 95%",
      ],
    },
    {
      image: IMG3,
      header: "Computer Science",
      content: [
        "University of Ibadan: 85%",
        "University of Lagos: 87%",
        "University of Ilorin: 89%",
        "OAU: 90%",
        "University of Benin: 95%",
      ],
    },
  ],
];

function InstititionForYou() {
  return (
    <section className="generalPadding flex flex-col gap-[5rem]">
      <h1 className=" responsiveHeader text-center font-extrabold">
        Best Institution For You Based On Your Desired Course
      </h1>
      <div className=" congSlider w-full justify-center overflow-scroll">
        <ul className=" flex h-fit w-fit justify-start gap-[2%] px-[1rem] py-[1rem] sm:justify-center">
          {cards.map((item) =>
            item.map((obj, index) => {
              return (
                <Card
                  key={index}
                  header={obj.header}
                  img={obj.image}
                  type={"institution"}
                >
                  {obj.content}
                </Card>
              );
            }),
          )}
        </ul>
      </div>
    </section>
  );
}

export default InstititionForYou;
