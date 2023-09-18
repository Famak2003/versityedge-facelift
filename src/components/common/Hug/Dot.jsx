import DOT from "./../../../assets/Dot.png";

export function Dot({ dotPosition, img }) {
  return (
    <figure
      className={`absolute bottom-[-5%] h-[.5rem] sm:h-[.7rem] md:h-[1rem] ${
        dotPosition === "LeftBottom"
          ? "left-0 translate-x-[-200%] sm:translate-x-[-300%]"
          : dotPosition === "RightBottom"
          ? "right-0 translate-x-[200%] sm:translate-x-[300%]"
          : ""
      }`}
    >
      <img
        className="  h-full rounded-full ring-[.4rem] ring-[#9DCEFF]"
        src={DOT}
        alt="dot"
      />
    </figure>
  );
}
