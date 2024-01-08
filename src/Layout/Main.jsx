import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";

const Main = () => {


  return (
    <section className="max-w-screen-[1964px] mx-auto">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <NavBar></NavBar>
          {/* content goes here  */}
          <Outlet></Outlet>
        </div>
        {/* sidebar  */}
        <Sidebar></Sidebar>
      </div>
    </section>
  );
};

export default Main;
