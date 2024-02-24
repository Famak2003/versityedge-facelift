import "./Partners.css";
import PARTNER1 from "./../../../../../assets/partner1.jpg";
import PARTNER2 from "./../../../../../assets/partner2.jpg";
import PARTNER3 from "./../../../../../assets/partner3.jpg";
import PARTNER4 from "./../../../../../assets/partner4.jpg";
import PARTNER5 from "./../../../../../assets/partner5.jpg";

import PartnerElements from "./PartnerElements";

const partners = [PARTNER1, PARTNER2, PARTNER3, PARTNER4, PARTNER5];

export default function PartnersComp() {
  return (
    <section className=" generalPadding flex flex-col items-center gap-[1rem] overflow-x-hidden bg-[var(--white)] py-[2rem] lmobile:gap-[3rem]">
      <h1 className=" text-center font-extrabold">
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
