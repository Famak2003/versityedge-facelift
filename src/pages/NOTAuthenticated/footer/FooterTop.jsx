import FACEBOOK from "./../../../assets/facebook.png";
import WHATSAPP from "./../../../assets/whatsapp.png";
import LINKEDIN from "./../../../assets/Linkedin.png";
import TELEGRAM from "./../../../assets/telegram.png";
import FooterInfo from "./FooterInfo";
import { footerContent } from "./Footer";
import Email from "./../../../components/common/Email";

function FooterTop() {
  return (
    <div className=" footerTop flex flex-col gap-[3rem] lmobile:gap-[1rem] pt-[3rem] lmobile:py-[3rem] lmobile:flex-row sm:gap-[3rem] md:gap-[5rem] lg:gap-[7rem]">
      <div className=" order-2 lmobile:order-1 flex flex-col gap-[1rem] lmobile:w-[30%]">
        {/* Email */}
        <Email />
        <p className=" text-[1.8rem] text-center lmobile:text-left ">
          Stay ahead, join our newsletter for admission tips and updates.
        </p>
        <h2 className=" text-[1.6rem] text-[var(--blue)] text-center lmobile:text-left">
          Connect with us
        </h2>
        {/* social media links */}
        <figure className=" flex gap-[1.2rem] justify-center lmobile:justify-normal">
          <img
            className=" h-[1.5rem] scale-110 mobile:h-[2rem]"
            src={FACEBOOK}
            alt="social-media link"
          />
          <img
            className=" h-[1.5rem] mobile:h-[2rem]"
            src={TELEGRAM}
            alt="social-media link"
          />
          <img
            className=" h-[1.5rem] mobile:h-[2rem]"
            src={WHATSAPP}
            alt="social-media link"
          />
          <img
            className=" h-[1.5rem] mobile:h-[2rem]"
            src={LINKEDIN}
            alt="social-media link"
          />{" "}
        </figure>
      </div>
      {/* Footer Listings */}
      <div className=" footerListing order-1 lmobile:order-2 lmobile:w-[65%] gap-[2rem] mobile:flex mobile:flex-grow mobile:gap-[1rem] md:gap-[2rem] ">
        {footerContent.map((obj, id) => (
          <FooterInfo key={id} header={obj.header} content={obj.content} />
        ))}
      </div>
    </div>
  );
}
export default FooterTop;
