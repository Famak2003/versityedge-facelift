import { Link } from "react-router-dom";

import LOGO from "./../../assets/versityedge-logo.png";

function Logo() {
  return (
    <figure className="logo flex h-[7rem] w-[7rem] items-center justify-center overflow-hidden rounded-full bg-white px-[6px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:h-[7rem] md:w-[7rem] ">
      <Link to={"/dashboard"}>
        <img
          className="h-full w-full scale-[80%] cursor-pointer object-contain"
          src={LOGO}
          alt="Versity Edge"
        />
      </Link>
    </figure>
  );
}

export default Logo;
