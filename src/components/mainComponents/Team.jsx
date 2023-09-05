import TEAMIMG1 from "./../../assets/Rectangle8.png";
import TEAMIMG2 from "./../../assets/Rectangle9.png";
import TEAMIMG3 from "./../../assets/Rectangle10.png";
import TEAMIMG4 from "./../../assets/Rectangle11.png";
import TEAMIMG5 from "./../../assets/Rectangle12.png";

import GalleryCarousel from "../carousel/GalleryCarousel/GalleryCarousel";

export const team = [
  [
    { img: TEAMIMG1, name: "CEO" },
    { img: TEAMIMG2, name: "Head Designer" },
    { img: TEAMIMG3, name: "Head Dev" },
    { img: TEAMIMG4, name: "CTO" },
    { img: TEAMIMG5, name: "COO" },
  ],
  [
    { img: TEAMIMG1, name: "CEO" },
    { img: TEAMIMG2, name: "Head Designer" },
    { img: TEAMIMG3, name: "Head Dev" },
    { img: TEAMIMG4, name: "CTO" },
    { img: TEAMIMG5, name: "COO" },
  ],
  [
    { img: TEAMIMG1, name: "CEO" },
    { img: TEAMIMG2, name: "Head Designer" },
    { img: TEAMIMG3, name: "Head Dev" },
    { img: TEAMIMG4, name: "CTO" },
    { img: TEAMIMG5, name: "COO" },
  ],
  [
    { img: TEAMIMG1, name: "CEO" },
    { img: TEAMIMG2, name: "Head Designer" },
    { img: TEAMIMG3, name: "Head Dev" },
    { img: TEAMIMG4, name: "CTO" },
    { img: TEAMIMG5, name: "COO" },
  ],
];

export default function OurTeamComp() {
  return (
    <section className=" generalPadding team-back mobile:py[2rem] relative flex h-fit flex-col items-center bg-[#F8FBFF] xs:gap-[1rem] xs:py-[3rem] mobile:gap-[3rem] lmobile:py-[5rem] md:gap-[5rem]">
      <h1 className=" responsiveHeader text-center font-bold"> Our Team</h1>

      {/* slider */}
      <GalleryCarousel carouselData={team} />
    </section>
  );
}
