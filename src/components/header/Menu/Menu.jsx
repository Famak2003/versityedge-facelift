import { useState } from "react";
import "./Menu.css";

import { NavLinks } from "../../common/NavLinks";
import { Features } from "./Features";

import Dropdown from "./../../common/Dropdown";

const dropdownContent = [
  { text: "Predict your chance", path: "predictChance" },
  { text: "Join virtual tutouring program", path: "virtualProgram" },
  { text: "Personalized study plan", path: "personalStudy" },
  { text: "Quiz-based assessment", path: "quiz" },
  { text: "Student/Parent community", path: "studentCommunity" },
];

const menuLinks = [
  { text: "Home", path: "/" },
  { text: "Forum", path: "/forum" },
  { text: "Features" },
  { text: "Blog", path: "/blogs" },
  { text: "Contact Us", path: "/contactUs" },
];

export default function Menu() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  // handles Features dropdow
  function handleFeaturesClick() {
    setIsFeaturesOpen((open) => !open);
  }
  return (
    <menu className="main-nav hidden gap-[1rem] mobile:flex sm:gap-[2rem] md:ml-[8rem] md:text-[1.8rem] ">
      {menuLinks.map((item, index) => {
        return item.text === "Features" ? (
          <li key={index} className={` duration-500} relative cursor-pointer`}>
            <Features
              handleFeaturesClick={handleFeaturesClick}
              isFeaturesOpen={isFeaturesOpen}
              item={item}
            />
            {isFeaturesOpen && <Dropdown content={dropdownContent} />}
          </li>
        ) : (
          <li
            key={index}
            className={` heroResponsiveText cursor-pointer hover:text-[#0A66C2] `}
          >
            <NavLinks item={item} />
          </li>
        );
      })}
    </menu>
  );
}
