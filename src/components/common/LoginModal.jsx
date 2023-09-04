import CANCEL from "./../../assets/ic_outline-cancel.png";
import EXCLAMATION from "./../../assets/exclamation-caution-circle.png";
import Button from "./Button";


export default function LoginModal() {
  return (
    <div className=" absolute left-[50%] top-[2%] z-10 flex w-[30rem] translate-x-[-50%] flex-col items-center gap-[2rem] rounded-xl bg-white px-[1rem] py-[2rem] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ">
      <div className=" flex h-[2rem] w-full flex-col ">
        <img className=" h-full self-end" src={CANCEL} alt="img" />
      </div>
      <figure className="flex flex-col items-center gap-[1.5rem]">
        <img className=" h-[4rem]" src={EXCLAMATION} alt="img" />
        <figcaption>Hey User!</figcaption>
      </figure>
      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        accusamus placeat iste fuga saepe eos vel consectetur totam ex
        voluptatibus soluta libero dolores exercitationem ullam, modi quae
        dolorem nesciunt quam.
      </p>

      <Button addstyle="text-[#ffffff] py-[.5rem]">Sign up</Button>
      <Button addstyle="bg-[#ffffff] py-[.5rem] ring ring-1-[#0A66C2] text-[#0A66C2]">
        Login
      </Button>
    </div>
  );
}
