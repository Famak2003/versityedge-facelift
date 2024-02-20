import { useRef } from "react";

import ARROW from "./../../../../assets/arrow.png";

export function Features({ handleFeaturesClick, isFeaturesOpen, item }) {
  const featuresToggle = useRef();

  return (
    <button
      ref={featuresToggle}
      onClick={handleFeaturesClick}
      className=" w-[8rem] features heroResponsiveText flex cursor-pointer items-center gap-[.2rem] "
    >
      {item.text}
      <figure className=" flex justify-center w-full h-full">
        <img
          src={ARROW}
          alt="img"
          className={` w-full object-contain transition-all duration-500  ${
            !isFeaturesOpen ? "" : "rotate-180"
          } scale-75`}
        />
      </figure>
    </button>
  );
}
