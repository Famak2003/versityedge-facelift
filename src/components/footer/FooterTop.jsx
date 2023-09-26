import FACEBOOK from "./../../../assets/ic_round-facebook.png";
import INSTA from "./../../../assets/insta.png";
import LINKEDIN from "./../../../assets/Linkedin.png";
import FooterInfo from "./FooterInfo";
import { footerContent } from "./Footer";
import Email from "../common/Email";

function FooterTop() {
  return (
    <div className=" footerTop mobil3:gap-0 flex flex-col gap-[2rem] py-[3rem] text-[#ffff] mobile:flex-row sm:gap-[3rem] md:gap-[5rem] lg:gap-[7rem]">
      <div className=" flex flex-col gap-[1rem]">
        <h2 className=" mobile:KYCResponsiveText text-[1.2rem]">
          Connect with us
        </h2>
        {/* social media links */}
        <figure className="mb-2 flex gap-[1.3rem] mobile:mb-0 mobile:gap-[.5rem] lmobile:gap-[1rem] sm:gap-[1.6rem]">
          <img
            className=" h-[1.5rem] scale-110 mobile:h-[2rem]"
            src={FACEBOOK}
            alt="social-media link"
          />
          <img
            className=" h-[1.5rem] mobile:h-[2rem]"
            src={INSTA}
            alt="social-media link"
          />
          <img
            className=" h-[1.5rem] mobile:h-[2rem]"
            src={LINKEDIN}
            alt="social-media link"
          />
        </figure>
        {/* Email */}
        <Email />
        <p className=" mobile:reponsiveMiniText1 text-[1rem] leading-5 ">
          Stay ahead, join our newsletter for admission tips and updates.
        </p>
      </div>
      {/* Footer Listings */}
      <div className=" footerListing gap-[2rem] mobile:flex mobile:flex-grow mobile:gap-[1rem] mobile:px-[2rem] md:gap-[2rem] ">
        {footerContent.map((obj, id) => (
          <FooterInfo key={id} header={obj.header} content={obj.content} />
        ))}
      </div>
    </div>
  );
}
export default FooterTop;
