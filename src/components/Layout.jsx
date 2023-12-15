import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../pages";

const Layout = () => {
  return (
    <div className="App flex max-w-[150rem] flex-col gap-[2rem] font-nunito text-xl sm:gap-[3rem] md:gap-[5rem] ">
      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
