import Menu from "./Menu/Menu";
import AvatarAndLogout from "./AvatarAndLogout";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className=" flex h-[7rem] items-center px-[2rem] md:mt-[2rem] md:px-[4rem] lg:mt-[3rem] lg:px-[5rem]">
      <nav className=" my-[1rem] flex w-[100%] items-center justify-between ">
        <Logo />

        <Menu />

        <AvatarAndLogout />
      </nav>
    </header>
  );
}
