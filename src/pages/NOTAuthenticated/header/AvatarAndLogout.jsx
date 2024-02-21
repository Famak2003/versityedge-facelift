import MENUICON from "./../../../assets/majesticons_menu.png";
import { useEffect, useRef } from "react";
import AVATAR from "./../../../assets/avatar.png";
import LOGOUT from "./../../../assets/logout.png";
import Button from "./../../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/slice/authSlice";
import { toast } from "react-toastify";

import WHATSAPP from "./../../../assets/whatsapp-icon.png";

export default function AvatarAndLogout({
  handleMenu,
  setIsMenuOpen,
  menuRef,
}) {
  const isUserLoggedIn = useSelector((state) => state.auth.user);
  const menuToggle = useRef();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    toast("Logged out");
    console.log("User logged out");
  }

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
    <div className=" flex items-center justify-center h-[4rem] ">
      {isUserLoggedIn ? (
        <div className="avatar-logout hidden h-[4rem] items-center justify-center gap-[2.5rem] mobile:flex">
          <img
            className=" h-full cursor-pointer object-contain"
            src={AVATAR}
            alt="avatar"
          />
          <button onClick={handleLogout}>
            <img
              className=" h-[50%] cursor-pointer object-contain"
              src={LOGOUT}
              alt="logout"
            />
          </button>
        </div>
      ) : (
        <div className=" flex justify-center items-center gap-[1.5rem] md:gap-[2rem] ">
          <Button
            path={"/auth/login"}
            glow={true}
            addstyle=" flex rounded-[1rem] lmobile:rounded-[2rem] text-[#ffff] text-[1.8rem] xs:py-[.1rem] mobile:py-[.4rem] lmobile:py-[.6rem] md:py-[.8rem] justify-center items-center gap-[.7rem] bg-[var(--white)] text-[var(--blue)] ring-1 ring-[var(--blue)]"
          >
            Join us{" "}
            <img className=" h-[2.4rem]" src={WHATSAPP} alt="whats-app" />
          </Button>

          <Button
            path={"/auth/login"}
            addstyle=" hidden lmobile:flex rounded-[1rem] lmobile:rounded-[2rem] text-[#ffff] text-[1.8rem] xs:py-[.1rem] mobile:py-[.4rem] lmobile:py-[.6rem] md:py-[.8rem] lmobile:block"
          >
            Login
          </Button>
        </div>
      )}
      <button
        ref={menuToggle}
        onClick={() => handleMenu()}
        className=" h-full inline-block lmobile:hidden"
      >
        <img className=" h-full object-contain" src={MENUICON} alt="menu" />
      </button>
    </div>
  );
}
