import { useRef } from "react";
// import useOutsideClick from "../../useOutsideClick/useOutsideClick";
import ARROW from "./../../../assets/arrow.png";

export function Features({
  handleFeaturesClick,
  isFeaturesOpen,
  item,
  setIsFeaturesOpen,
}) {
  const featuresToggle = useRef();
  // useOutsideClick(featuresToggle, setIsFeaturesOpen(false));

  return (
    <button
      ref={featuresToggle}
      onClick={handleFeaturesClick}
      className=" features heroResponsiveText flex cursor-pointer items-center gap-[.5rem] "
    >
      {item.text}
      <span>
        <img
          src={ARROW}
          alt="img"
          className={`h-[full] transition-all duration-500  ${
            !isFeaturesOpen ? "" : "rotate-180"
          } scale-75`}
        />
      </span>
    </button>
  );
}
