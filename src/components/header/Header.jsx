import Menu from "./Menu";
import AvatarAndLogout from "./AvatarAndLogout";
import Logo from "./Logo";
import MobileHeader from "./MobileHeader";
import { useState } from "react";

export default function Header() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <header className=" flex h-[7rem] items-center px-[2rem] md:mt-[2rem] md:px-[4rem] lg:mt-[3rem] lg:px-[5rem]">
      <nav className=" my-[1rem] flex w-[100%] items-center justify-between ">
        <Logo />

        <MobileHeader />

        <Menu currentIndex={currentPage} onCurrentIndex={setCurrentPage} />

        <AvatarAndLogout />
      </nav>
    </header>
  );
}
