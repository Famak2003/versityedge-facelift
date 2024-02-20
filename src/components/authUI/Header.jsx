import AVATAR from "./../../assets/avatar.png";
import NOTIFICATION from "./../../assets/notification.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slice/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

import BACK from "./../../assets/back-icon.png";

import * as Components from "./../../components/common/index";
import { toast } from "react-toastify";

import { motion } from "framer-motion";
import { headerVariant } from "../../effects";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    dispatch(logoutUser());
    toast("Logged out");
    navigate("/", { replace: true });
  }
  function handleBack() {
    navigate(-1);
  }
  return (
    <motion.header
      variants={headerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className=" z-0 lmobile:flex-row flex-col gap-[2rem] pt-[.5rem] lmobile:pt-[3rem] lmobile:gap-0 mt-[4rem] lmobile:mt-8 flex justify-between w-full"
    >
      <div className=" hidden lmobile:block order-1 w-[44.2rem]">
        <Components.Search />
      </div>
      <div className=" order-1 lmobile:order-2 flex items-center justify-between">
        {/* // checks whether to include the back button // */}
        <button
          onClick={() => handleBack()}
          className={`Back-Button lmobile:hidden ${
            location.pathname.endsWith("dashboard") ? "hidden" : "inline-block"
          } h-[3rem]`}
        >
          <img className=" h-full object-contain" src={BACK} alt="back" />
        </button>
        <h1
          className={` ${
            location.pathname.endsWith("dashboard") ? "block" : "hidden"
          } lmobile:hidden text-[4rem] lmobile:text-[3.6rem] font-semibold whitespace-pre-wrap w-[5rem] mobile:whitespace-normal mobile:w-fit  `}
        >
          Hell0! Israel
        </h1>
        <div className="avatar-logout h-[4rem] items-center justify-center gap-[2.5rem] flex">
          <button className="">
            <img
              className=" h-[50%] cursor-pointer object-contain"
              src={NOTIFICATION}
              alt="notification"
            />
          </button>
          <button className="h-full" onClick={() => handleLogout()}>
            <img
              className=" h-full cursor-pointer object-contain"
              src={AVATAR}
              alt="avatar"
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
