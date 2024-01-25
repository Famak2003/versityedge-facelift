import MENUICON from "./../../assets/majesticons_menu.png";
import { useEffect, useRef } from "react";
import AVATAR from "./../../assets/avatar.png";
import LOGOUT from "./../../assets/logout.png";
import Button from "./../../components/common/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AvatarAndLogout({
  handleMenu,
  setIsMenuOpen,
  menuRef,
}) {
  const isUserLoggedIn = useSelector((state) => state.auth.user);
  const menuToggle = useRef();

  // handles clicks outside the intended elements(harmburger menu and the elements inside it)
  useEffect(function () {
    let handleClickOutside = (e) => {
      if (
        !menuToggle.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      )
        setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    //isUserLoggedIn checks if user is logged to display the right UI
    <div className=" flex items-center justify-center ">
      {isUserLoggedIn ? (
        <div className="avatar-logout hidden h-[4rem] items-center justify-center gap-[2.5rem] mobile:flex">
          <img
            className=" h-full cursor-pointer object-contain"
            src={AVATAR}
            alt="avatar"
          />
          <img
            className=" h-[50%] cursor-pointer object-contain"
            src={LOGOUT}
            alt="logout"
          />
        </div>
      ) : (
        <div className=" flex gap-[1rem] ">
          <Link to={"/auth"}>
            <Button addstyle="hidden text-[#ffff] heroResponsiveText xs:py-[.1rem] mobile:py-[.4rem] lmobile:py-[.6rem] md:py-[.8rem] mobile:block">
              Sign up
            </Button>
          </Link>
        </div>
      )}
      <button
        ref={menuToggle}
        onClick={() => handleMenu()}
        className=" inline-block mobile:hidden"
      >
        <img src={MENUICON} alt="menu" />
        {}
      </button>
    </div>
  );
}
