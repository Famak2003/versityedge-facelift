import "./Menu.css";

import * as Components from "./../../../../components/common/index";

const menuLinks = [
  { text: "Home", path: "/" },
  { text: "Programs", path: "/forum" },
  { text: "Success stories" },
  { text: "Blog", path: "/blogs" },
];

export default function Menu({ isMenuOpen, menuRef }) {
  return (
    <menu
      ref={menuRef}
      className={` ${
        isMenuOpen
          ? "right-[0] opacity-[1]"
          : "right-[-100%] opacity-[0] lmobile:right-0 lmobile:opacity-[1]"
      } main-nav absolute top-[80%] z-[999] flex h-[90vh] w-[12rem] flex-col items-center gap-[2rem] pt-5 backdrop-blur-sm transition-all duration-500 smobile:w-[15rem] lmobile:relative lmobile:flex lmobile:h-fit lmobile:w-fit lmobile:flex-row lmobile:items-start lmobile:justify-center lmobile:bg-transparent lmobile:p-0 sm:gap-[2rem] md:ml-[8rem] text-[1.8rem] `}
    >
      {menuLinks.map((item, index) => {
        return (
          <li
            key={index}
            className={` text-[2rem] cursor-pointer hover:text-[#0A66C2] `}
          >
            <Components.NavLinks item={item} />
          </li>
        );
      })}
    </menu>
  );
}
