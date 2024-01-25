import Menu from "./Menu/Menu";
import AvatarAndLogout from "./AvatarAndLogout";
import Logo from "./Logo";
import { useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  function handleMenu() {
    setIsMenuOpen((open) => !open);
  }

  return (
    <header className=" flex h-[7rem] items-center px-[2rem] md:mt-[2rem] md:px-[4rem] lg:mt-[3rem] lg:px-[5rem]">
      <nav className=" relative my-[1rem] flex w-[100%] items-center justify-between">
        <Logo />

        <Menu isMenuOpen={isMenuOpen} menuRef={menuRef} />

        <AvatarAndLogout
          handleMenu={handleMenu}
          setIsMenuOpen={setIsMenuOpen}
          menuRef={menuRef}
        />
      </nav>
    </header>
  );
}
