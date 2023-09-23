import SOCIAL1 from "./../../../assets/blue-facebook.png";
import SOCIAL2 from "./../../../assets/blue-insta.png";
import SOCIAL3 from "./../../../assets/blue-linkedin.png";

export function TeamImg({ index, obj }) {
  return (
    <figure
      key={index}
      className=" flex h-fit w-full flex-col mobile:gap-[1rem] md:gap-[2rem]"
    >
      <img className=" w-fit object-contain" src={obj.img} alt="img" />
      <figcaption className=" flex flex-col text-left mobile:gap-[.3rem] lmobile:gap-[.5rem] sm:gap-[.9rem] ">
        <p className=" SliderResponsiveHeader font-bold">{obj.name}</p>
        <div className=" flex h-[.9rem] items-center justify-start gap-[3%] mobile:h-[1rem] lmobile:h-[1.2rem] sm:h-[1.5rem]">
          <p className=" text-[.7rem] leading-3 mobile:text-[.9rem] mobile:leading-4 sm:text-[1.2rem] md:text-[1.4rem] md:leading-5 lg:text-[1.8rem]">
            {obj.position}
          </p>
          <img
            className=" h-full object-contain"
            src={SOCIAL1}
            alt="facebook"
          />
          <img
            className=" h-full object-contain"
            src={SOCIAL2}
            alt="instagram"
          />
          <img
            className=" h-full object-contain"
            src={SOCIAL3}
            alt="linkedin"
          />
        </div>
      </figcaption>
    </figure>
  );
}
