import Button from "../common/Button";
import MENUICON from "./../../assets/majesticons_menu.png";

export default function MobileHeader() {
  return (
    <div className=" flex gap-[1rem] mobile:hidden">
      <Button addstyle=" text-[#ffff] xs:text-[.9rem] smobile:text-[1rem] xs:py-[.1rem]">
        Sign up
      </Button>
      <button>
        <img src={MENUICON} alt="menu" />
      </button>
    </div>
  );
}
