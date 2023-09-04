import MAINLOGO from "./../../assets/logo.png";

export default function FooterButtom() {
  return (
    <div className=" flex w-fit flex-col gap-[1.5rem] text-[#ffff] mobile:flex-row mobile:items-center mobile:gap-[10%] ">
      <div className=" flex h-fit items-center gap-[1.5rem] mobile:gap-[1rem] md:gap-[2rem]">
        <figure className="flex h-[6rem] w-[6rem] rounded-full bg-white sm:h-[8rem] sm:w-[8rem]">
          <img className="scale-[70%]" src={MAINLOGO} alt="versityedge" />
        </figure>
        <div className="">
          <h1 className=" mobile:SliderResponsiveHeader text-[1.2rem] font-bold">
            VersityEdge
          </h1>
          <p className=" text-[1rem] mobile:text-[.6rem] lmobile:text-[.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem]">
            Admission at a go
          </p>
        </div>
      </div>

      <ul className=" mobile:reponsiveMiniText1 list-outside list-disc pl-[4%] text-[1rem] leading-6 mobile:pl-0 ">
        <li>
          The content and materials on this website, including text, images, and
          documents belong to their repective owners unless specified otherwise
        </li>
        <li>
          VersityEgde and its logo are registered trademakersand may not be used
          without explicit permission{" "}
        </li>
        <li>
          The use of institution logos and brand names does not imply
          association with VersityEdge.
        </li>
      </ul>
    </div>
  );
}
