import HaveQuestions from "./HaveQuestions/HaveQuestions";
import HearFromYou from "./HearFromYou/HearFromYou";
import Hero from "./Hero.";

function ContactUs() {
  return (
    <div className=" flex flex-col gap-[4rem] lmobile:gap-[5rem] md:gap-[8rem]">
      <Hero />
      <HearFromYou />
      <HaveQuestions />
    </div>
  );
}

export default ContactUs;

// ? " absolute left-[10%] top-0 "
//                     : index === 1
//                     ? " absolute top-[50%] translate-y-[-50%]"
//                     : index === 2
//                     ? " absolute bottom-0 right-0"
//                     : ""
