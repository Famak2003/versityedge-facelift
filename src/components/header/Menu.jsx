import { Link } from "react-router-dom";

import ARROW from "./../../assets/arrow.png";
import Dropdown from "../common/Dropdown";
import { useState } from "react";

const dropdownContent = [
  { content: "Predict your chance", link: "predictChance" },
  { content: "Join virtual tutouring program", link: "virtualProgram" },
  { content: "Personalized study plan", link: "personalStudy" },
  { content: "Quiz-based assessment", link: "quiz" },
  { content: "Student/Parent community", link: "studentCommunity" },
];

const menuLinks = [
  { text: "Home", link: "/" },
  { text: "Forum", link: "/forum" },
  { text: "Features" },
  { text: "Blog", link: "/blog" },
  { text: "Contact Us", link: "/contactUs" },
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
            <Link className="" to={item.link}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}
