import TEAMIMG1 from "./../../../assets/Olusola Somuyiwa(CEO and CTO).jpg";
import TEAMIMG2 from "./../../../assets/Folahan Kilanko(Head of Marketing).png";
import TEAMIMG3 from "./../../../assets/Prof Idowu Olayinka.jpg";
import TEAMIMG4 from "./../../../assets/Isa AbdulMajeed(Head of Design).jpg";
import TEAMIMG5 from "./../../../assets/Chantel Onyebuchi(COO).jpg";

import GalleryCarousel from "../../carousel/GalleryCarousel/GalleryCarousel";
// import TeamImg from "../../carousel/GalleryCarousel/TeamImg";

export const team = [
  [
    {
      img: TEAMIMG1,
      title: "CEO AND CTO",
      name: "Olusola Somuyiwa",
      experience:
        "4+ years of experience in education technology, and enterpreneurship",
    },
    {
      img: TEAMIMG2,
      title: "HEAD OF MARKETING",
      name: "Folahan Kilanko",
      experience:
        "4+ years in education sector social media marketing and brand positioning.",
    },
    {
      img: TEAMIMG3,
      title: "ADVISOR",
      name: "Prof.idowu Olayinka",
      experience: "Former Vice Chancellor, university of ibadan",
    },
    {
      img: TEAMIMG4,
      title: "HEAD OF DESIGN",
      name: "AbdulMajeed Isa",
      experience:
        "5 years of experience in education sector design and user experience",
    },
    {
      img: TEAMIMG5,
      title: "COO AND COFOUNDER",
      name: "Chantel Onyebuchi",
      experience:
        "4+ years of experience in operations managements in the education sector",
    },
  ],
  // [
  //   { img: TEAMIMG1, name: "CEO" },
  //   { img: TEAMIMG2, name: "Head Designer" },
  //   { img: TEAMIMG3, name: "Head Dev" },
  //   { img: TEAMIMG4, name: "CTO" },
  //   { img: TEAMIMG5, name: "COO" },
  // ],
  // [
  //   { img: TEAMIMG1, name: "CEO" },
  //   { img: TEAMIMG2, name: "Head Designer" },
  //   { img: TEAMIMG3, name: "Head Dev" },
  //   { img: TEAMIMG4, name: "CTO" },
  //   { img: TEAMIMG5, name: "COO" },
  // ],
  // [
  //   { img: TEAMIMG1, name: "CEO" },
  //   { img: TEAMIMG2, name: "Head Designer" },
  //   { img: TEAMIMG3, name: "Head Dev" },
  //   { img: TEAMIMG4, name: "CTO" },
  //   { img: TEAMIMG5, name: "COO" },
  // ],
];

export default function OurTeamComp() {
  return (
    <section className=" generalPadding team-back mobile:py[2rem] relative flex h-fit flex-col items-center bg-[#F8FBFF] xs:gap-[1rem] xs:py-[3rem] mobile:gap-[3rem] lmobile:py-[5rem] md:gap-[5rem]">
      <h1 className=" responsiveHeader text-center font-bold"> Our Team</h1>

      {/* slider */}
      <GalleryCarousel carouselData={team} type={"team"} />
    </section>
  );
}
