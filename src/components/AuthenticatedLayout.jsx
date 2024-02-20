import { Outlet } from "react-router-dom";
import * as AuthUI from "./authUI/index";
import { useState } from "react";
import SideBar from "./../pages/Authenticated/Sidebar/Sidebar";

function AuthenticatedLayout() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div>
      <div className="AuthApp overflow-hidden flex justify-between lmobile:flex-row flex-col w-full">
        <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />

        <main
          className={` flex flex-col gap-[1rem] lmobile:gap-[4rem] pl-8 pb-[3rem] lmobile:pb-[5rem] order-1 lmobile:order-2 border-[var(--lightgray)] lmobile:border-l-2 ${
            sideBarOpen ? "w-[80%]" : " w-full"
          } lg:w-[80%] pr-[2rem]`}
        >
          <AuthUI.Header />
          <Outlet />
        </main>
      </div>
      {/* <AuthUI.Footer /> */}
    </div>
  );
}

export default AuthenticatedLayout;
