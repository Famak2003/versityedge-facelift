import "./Partners.css";
import PARTNER1 from "./../../../assets/partner1.jpg";
import PARTNER2 from "./../../../assets/partner2.jpg";
import PARTNER3 from "./../../../assets/partner3.jpg";
import PARTNER4 from "./../../../assets/partner4.jpg";
import PARTNER5 from "./../../../assets/partner5.jpg";
import PARTNER6 from "./../../../assets/Lucid-Motors-Logo-PNG1.png";
import PARTNER7 from "./../../../assets/nikePNG2.png";
import PARTNER8 from "./../../../assets/Cupra_logo_PNG17.png";
import PARTNER9 from "./../../../assets/koenigsegg-ghost.png";
import PARTNER10 from "./../../../assets/koenigsegg-logo-2.webp";
import PartnerElements from "./PartnerElements";

const partners = [
  PARTNER1,
  PARTNER2,
  PARTNER3,
  PARTNER4,
  PARTNER5,
  PARTNER6,
  PARTNER7,
  PARTNER8,
  PARTNER9,
  PARTNER10,
];

export default function PartnersComp() {
  return (
    <section className=" generalPadding flex flex-col items-center gap-[1rem] overflow-x-hidden bg-[#F8FBFF] py-[2rem] lmobile:gap-[3rem]">
      <h1 className=" SliderResponsiveHeader font-extrabold">
        Our Trusted Partners and Supporters
      </h1>

      {/* infinite loop */}
      <div className="logos relative w-full overflow-x-hidden whitespace-nowrap ">
        <div className="logoSlides inline-block xs:h-[5rem] smobile:h-[6rem] mobile:h-[8rem] sm:h-[10rem] md:h-[13rem]">
          {partners.map((img, id) => {
            return <PartnerElements key={id} img={img} />;
          })}
        </div>
        <div className="logoSlides inline-block xs:h-[5rem] smobile:h-[6rem] mobile:h-[8rem] sm:h-[10rem] md:h-[13rem]">
          {partners.map((img, id) => {
            return <PartnerElements key={id} img={img} />;
          })}
        </div>
      </div>
    </section>
  );
}
