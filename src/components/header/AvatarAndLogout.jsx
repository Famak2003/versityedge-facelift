import MENUICON from "./../../assets/majesticons_menu.png";
import { useEffect, useReducer, useRef } from "react";
import AVATAR from "./../../assets/avatar.png";
import LOGOUT from "./../../assets/logout.png";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const initialState = {
  isUserLoggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loggedIn":
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case "notLoggedIn":
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      throw new Error("Having Issues with Logging User in");
  }
}

export default function AvatarAndLogout({
  handleMenu,
  setIsMenuOpen,
  menuRef,
}) {
  const [{ isUserLoggedIn }, dispatch] = useReducer(reducer, initialState);
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

  // OnLoad, log in state will be set to false/notLoggedIn
  useEffect(function () {
    dispatch({ type: "notLoggedIn" });

    return () => {};
  }, []);

  return (
    //isUserLoggedIn checks if user is logged to display the right UI
    <>
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
          <Link to={"/signUp"}>
            <Button addstyle=" text-[#ffff] heroResponsiveText xs:py-[.1rem] mobile:py-[.4rem] lmobile:py-[.6rem] md:py-[.8rem]">
              Sign up
            </Button>
          </Link>

          <button
            ref={menuToggle}
            onClick={() => handleMenu()}
            className=" inline-block mobile:hidden"
          >
            <img src={MENUICON} alt="menu" />
            {}
          </button>
        </div>
      )}
    </>
  );
}
