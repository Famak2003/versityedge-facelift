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

  function selectionColor(e) {
    e.preventDefault();
    e.target.classList.toggle("text-[#0A66C2]");
    console.log(e.target.className);
  }

  function handleFeaturesClick() {
    setIsFeaturesOpen((open) => !open);
  }
  return (
    <menu className="main-nav hidden gap-[1rem] mobile:flex sm:gap-[2rem] md:ml-[8rem] md:text-[1.8rem] ">
      <li
        onClick={(e) => selectionColor(e)}
        className=" heroResponsiveText cursor-pointer hover:text-[#0A66C2]"
      >
        <a className="" href="/">
          Home
        </a>
      </li>
      <li
        onClick={(e) => selectionColor(e)}
        className=" heroResponsiveText cursor-pointer hover:text-[#0A66C2]"
      >
        <a className="" href="/">
          Forum
        </a>
      </li>

      <li
        onClick={(e) => selectionColor(e)}
        className=" relative cursor-pointer duration-500 hover:text-[#0A66C2]"
      >
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
      <li
        onClick={(e) => selectionColor(e)}
        className=" heroResponsiveText cursor-pointer hover:text-[#0A66C2]"
      >
        <a className="" href="/">
          Blog
        </a>
      </li>
      <li
        onClick={(e) => selectionColor(e)}
        className=" heroResponsiveText cursor-pointer hover:text-[#0A66C2]"
      >
        <a className="" href="/">
          Contact us
        </a>
      </li>
    </menu>
  );
}
