import ARROW from "./../../assets/arrow.png";
import Dropdown from "../common/Dropdown";
import { useState } from "react";

const dropdownContent = [
  "Predict your chance",
  "Join virtual tutouring program",
  "Personalized study plan",
  "Quiz-based assessment",
  "Student/Parent community",
];

export default function Menu() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  function handleFeaturesClick() {
    setIsFeaturesOpen((open) => !open);
    console.log(isFeaturesOpen);
  }
  return (
    <menu className="main-nav hidden gap-[1rem] mobile:flex sm:gap-[2rem] md:ml-[8rem] md:text-[1.8rem] ">
      <li className=" heroResponsiveText cursor-pointer">
        <a className="" href="/">
          Home
        </a>
      </li>
      <li className=" heroResponsiveText cursor-pointer">
        <a className="" href="/">
          Forum
        </a>
      </li>

      <li className=" relative cursor-pointer duration-500">
        <button
          onClick={handleFeaturesClick}
          className=" heroResponsiveText flex cursor-pointer items-center gap-[.5rem] "
        >
          Features
          <span>
            <img
              src={ARROW}
              alt="img"
              className={`h-[full] ${
                !isFeaturesOpen ? "" : "rotate-180"
              } scale-75`}
            />
          </span>
        </button>
        {isFeaturesOpen && <Dropdown content={dropdownContent} />}
      </li>
      <li className=" heroResponsiveText cursor-pointer">
        <a className="" href="/">
          Blog
        </a>
      </li>
      <li className=" heroResponsiveText cursor-pointer">
        <a className="" href="/">
          Contact us
        </a>
      </li>
    </menu>
  );
}
