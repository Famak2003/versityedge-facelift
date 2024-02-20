import { Link } from "react-router-dom";
import LOGO from "./../../../assets/logo.png";

export default function Logo() {
  return (
    <figure className="logo flex items-center justify-center overflow-hidden rounded-full bg-white px-[6px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-[5rem] w-[5rem] lmobile:h-[9rem] lmobile:w-[9rem] ">
      <Link to={"/"}>
        <img
          className="h-full w-full scale-[80%] cursor-pointer object-contain"
          src={LOGO}
          alt="Versity Edge"
        />
      </Link>
    </figure>
  );
}
