import FACEBOOK from "./../../../assets/ic_round-facebook.png";
import INSTA from "./../../../assets/insta.png";
import LINKEDIN from "./../../../assets/Linkedin.png";
import SENDICON from "./../../../assets/send-icon.png";
import FooterInfo from "./FooterInfo";
import { footerContent } from "../Footer";

export default function FooterTop() {
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
        <form className="flex h-[3.5rem] w-[80%] items-center justify-between rounded-[2rem] bg-[#ffffff] px-[1rem] mobile:h-[2.4rem] mobile:w-full mobile:px-[.5rem] lmobile:h-[3.2rem] sm:h-[4.5rem] sm:px-[.7rem] md:px-[1.2rem] lg:px-[2rem] ">
          <input
            type="email"
            required
            className=" float-left w-[70%] bg-transparent text-[1rem] text-[#6E7070]  focus:outline-none mobile:text-[.6rem] lmobile:text-[.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] "
            placeholder="versityedge@gmail.com"
          />
          {/* send button */}
          <button
            type="submit"
            className=" float-right flex items-center justify-center rounded-[1.6rem] bg-[#46A2FE] px-[.8rem] text-[1.2rem] duration-500 hover:bg-[#8fc7ff] xs:py-[.4rem] mobile:px-[.3rem] mobile:py-0 mobile:text-[.7rem] lmobile:px-[.2rem] lmobile:py-[.4rem] lmobile:text-[.9rem] sm:px-[1rem] sm:py-[.5rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem]   "
          >
            <span>
              <img
                className=" mr-[.9rem] h-[1.5rem] mobile:mr-[.5rem] mobile:h-[.8rem] lmobile:mr-[.2rem] lmobile:h-[1rem] sm:mr-[.6rem] sm:h-[1.2rem] md:mr-[.8rem] md:h-[1.5rem] lg:h-[1.8rem] xl:h-[2rem]"
                src={SENDICON}
                alt="send"
              />
            </span>
            Send
          </button>
        </form>
        <p className=" mobile:reponsiveMiniText1 text-[1rem] leading-5 ">
          Stay ahead, join our newsletter for admission tips and updates.
        </p>
      </div>

      <div className=" grid grid-cols-2 gap-[2rem] mobile:flex mobile:flex-grow mobile:gap-[1rem] mobile:px-[2rem] md:gap-[2rem] ">
        {footerContent.map((obj, id) => (
          <FooterInfo key={id} header={obj.header} content={obj.content} />
        ))}
      </div>
    </div>
  );
}
