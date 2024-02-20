import "./Sidebar.css";

import HAMBURGER from "./../../../assets/hamburger.png";
import CANCEL from "./../../../assets/cancel.png";

import HOME from "./../../../assets/home-icon.png";
import CLASSES from "./../../../assets/classLogo.png";
import MOCK from "./../../../assets/mock-icon.png";
import WALLET from "./../../../assets/wallet-icon.png";

import * as Hooks from "./../../../hooks/index";
import { useRef } from "react";
import { MobileSideBar } from "./content/MobileSideBar";
import { DesktopSidebar } from "./content/DesktopSidebar";

export const menuLinks = [
  { text: "Overview", path: "/dashboard" },
  { text: "Materials", path: "/dashboard/materials" },
  { text: "Classes", path: "/dashboard/classes" },
  { text: "Mock Exams", path: "/dashboard/mockExam" },
  { text: "Advisor", path: "/dashboard/advisor" },
  { text: "Wallet", path: "/dashboard/wallet" },
  { text: "Blog", path: "/dashboard/blog" },
  { text: "Forum", path: "/dashboard/forum" },
  { text: "Settings", path: "/dashboard/settings" },
];

export const mobileMenuLinks = [
  { img: HOME, text: "Home", path: "/dashboard" },
  { img: CLASSES, text: "Classes", path: "/dashboard/classes" },
  { img: MOCK, text: "Mock Test", path: "/dashboard/mockExam" },
  { img: WALLET, text: "Wallet", path: "/dashboard/wallet" },
];

function Sidebar({ sideBarOpen, setSideBarOpen }) {
  // const [sideBarOpen, setSideBarOpen] = useState(false);
  const sidebarRef = useRef();
  Hooks.useOutsideClick(sidebarRef, setSideBarOpen);

  function handleClick() {
    setSideBarOpen(!sideBarOpen);
  }
  return (
    <nav
      ref={sidebarRef}
      className={` ${
        sideBarOpen ? "lmobile:w-[18%]" : "lmobile:w-[0%]"
      } lg:w-[18%] relative duration-300 h-[7rem] order-2 lmobile:order-1 lmobile:h-screen w-full `}
    >
      <button
        onClick={() => handleClick()}
        className=" z-[999] hidden lmobile:block lg:hidden absolute top-[1rem] right-[-5.5rem] h-[3rem] w-[3rem]"
      >
        <img
          src={sideBarOpen ? CANCEL : HAMBURGER}
          alt="menu"
          className=" h-full object-contain"
        />
      </button>
      {/* // desktop - tab sidebar // */}
      <DesktopSidebar sideBarOpen={sideBarOpen} />
      {/* // mobile sidebar // */}
      <MobileSideBar />
    </nav>
  );
}

export default Sidebar;
