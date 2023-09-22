import TEAMIMG1 from "./../../../assets/Rectangle664.png";
import TEAMIMG2 from "./../../../assets/Rectangle665.png";
import TEAMIMG3 from "./../../../assets/Rectangle666.png";
import TEAMIMG4 from "./../../../assets/Rectangle667.png";
import TEAMIMG5 from "./../../../assets/Rectangle668.png";
import TEAMIMG6 from "./../../../assets/Rectangle669.png";

import SCROLLIMG1 from "./../../../assets/Ellipse345.png";
import SCROLLIMG2 from "./../../../assets/Ellipse346.png";
import SCROLLIMG3 from "./../../../assets/Ellipse347.png";
import SCROLLIMG4 from "./../../../assets/Ellipse348.png";
import SCROLLIMG5 from "./../../../assets/Ellipse349.png";
import SCROLLIMG6 from "./../../../assets/Ellipse350.png";
import { Thumbnail } from "./Thumbnail";
import { TeamImg } from "./TeamImg";

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
  { img: SCROLLIMG4, name: "Peter Ayede", position: "UI|UX Designer" },
  { img: SCROLLIMG1, name: "Peter Ayede", position: "UI|UX Designer" },
  { img: SCROLLIMG2, name: "Mercy Thom", position: "Front end Dev." },
  { img: SCROLLIMG3, name: "Khadijah Ojo", position: "UI|UX Designer" },
  { img: SCROLLIMG4, name: "Alade Tunji", position: "Marketer" },
  { img: SCROLLIMG5, name: "Peter Wealth", position: "Content Writer" },
  { img: SCROLLIMG6, name: "Sunday Ayede", position: "UI|UX Designer" },
  { img: SCROLLIMG4, name: "Peter Ayede", position: "UI|UX Designer" },
];

function OurTeam() {
  return (
    <section className=" generalPadding flex h-fit flex-col items-center justify-center gap-[5rem] bg-[var(--lightblue-texture)] py-[2rem] sm:py-[3rem] md:py-[5rem]">
      <h1 className="responsiveHeader font-bold"> Our Team</h1>
      <div className="flex w-full flex-col gap-[10rem]">
        <div className="ourTeam h-fit w-full">
          {teamImg.map((obj, index) => {
            return <TeamImg index={index} obj={obj} />;
          })}
        </div>
        <div className="thumbnail w-full">
          <div className="flex w-fit gap-[1rem]">
            {teamThumbnail.map((obj) => (
              <Thumbnail obj={obj} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
