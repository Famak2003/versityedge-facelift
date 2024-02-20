// import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../pages/NOTAuthenticated";

const NotAuthenticatedLayout = () => {
  return (
    <div className="App overflow-hidden flex flex-col text-xl gap-[1rem] lmobile:gap-[7rem] ">
      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default NotAuthenticatedLayout;
