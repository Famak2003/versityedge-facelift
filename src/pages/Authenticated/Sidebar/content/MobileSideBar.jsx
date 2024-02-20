import Navlinks from "../../../../components/common/NavLinks";
import { mobileMenuLinks } from "../Sidebar";

export function MobileSideBar() {
  return (
    <div className=" fixed bottom-0 lmobile:hidden bg-[var(--white)] z-[999] w-screen border-[var(--lightgray)] mobile:border-t-0 border-t-2">
      <ul className=" py-[1rem] flex items-center justify-between px-[2rem] ss:px-[4rem]">
        {mobileMenuLinks.map((obj, idx) => (
          <li
            className=" flex flex-col justify-center items-center gap-[.5rem] hover:text-[var(--blue)] duration-200 w-fit h-[4.2rem]"
            key={idx}
          >
            <figure className=" h-[2.4rem]">
              <img
                className=" h-full object-contain"
                src={obj.img}
                alt={obj.name}
              />
            </figure>
            <Navlinks key={obj.name} item={obj} />
            {/* <figcaption className=" text-[1.2rem]">{obj.name}</figcaption> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
