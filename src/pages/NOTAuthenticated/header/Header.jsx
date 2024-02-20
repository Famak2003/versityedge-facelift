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
    <header className=" flex h-fit items-center mt-[3rem] px-[2rem] lmobile:px-[3rem] sm:px-[3rem]">
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
