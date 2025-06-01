import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import GotoTop from "../components/GotoTop";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
        <GotoTop/>
      </div>
      <Footer />
    </>
  ); 
};

export default Root;
