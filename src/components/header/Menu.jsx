import { Link } from "react-router-dom";

import ARROW from "./../../assets/arrow.png";
import Dropdown from "../common/Dropdown";
import { useState } from "react";

const dropdownContent = [
  { content: "Predict your chance", path: "predictChance" },
  { content: "Join virtual tutouring program", path: "virtualProgram" },
  { content: "Personalized study plan", path: "personalStudy" },
  { content: "Quiz-based assessment", path: "quiz" },
  { content: "Student/Parent community", path: "studentCommunity" },
];

const menuLinks = [
  { text: "Home", path: "/" },
  { text: "Forum", path: "/forum" },
  { text: "Features" },
  { text: "Blog", path: "/blog" },
  { text: "Contact Us", path: "/contactUs" },
];

export default function Menu({ currentIndex, onCurrentIndex }) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  // handles which page is active
  function handleCurrentPage(index) {
    onCurrentIndex(index);
  }

  // handles Features dropdow
  function handleFeaturesClick() {
    setIsFeaturesOpen((open) => !open);
  }
  return (
    <menu className="main-nav hidden gap-[1rem] mobile:flex sm:gap-[2rem] md:ml-[8rem] md:text-[1.8rem] ">
      {menuLinks.map((item, index) => {
        return item.text === "Features" ? (
          <li
            key={index}
            onClick={() => handleCurrentPage(index)}
            className={` relative cursor-pointer duration-500 hover:text-[#0A66C2] ${
              currentIndex === index ? "text-[#0A66C2]" : ""
            }`}
          >
            <button
              onClick={handleFeaturesClick}
              className=" heroResponsiveText flex cursor-pointer items-center gap-[.5rem] "
            >
              {item.text}
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
        ) : (
          <li
            key={index}
            onClick={(e) => handleCurrentPage(index)}
            className={` heroResponsiveText cursor-pointer hover:text-[#0A66C2] ${
              currentIndex === index ? "text-[#0A66C2]" : ""
            } `}
          >
            <Link className="" to={item.path}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}
