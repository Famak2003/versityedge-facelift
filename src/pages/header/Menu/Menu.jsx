import { useEffect, useRef, useState } from "react";
import "./Menu.css";

import { NavLinks } from "./../../../components/common/NavLinks";
import { Features } from "./Features";

import Dropdown from "./../../../components/common/Dropdown";

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

export default function Menu({ isMenuOpen, menuRef }) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const featuresToggle = useRef();

  // handles Features dropdow
  function handleFeaturesClick() {
    setIsFeaturesOpen((open) => !open);
  }

  useEffect(function () {
    let handler = (e) => {
      if (!featuresToggle.current.contains(e.target)) setIsFeaturesOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <menu
      ref={menuRef}
      className={` ${
        isMenuOpen
          ? "right-[0] opacity-[1]"
          : "right-[-100%] opacity-[0] mobile:right-0 mobile:opacity-[1]"
      } main-nav absolute top-[80%] z-[999] flex h-[90vh] w-[12rem] flex-col items-center gap-[1rem] pt-5 backdrop-blur-sm transition-all duration-500 smobile:w-[15rem] mobile:relative mobile:flex mobile:h-fit mobile:w-fit mobile:flex-row mobile:items-start mobile:justify-center mobile:bg-transparent mobile:p-0 sm:gap-[2rem] md:ml-[8rem] md:text-[1.8rem] `}
    >
      {menuLinks.map((item, index) => {
        return item.text === "Features" ? (
          <li
            ref={featuresToggle}
            key={index}
            className={`relative cursor-pointer transition-all duration-500 `}
          >
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
