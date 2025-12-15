import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className=" max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
