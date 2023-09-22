import TEAMIMG1 from "./../../assets/Rectangle664.png";
import TEAMIMG2 from "./../../assets/Rectangle665.png";
import TEAMIMG3 from "./../../assets/Rectangle666.png";
import TEAMIMG4 from "./../../assets/Rectangle667.png";
import TEAMIMG5 from "./../../assets/Rectangle668.png";
import TEAMIMG6 from "./../../assets/Rectangle669.png";

import SOCIAL1 from "./../../assets/blue-facebook.png";
import SOCIAL2 from "./../../assets/blue-insta.png";
import SOCIAL3 from "./../../assets/blue-linkedin.png";

import SCROLLIMG1 from "./../../assets/OurTeamScroll1.png";
import SCROLLIMG2 from "./../../assets/OurTeamScroll2.png";
import SCROLLIMG3 from "./../../assets/OurTeamScroll3.png";
import SCROLLIMG4 from "./../../assets/OurTeamScroll4.png";
import SCROLLIMG5 from "./../../assets/OurTeamScroll5.png";
import SCROLLIMG6 from "./../../assets/OurTeamScroll6.png";
import SCROLLIMG7 from "./../../assets/OurTeamScroll7.png";

const teamImg = [
  { img: TEAMIMG1, name: "Olusola Somuyiwa", position: "CEO" },
  { img: TEAMIMG2, name: "Chantel Onyebuchi", position: "COO" },
  { img: TEAMIMG3, name: "Emmanuel Oludara", position: "CMO" },
  { img: TEAMIMG4, name: "Isa Abdulmajeed", position: "Head of Design" },
  { img: TEAMIMG5, name: "Folahan Araomi", position: "Head of Finance" },
  { img: TEAMIMG6, name: "Fadesere David", position: "Head of Engineering" },
];

const teamThumbnail = [
  { img: SCROLLIMG1, name: "Peter Ayede", position: "UI|UX Designer" },
  { img: SCROLLIMG2, name: "Mercy Thom", position: "Front end Dev." },
  { img: SCROLLIMG3, name: "Khadijah Ojo", position: "UI|UX Designer" },
  { img: SCROLLIMG4, name: "Alade Tunji", position: "Marketer" },
  { img: SCROLLIMG5, name: "Peter Wealth", position: "Content Writer" },
  { img: SCROLLIMG6, name: "Sunday Ayede", position: "UI|UX Designer" },
  { img: SCROLLIMG7, name: "Peter Ayede", position: "UI|UX Designer" },
];

function OurTeam() {
  return (
    <section className=" flex h-fit flex-col items-center justify-center">
      <h1> Our Team</h1>
      <div className=" grid w-full grid-cols-3 gap-x-[13rem] gap-y-[6rem]">
        {teamImg.map((obj, index) => {
          return (
            <figure key={index} className=" w-full ">
              <img
                className=" w-fit object-contain ring-1 ring-red-500 "
                src={obj.img}
                alt="img"
              />
              <figcaption className=" flex flex-col gap-[1rem] text-left ">
                <p className="text-[24px]">{obj.name}</p>
                <div className=" flex gap-[1rem]">
                  <p className="text-[20px]">{obj.position}</p>
                  <img
                    className=" object-contain"
                    src={SOCIAL1}
                    alt="facebook"
                  />
                  <img
                    className=" object-contain"
                    src={SOCIAL2}
                    alt="instagram"
                  />
                  <img
                    className=" object-contain"
                    src={SOCIAL3}
                    alt="linkedin"
                  />
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className=" flex gap-[1rem] ">
        {teamThumbnail.map((obj) => (
          <figure className="h-[13rem]">
            <img className=" h-full" src={obj.img} alt="team member" />
            <figcaption>
              <h3>{obj.name}</h3>
              <p>{obj.position}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
