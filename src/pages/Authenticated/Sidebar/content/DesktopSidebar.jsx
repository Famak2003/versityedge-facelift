import Navlinks from "../../../../components/common/NavLinks";
import Logo from "../../../../components/authUI/Logo";
import { menuLinks } from "../Sidebar";

export function DesktopSidebar({ sideBarOpen }) {
  return (
    <div
      className={`hidden lg:flex ${
        sideBarOpen ? "lmobile:flex" : "lmobile:hidden"
      }  pl-[2rem] sm:pl-[3rem] justify-start pt-[15%] items-center flex-col h-full gap-[8.4%] w-full`}
    >
      <div className=" flex w-full px-6 mb-8 flex-col justify-center items-start">
        <Logo />
      </div>
      <ul className=" flex flex-col w-full self-end gap-[3rem]">
        {menuLinks.map((obj, idx) => (
          <li key={idx} className=" text-[2rem]">
            <Navlinks item={obj} />
          </li>
        ))}
      </ul>
    </div>
  );
}
